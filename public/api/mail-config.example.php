<?php
/**
 * Mail configuration template.
 *
 * Copy this file to `mail-config.php` ON THE SERVER and fill in the real
 * password. `mail-config.php` is git-ignored on purpose — the credentials must
 * never reach the repository or the browser bundle.
 *
 *   cp mail-config.example.php mail-config.php
 *   # then edit mail-config.php and set 'password'
 *
 * Returning an array from a .php file means the contents are never served as
 * text: PHP executes the file and emits nothing.
 */

return [
    // cPanel SMTP. Port 465 = implicit SSL, port 587 = STARTTLS.
    'host'     => 'mail.zanzionetours.com',
    'port'     => 465,
    'secure'   => 'ssl', // 'ssl' | 'tls'

    'username' => 'info@zanzionetours.com',
    'password' => 'PUT-THE-MAILBOX-PASSWORD-HERE',

    // Envelope sender. Must be a real mailbox on this domain or the host will
    // reject the message as spoofed.
    'from_email' => 'info@zanzionetours.com',
    'from_name'  => 'Zanzione Tours Website',

    // Where enquiries land. Add more addresses to copy the sales team in.
    'to' => [
        'info@zanzionetours.com',
        // 'zanzionetoursandtravel@gmail.com',
    ],

    // Origins allowed to POST to the endpoint.
    'allowed_origins' => [
        'https://www.zanzionetours.com',
        'https://zanzionetours.com',
    ],
];
