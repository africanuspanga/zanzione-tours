/**
 * Posts a form submission to the PHP mail endpoint that ships alongside the
 * static export (`public/api/send-booking.php`).
 *
 * The site has no Node runtime — it is `output: 'export'` served by Apache — so
 * email delivery happens in PHP on the host. WhatsApp remains the primary,
 * always-available channel; email is an additional copy for the inbox. A
 * failure here must therefore never block the user, only be reported.
 */

export type EnquiryPayload = Record<string, string> & {
  /** Shown as the email subject line and header, e.g. "Booking Request". */
  formType: string
  fullName: string
  email: string
}

export type EnquiryResult = { ok: true } | { ok: false; error: string }

const ENDPOINT = "/api/send-booking.php"

export async function sendEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Give up rather than hanging the submit button on a stalled host.
      signal: AbortSignal.timeout(15000),
    })

    // A static dev server (or a host without PHP) returns HTML here, not JSON.
    const contentType = res.headers.get("content-type") ?? ""
    if (!contentType.includes("application/json")) {
      return { ok: false, error: "Email delivery is not available on this host." }
    }

    const data = (await res.json()) as { ok?: boolean; error?: string }
    if (res.ok && data.ok) return { ok: true }
    return { ok: false, error: data.error ?? "The email could not be sent." }
  } catch {
    return { ok: false, error: "Could not reach the mail service." }
  }
}

/** Opens WhatsApp with a pre-filled message. */
export function openWhatsApp(message: string, phone = "255710885320") {
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener")
}
