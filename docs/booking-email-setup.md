# Booking form → email delivery

## Why it's PHP and not an API route

`next.config.mjs` sets `output: 'export'`, so the site builds to plain HTML/CSS/JS
in `out/` and is served by Apache on the cPanel host. There is no Node runtime,
which means **no API routes and no server actions** — a Next.js mail handler
cannot run here.

The host does run PHP (cPanel, `/webmail`, `.htaccess` rewrites), so form
submissions are delivered by a small PHP script that sits next to the exported
HTML.

## The pieces

| File | Role | In git? |
|---|---|---|
| `public/api/send-booking.php` | The endpoint. Validates input and speaks SMTP directly — no Composer, no PHPMailer. | ✅ yes |
| `public/api/mail-config.example.php` | Documented template for the credentials. | ✅ yes |
| `public/api/mail-config.php` | **Real credentials.** | ❌ **git-ignored** |
| `public/api/.htaccess` | Denies HTTP access to the config file and disables directory listing. | ✅ yes |
| `lib/send-enquiry.ts` | Front-end helper that POSTs to the endpoint. | ✅ yes |

Everything under `public/` is copied into `out/` at build time, so
`out/api/send-booking.php` ends up alongside `index.html` and is reachable at
`https://www.zanzionetours.com/api/send-booking.php`.

## Credentials

`mail-config.php` is git-ignored on purpose — the repository is public, and a
mailbox password in git history is effectively a public password.

The file already exists locally with the live values and is included in every
`out/` build, so a normal "upload `out/`" deploy carries it across. If you ever
deploy from a fresh clone, recreate it first:

```bash
cp public/api/mail-config.example.php public/api/mail-config.php
# then edit the 'password' value
```

## Which forms send email

| Form | Email | WhatsApp |
|---|---|---|
| Tour booking modal (every "Book Now") | ✅ | ✅ |
| Homepage taxi booking form | ✅ | ✅ |
| Footer newsletter | — | ✅ |

WhatsApp stays the primary channel and opens either way. Email is an extra copy
for the inbox, so a mail failure reports itself but never costs a booking.

Mail lands at both `info@zanzionetours.com` and
`zanzionetoursandtravel@gmail.com` (edit the `to` array to change that), with
`Reply-To` set to the traveller — hitting reply answers the customer directly.

## Spam protection

- A hidden honeypot field (`company`). Bots fill it in; the script then returns
  success without sending anything.
- A 20-second per-IP throttle backed by a temp file.
- Server-side validation of name and email; all values are stripped of control
  characters so they cannot inject mail headers.

## Testing after deploy

```bash
curl -i -X POST https://www.zanzionetours.com/api/send-booking.php \
  -H 'Content-Type: application/json' \
  -d '{"formType":"Test","fullName":"Test User","email":"you@example.com","phone":"+255700000000","note":"hello"}'
```

Expect `HTTP/1.1 200` and `{"ok":true}`.

| Response | Cause |
|---|---|
| `{"ok":false,"error":"Mail is not configured on this server."}` | `mail-config.php` was not uploaded. |
| `HTTP 502` | SMTP refused the connection or the login. Check `port`/`secure` (465 + `ssl`, or 587 + `tls`) and the password. Details are in the server's PHP error log, never in the response. |
| PHP source in the response body | PHP is not enabled for that directory — ask the host to enable it. |

Locally (`pnpm dev`) there is no PHP, so the fetch fails and the form falls back
to the WhatsApp-only path. That's expected.
