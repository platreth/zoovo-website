import type { VercelRequest, VercelResponse } from "@vercel/node";

const BEEHIIV_API_URL = "https://api.beehiiv.com/v2";
const PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;
const API_KEY = process.env.BEEHIIV_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!PUBLICATION_ID || !API_KEY) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const response = await fetch(
      `${BEEHIIV_API_URL}/publications/${PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email,
          send_welcome_email: true,
        }),
      }
    );

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return res.status(response.status).json({
        error: data.message || "Subscription failed",
      });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Failed to subscribe" });
  }
}
