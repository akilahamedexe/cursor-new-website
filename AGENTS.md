## Cursor Cloud specific instructions

This repository contains a static one-page website for **SWYM Agency**.

### Dependencies

No package manager dependencies are required for local development.

### Dev server startup

- Run: `python3 -m http.server 4173`
- Open: `http://127.0.0.1:4173`

### Checks

- JavaScript syntax check: `node --check script.js`
- HTML smoke check from server output:
  - `curl -s http://127.0.0.1:4173 | rg -n "SWYM|Start a project|Our process"`

### Environment variables / secrets

No environment variables or secrets are required.
