# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Crafted Designs (`artifacts/crafted-designs`)
- **Type**: React + Vite, frontend-only (no backend)
- **Preview path**: `/` (root)
- **Purpose**: Single-page marketing website for "Crafted Designs" — a boutique web design business targeting local Australian trades and service businesses
- **Design**: Warm Ember dark theme (#100D09 bg, #1A1510 panels, #3a2e1e borders, #F0EBE3 text, #BDA98A muted, #FF8C00 amber accent), Cormorant Garamond headings + Nunito Sans body, framer-motion animations
- **Sections**: Hero, Services, Built For, Process, Portfolio, Testimonial, Pricing, Contact, Footer
- **Status**: Contact form is UI-only (no email delivery yet)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
