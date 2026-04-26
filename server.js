require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const PORT = process.env.PORT || 3000;

if (!BOT_TOKEN || !CHAT_ID) {
  console.error("Missing BOT_TOKEN or CHAT_ID in .env");
  process.exit(1);
}

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/send-preview", async (req, res) => {
  try {
    const { text, parseMode, disableWebPagePreview } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Text is empty" });
    }

    const payload = {
      chat_id: CHAT_ID,
      text,
      disable_web_page_preview: Boolean(disableWebPagePreview),
    };

    if (parseMode && parseMode !== "none") {
      payload.parse_mode = parseMode;
    }

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      return res.status(400).json({
        error: data.description || "Telegram API error",
        telegramResponse: data,
      });
    }

    res.json({ ok: true, messageId: data.result.message_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Telegram preview running at http://localhost:${PORT}`);
});
