<?php
/**
 * Booking / enquiry mail endpoint for the Zanzione Tours static site.
 *
 * The site is a static export (no Node runtime), so form submissions are
 * delivered by this small PHP script sitting alongside the exported HTML on the
 * cPanel host. It speaks SMTP directly — no Composer, no PHPMailer — so it can
 * be dropped onto the server as-is.
 *
 * Credentials live in mail-config.php, which is NOT in the repository.
 */

declare(strict_types=1);

// ─────────────────────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────────────────────
$configPath = __DIR__ . '/mail-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => 'Mail is not configured on this server.']);
    exit;
}
$config = require $configPath;

// ─────────────────────────────────────────────────────────────
// CORS + method guard
// ─────────────────────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && in_array($origin, $config['allowed_origins'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// ─────────────────────────────────────────────────────────────
// Rate limit — a crude per-IP throttle to blunt drive-by spam
// ─────────────────────────────────────────────────────────────
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$throttleFile = sys_get_temp_dir() . '/zanzione-mail-' . md5($ip);
if (is_file($throttleFile) && (time() - filemtime($throttleFile)) < 20) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Please wait a moment before sending again.']);
    exit;
}

// ─────────────────────────────────────────────────────────────
// Input
// ─────────────────────────────────────────────────────────────
$raw  = file_get_contents('php://input') ?: '';
$body = json_decode($raw, true);
if (!is_array($body)) {
    $body = $_POST;
}

/** Collapse whitespace and strip control chars so values can't break headers. */
function clean($value, int $max = 2000): string {
    if (!is_scalar($value)) {
        return '';
    }
    $value = (string) $value;
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return trim(mb_substr($value, 0, $max));
}

// Honeypot: a field real users never see and never fill in.
if (clean($body['company'] ?? '') !== '') {
    echo json_encode(['ok' => true]); // Play dead rather than tipping off the bot.
    exit;
}

$formType = clean($body['formType'] ?? 'Booking Request', 60) ?: 'Booking Request';
$name     = clean($body['fullName'] ?? $body['name'] ?? '', 120);
$email    = clean($body['email'] ?? '', 160);
$phone    = clean($body['phone'] ?? '', 60);

if ($name === '' || $email === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Name and email are required.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'That email address does not look valid.']);
    exit;
}

// Every remaining field is rendered generically, so new form fields need no
// change here — the front end decides what to send.
$skip   = ['company', 'formType', 'fullName', 'name', 'email', 'phone'];
$detail = [];
foreach ($body as $key => $value) {
    if (in_array($key, $skip, true)) {
        continue;
    }
    $value = clean($value);
    if ($value !== '') {
        // camelCase / snake_case -> "Title Case"
        $label = preg_replace('/(?<!^)[A-Z]/', ' $0', str_replace('_', ' ', (string) $key)) ?? (string) $key;
        $detail[ucwords(trim($label))] = $value;
    }
}

