# AGENTS-SUMMARY

Current clean-context handoff for project.

## Repository

https://github.com/wildcar/tg-ui-sandbox

## Product

`tg-ui-sandbox` — локальная песочница для предпросмотра Telegram-сообщений через Bot API. Express-бэкенд проксирует запросы к Telegram, фронтенд — минимальная HTML-страница с редактором текста и выбором parse_mode.

## Current Behavior

- `POST /send-preview` принимает `text`, `parseMode`, `disableWebPagePreview` и отправляет в Telegram.
- Статический фронтенд на `public/index.html`.
- Токен бота и chat_id в `.env`, не попадают в браузер.

## Documentation

- `AGENTS.md` is the primary agent entrypoint.
- `CLAUDE.md` is a compatibility entrypoint that redirects agents to the same workflow.
- `AGENTS-TECHSPEC.md` is the functional specification.
- `AGENTS-HISTORY.md` records concise agent work history.
- `AGENTS-TODO.md` records deferred work only.

## Recent Important Commits

- `ee48a14` — Initial commit: Express server + frontend + docs.

## Post-Compact Resume

Use this section as the first recovery point after context compaction.
- Primary instructions: start from `AGENTS.md`, then read `AGENTS-TECHSPEC.md`, this file, the latest `AGENTS-HISTORY.md` entry.
- Functional source of truth: `AGENTS-TECHSPEC.md`;
- Commit identity: `wildcar <wildcar@wildcar.ru>`.
