# Haven

A full-stack platform for divorced and separating women.

## Monorepo Structure

```
haven/
├── apps/
│   ├── web/           # Next.js 14 frontend
│   ├── mobile/        # React Native / Expo (future)
│   ├── api/           # Fastify backend (future)
│   └── admin/         # Admin panel (future)
├── packages/
│   ├── ui/            # Shared component library
│   ├── design-tokens/ # Colors, spacing, typography
│   ├── shared-types/  # TypeScript types & Zod schemas
│   ├── utils/         # Shared utility functions
│   └── config/        # ESLint, Tailwind, TS configs
└── infrastructure/
    └── docker/        # Docker Compose setup
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Run web app
pnpm dev --filter=web

# Build all packages
pnpm build
```

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **UI Primitives:** Radix UI
- **State:** Zustand (client), TanStack Query (server)
- **Icons:** Phosphor Icons
- **Fonts:** Instrument Serif, Inter, JetBrains Mono

## License

Private — All rights reserved.
