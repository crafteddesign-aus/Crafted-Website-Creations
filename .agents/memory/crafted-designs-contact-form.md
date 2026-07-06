---
name: Crafted Designs contact form
description: Contact form submission backend for the Crafted Designs site
---

## Decision
The contact form submits via client-side `fetch()` with `FormData` directly to a Formspree endpoint (chosen by user over building a custom backend). No server-side code involved — Formspree receives and forwards to the site owner's email.

**Why:** User chose the fastest path (no backend needed) when asked. Formspree endpoints are safe to reference directly in frontend code (they're meant to be called client-side).

**How to apply:** If the form needs to change (new fields, validation, different destination), edit the `onSubmit` handler in the contact section of App.tsx directly — no server involved. If the user later wants submissions logged/stored in their own DB, that would require building a real backend endpoint (offered as the alternative but not chosen).
