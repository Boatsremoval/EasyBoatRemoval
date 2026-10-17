import type { QuoteRequest, ContactRequest } from "@shared/schema";

// Quote and contact requests are forwarded to a Telegram chat.
// Set these two environment variables (e.g. in Render → Environment):
//   TELEGRAM_BOT_TOKEN  – token from @BotFather
//   TELEGRAM_CHAT_ID    – chat (or group) id that should receive the requests
// Until they are set, requests are only written to the server log.

type Image = { filename: string; content: string };

const token = () => process.env.TELEGRAM_BOT_TOKEN;
const chatId = () => process.env.TELEGRAM_CHAT_ID;

async function tg(method: string, body: FormData | Record<string, unknown>) {
  const isForm = body instanceof FormData;
  const res = await fetch(`https://api.telegram.org/bot${token()}/${method}`, {
    method: "POST",
    headers: isForm ? undefined : { "Content-Type": "application/json" },
    body: isForm ? body : JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Telegram ${method} failed: ${res.status} ${await res.text().catch(() => "")}`);
  }
}

function toBlob(img: Image) {
  // content is base64, optionally with a data: prefix
  const b64 = img.content.includes(",") ? img.content.split(",")[1] : img.content;
  return new Blob([Buffer.from(b64, "base64")], { type: "image/jpeg" });
}

async function send(text: string, images: Image[] = []) {
  if (!token() || !chatId()) {
    console.log("[quote] Telegram is not set up yet. Request received:\n" + text + (images.length ? `\n(${images.length} photo(s) attached)` : ""));
    return;
  }
  await tg("sendMessage", { chat_id: chatId(), text, disable_web_page_preview: true });

  const photos = images.slice(0, 10);
  if (photos.length === 1) {
    const form = new FormData();
    form.append("chat_id", String(chatId()));
    form.append("photo", toBlob(photos[0]), photos[0].filename || "photo.jpg");
    await tg("sendPhoto", form);
  } else if (photos.length > 1) {
    const form = new FormData();
    form.append("chat_id", String(chatId()));
    form.append("media", JSON.stringify(photos.map((_, i) => ({ type: "photo", media: `attach://p${i}` }))));
    photos.forEach((p, i) => form.append(`p${i}`, toBlob(p), p.filename || `photo${i + 1}.jpg`));
    await tg("sendMediaGroup", form);
  }
}

const line = (label: string, value?: string) => (value ? `${label}: ${value}\n` : "");

export async function sendQuoteToTelegram(q: QuoteRequest) {
  const text =
    "New boat removal quote request\n\n" +
    line("Name", `${q.firstName} ${q.lastName}`.trim()) +
    line("Phone", q.phone) +
    line("Boat size", q.boatSize) +
    line("Engine type", q.engineType) +
    line("Address", [q.addressLine1, q.addressLine2].filter(Boolean).join(", ")) +
    line("City", q.city) +
    line("State", q.state) +
    line("ZIP", q.zipCode) +
    (q.images?.length ? `Photos: ${q.images.length}\n` : "");
  await send(text, q.images);
}

export async function sendContactToTelegram(c: ContactRequest) {
  const text =
    "New message from the website\n\n" +
    line("Name", c.name) +
    line("Phone", c.phone) +
    line("Message", c.message) +
    (c.images?.length ? `Photos: ${c.images.length}\n` : "");
  await send(text, c.images);
}
