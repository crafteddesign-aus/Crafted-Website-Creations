---
name: Light hero mobile crop fix
description: Why flex heroes with tall content + fixed header must use alignItems flex-start, not center
---

## Rule
Flex hero sections that have `alignItems: "center"` AND tall content on mobile will push the top of the content ABOVE the fixed header.

**Why:** With `alignItems: center`, the flex container centers the content within the padded content box. If `content height > (section height - paddingTop - paddingBottom)`, the content overflows at the top — behind the fixed nav. PaddingTop alone does not prevent this; it's the center-alignment arithmetic that causes it.

**How to apply:** Always use `alignItems: "flex-start"` on hero sections with a fixed header. Use `paddingTop: clamp(6rem, 14vw, 11rem)` (min ≥ header height + breathing room) to clear the header. This applies whenever the section has `position: fixed` nav above it AND the section is `display: flex`.
