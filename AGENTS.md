# Agent Instructions

Use this file as the primary entrypoint for agent work in this repository.

## Project

`tg_sandbox` is a tool to test telegram UI


## Document Map

- `AGENTS-TECHSPEC.md` is the functional specification and current source of truth for product behavior.
- `AGENTS-SPECIFICS-1.md` now empty.
- `AGENTS-SUMMARY.md` is the current clean-context handoff snapshot.
- `AGENTS-HISTORY.md` is the chronological work log for agent changes.
- `AGENTS-TODO.md` is the deferred backlog only; do not add active work there.
- `CLAUDE.md` is a compatibility entrypoint for Claude-style agents and should stay aligned with this file.

## Startup Checklist

1. Read `AGENTS.md`.
2. Read `AGENTS-TECHSPEC.md`.
3. Read `AGENTS-SUMMARY.md` and the latest entries in `AGENTS-HISTORY.md` if present.
4. Read the relevant `AGENTS-SPECIFICS-*.md` note for the area being changed.
5. Check `git status --short` before editing and do not overwrite unrelated user changes.

## Change Workflow

- Before code or behavior changes, update `AGENTS-TECHSPEC.md` if the task changes the functional contract.
- Before non-trivial code or documentation changes, add a short entry to `AGENTS-HISTORY.md`.
- If you ship a deferred item from `AGENTS-TODO.md`, move the relevant context into `AGENTS-HISTORY.md` and remove it from `AGENTS-TODO.md`.
- When learning persistent environment details, record them in the relevant agent document instead of relying on memory.
- Commit and push changes to GitHub after successful verification.

## Local Commands

- Commit identity: `wildcar <wildcar@wildcar.ru>`

## Language Rules

- Source code, technical docs, and code comments: English.
- Conversation with the user: Russian.
- End-user UI text: Russian with ability to extend to other language.
