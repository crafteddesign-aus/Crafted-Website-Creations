---
name: Crafted Designs colour scheme
description: The approved section light/dark rhythm for the Crafted Designs site
---

## Approved section rhythm (top → bottom)
1. Nav — dark (#090909)
2. Hero — warm ivory #F3F0E9 (PREFERRED light approach, approved)
3. Marquee — dark #0D0D0D
4. Credibility strip — var(--light-bg) #F2EFE8, uses .cred-light class for dark borders
5. Editorial — dark (inherits body)
6. Services — warm stone #F3F0E9, cards use .card-light class
7. Work — dark (inherits body)
8. Process — dark panel var(--panel)
9. WHY/benefits — var(--light-bg)
10. About — var(--light-bg) (was always light)
11. CTA — orange var(--primary) card on dark section
12. Contact — dark panel var(--panel)
13. Footer — dark (#090909)

**Why:** Client brief requested 45% dark / 45% warm ivory / 10% orange accent rhythm. Light sections use --light-text and --light-muted tokens (not --text/--muted which are white on dark).

**How to apply:** Any new section must fit this rhythm. Light sections MUST override text colors to var(--light-text) / var(--light-muted). Cards in light sections need .card-light class. CSS utility classes .card-light and .cred-light already exist in index.css.
