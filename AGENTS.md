## Cursor Cloud specific instructions

This repository contains a Vite + React website inside the `swym/` directory.

## Dependency installation

- `cd swym && npm install`

## Dev server

- `cd swym && npm run dev -- --host 0.0.0.0 --port 5173`

## Lint / build

- `cd swym && npm run lint`
- `cd swym && npm run build`

## Environment variables / secrets

Optional:

- `VITE_WEB3FORMS_ACCESS_KEY` (enables Web3Forms submission on the Contact page; set via `swym/.env.local`).