// ─────────────────────────────────────────────────────────────
// Compose
// ─────────────────────────────────────────────────────────────
$rows = '';
$text = '';
$fields = array_merge(
    ['Name' => $name, 'Email' => $email, 'Phone' => $phone !== '' ? $phone : '—'],
    $detail
);
foreach ($fields as $label => $value) {
    $rows .= '<tr>'
        . '<td style="padding:10px 14px;border-bottom:1px solid #dbe7ef;color:#647b8f;font:600 13px/1.4 Arial,sans-serif;white-space:nowrap;vertical-align:top">'
        . htmlspecialchars((string) $label, ENT_QUOTES, 'UTF-8')
        . '</td>'
        . '<td style="padding:10px 14px;border-bottom:1px solid #dbe7ef;color:#071d35;font:400 14px/1.5 Arial,sans-serif">'
        . nl2br(htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8'))
        . '</td></tr>';
    $text .= $label . ': ' . $value . "\n";
}

$submitted = gmdate('D, d M Y H:i') . ' UTC';
$subject   = sprintf('[Website] %s — %s', $formType, $name);

$html = '<!doctype html><html><body style="margin:0;background:#f5fafc;padding:24px">'
    . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dbe7ef">'
    . '<tr><td style="background:#022f6a;padding:22px 24px">'
    . '<div style="color:#ffffff;font:700 19px/1.3 Arial,sans-serif">ZANZIONE TOURS &amp; SAFARIS</div>'
    . '<div style="color:#04afdd;font:600 12px/1.4 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;margin-top:6px">'
    . htmlspecialchars($formType, ENT_QUOTES, 'UTF-8') . '</div>'
    . '</td></tr>'
    . '<tr><td style="padding:20px 24px 6px;color:#647b8f;font:400 13px/1.5 Arial,sans-serif">'
    . 'Submitted ' . $submitted . '</td></tr>'
    . '<tr><td style="padding:6px 10px 20px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">'
    . $rows . '</table></td></tr>'
    . '<tr><td style="padding:16px 24px;background:#f5fafc;color:#647b8f;font:400 12px/1.5 Arial,sans-serif">'
    . 'Reply directly to this email to answer ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '.'
    . '</td></tr></table></body></html>';

$plain = "ZANZIONE TOURS & SAFARIS\n" . $formType . "\nSubmitted " . $submitted . "\n\n" . $text;

// ─────────────────────────────────────────────────────────────
// Send
// ─────────────────────────────────────────────────────────────
try {
    smtp_send($config, $subject, $html, $plain, $email, $name);
    @touch($throttleFile);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    error_log('[zanzione-mail] ' . $e->getMessage());
    http_response_code(502);
    // Never leak SMTP internals to the browser.
    echo json_encode(['ok' => false, 'error' => 'We could not send your request by email.']);
}

// ─────────────────────────────────────────────────────────────
// Minimal SMTP client
// ─────────────────────────────────────────────────────────────

/** RFC 5321 caps a reply line at 512 octets; +3 for the fgets NUL and CRLF. */
const SMTP_LINE_LIMIT = 515;

/** Reads a full multi-line SMTP reply and asserts the expected status code. */
function smtp_expect($socket, int $code, string $stage): string {
    $reply = '';
    while (($line = fgets($socket, SMTP_LINE_LIMIT)) !== false) {
        $reply .= $line;
        // The last line of a reply has a space (not a hyphen) in column 4.
        if (strlen($line) < 4 || $line[3] !== '-') {
            break;
        }
    }
    if ((int) substr($reply, 0, 3) !== $code) {
        throw new RuntimeException($stage . ' failed: ' . trim($reply));
    }
    return $reply;
}

function smtp_write($socket, string $line): void {
    fwrite($socket, $line . "\r\n");
}

function smtp_send(array $config, string $subject, string $html, string $plain, string $replyTo, string $replyName): void {
    $transport = $config['secure'] === 'ssl' ? 'ssl://' : 'tcp://';
    $socket = @stream_socket_client(
        $transport . $config['host'] . ':' . $config['port'],
        $errNo,
        $errStr,
        20,
        STREAM_CLIENT_CONNECT
    );
    if (!$socket) {
        throw new RuntimeException("Connect failed: $errStr ($errNo)");
    }
    stream_set_timeout($socket, 20);

    smtp_expect($socket, 220, 'Greeting');

    $ehloHost = $_SERVER['SERVER_NAME'] ?? 'localhost';
    smtp_write($socket, 'EHLO ' . $ehloHost);
    smtp_expect($socket, 250, 'EHLO');

    if ($config['secure'] === 'tls') {
        smtp_write($socket, 'STARTTLS');
        smtp_expect($socket, 220, 'STARTTLS');
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new RuntimeException('TLS negotiation failed');
        }
        smtp_write($socket, 'EHLO ' . $ehloHost);
        smtp_expect($socket, 250, 'EHLO (post-TLS)');
    }

    smtp_write($socket, 'AUTH LOGIN');
    smtp_expect($socket, 334, 'AUTH');
    smtp_write($socket, base64_encode($config['username']));
    smtp_expect($socket, 334, 'Username');
    smtp_write($socket, base64_encode($config['password']));
    smtp_expect($socket, 235, 'Authentication');

    smtp_write($socket, 'MAIL FROM:<' . $config['from_email'] . '>');
    smtp_expect($socket, 250, 'MAIL FROM');

    $recipients = (array) $config['to'];
    foreach ($recipients as $rcpt) {
        smtp_write($socket, 'RCPT TO:<' . $rcpt . '>');
        smtp_expect($socket, 250, 'RCPT TO');
    }

    smtp_write($socket, 'DATA');
    smtp_expect($socket, 354, 'DATA');

    $boundary = 'zn-' . bin2hex(random_bytes(12));
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $encodedReplyName = '=?UTF-8?B?' . base64_encode($replyName) . '?=';

    $headers = [
        'Date: ' . date('r'),
        'From: =?UTF-8?B?' . base64_encode($config['from_name']) . '?= <' . $config['from_email'] . '>',
        'To: ' . implode(', ', $recipients),
        'Reply-To: ' . $encodedReplyName . ' <' . $replyTo . '>',
        'Subject: ' . $encodedSubject,
        'Message-ID: <' . bin2hex(random_bytes(10)) . '@' . $config['host'] . '>',
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer: Zanzione Website',
    ];

    $message = implode("\r\n", $headers) . "\r\n\r\n"
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($plain)) . "\r\n"
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html)) . "\r\n"
        . '--' . $boundary . "--\r\n";

    // Dot-stuffing: a line that is just "." would otherwise end the DATA block.
    $message = preg_replace('/^\./m', '..', $message) ?? $message;

    fwrite($socket, $message . "\r\n.\r\n");
    smtp_expect($socket, 250, 'Message send');

    smtp_write($socket, 'QUIT');
    fclose($socket);
}
