# Technical and functional specification

## Project

`tg-ui-sandbox` — локальная песочница для предпросмотра Telegram-сообщений через Bot API.

## Architecture

```
Browser (public/index.html)  →  POST /send-preview  →  Express (server.js)  →  Telegram Bot API
```

- Frontend: статический HTML/JS, отправляет текст и параметры форматирования на backend.
- Backend: Node.js + Express, проксирует запросы к `api.telegram.org/bot<Token>/sendMessage`.
- Токен бота и chat_id хранятся в `.env`, не покидают сервер.

## API Endpoints

### POST /send-preview

Отправляет сообщение в Telegram через бота.

**Request body:**
```json
{
  "text": "string (required)",
  "parseMode": "HTML | MarkdownV2 | none",
  "disableWebPagePreview": "boolean"
}
```

**Response 200:**
```json
{
  "ok": true,
  "messageId": 123
}
```

**Response 400/500:**
```json
{
  "error": "description"
}
```

## Environment Variables

| Variable    | Description              | Default |
|-------------|--------------------------|---------|
| `BOT_TOKEN` | Telegram bot token       | —       |
| `CHAT_ID`   | Target chat ID           | —       |
| `PORT`      | HTTP server port         | `3000`  |

## Startup

```bash
cp .env.example .env   # fill BOT_TOKEN and CHAT_ID
npm install
npm start
```

Open http://localhost:3000.

## Supported parse modes

- **HTML** — `<b>`, `<i>`, `<a href="...">`, `<code>`, `<pre>`, `<u>`, `<s>`, `<tg-spoiler>`
- **MarkdownV2** — `*bold*`, `_italic_`, `[text](url)`, `` `code` ``, ```` ```code``` ````
- **none** — plain text

## Repository

https://github.com/wildcar/tg-ui-sandbox
