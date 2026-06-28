---
name: Verifying below-the-fold sections in a client-rendered SPA
description: Why the app_preview screenshot tool can't see lower sections of an SPA, and what to use instead.
---

The `screenshot` (app_preview) tool always captures from scroll position 0 and cannot scroll. Navigating to a hash like `/#process` does NOT help in a client-rendered SPA: the browser's initial hash jump fires before React mounts the target element, so the element isn't in the DOM yet and no scroll happens — the screenshot stays at the top.

**How to apply:** To visually verify sections below the first viewport (process timelines, footer, contact forms, light/about sections), use the Playwright testing subagent (`runTest` from the `testing` skill). It runs real JS, can `scrollIntoView`/`window.scrollTo`, assert `naturalWidth > 0` for images, and check `document.documentElement.scrollWidth <= window.innerWidth` for horizontal-overflow audits across breakpoints. A very tall viewport (max 3000px) only helps for content within the first ~3000px from the top.
