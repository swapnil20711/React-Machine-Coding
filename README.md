# React Machine Coding

Practice repo for React machine-coding round questions, built with Next.js (App Router). Each problem is a self-contained client app under `src/problems/<slug>/` with its own route.

| Problem | Route | Source |
| --- | --- | --- |
| Autocomplete Search Bar | `/autocomplete` | `src/problems/autocomplete` |
| Pagination | `/pagination` | `src/problems/pagination` |
| Tab Form | `/tab-form` | `src/problems/tab-form` |

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Adding a problem

1. Create `src/problems/<slug>/App.js` with `"use client";` at the top and a default-exported component.
2. Add `app/<slug>/page.js` that renders it (copy an existing one).
3. Register it in `src/problems/index.js` so it shows up on the home page.
