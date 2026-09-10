const ALLOWED_LINK_HOSTS = new Set([
  "mertsurucu.com",
  "www.mertsurucu.com",
  "github.com",
  "www.github.com",
  "linkedin.com",
  "www.linkedin.com",
  "ukd.tsf.org.tr"
]);

const EMAIL_PATTERN = /^[\w.+-]+@[\w.-]+\.[a-z]{2,}$/iu;

export function safeHref(value) {
  const text = String(value ?? "").trim();
  if (!text) return null;

  try {
    if (EMAIL_PATTERN.test(text)) return new URL(`mailto:${text}`).href;

    const candidate = /^https:/iu.test(text) ? text : `https://${text}`;
    const url = new URL(candidate);
    const hostname = url.hostname.toLocaleLowerCase("en-US");

    if (
      url.protocol !== "https:"
      || !ALLOWED_LINK_HOSTS.has(hostname)
      || url.username
      || url.password
      || url.port
    ) {
      return null;
    }

    return url.href;
  } catch {
    return null;
  }
}
