<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Setup

There is no `.env.example`. Create `.env` manually with these vars (Prisma CLI loads it via `prisma.config.ts`):

```
DATABASE_URL=mysql://...   # used directly by the MariaDB driver adapter
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3000
```

```bash
npm install
npx prisma generate   # required before dev; client outputs to generated/prisma
npm run dev
```

## Key commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Production build |
| `npm run lint` | ESLint (flat config, eslint-config-next) |
| `npx prisma generate` | Regenerate Prisma client |
| `npx prisma db push` | Push schema to database |
| `npx prisma migrate dev` | Create and run migrations |

There is **no test script** — no test framework is configured.

## Architecture

**Next.js 16 App Router** with React 19, TypeScript, Tailwind CSS 4.

### Route groups

- `(front)` — public pages: home, product, course, cart, about, contact
- `(auth)` — login, signup
- `api/auth/[...all]` — better-auth catch-all API route

### Prisma 7 + MariaDB

Prisma client is generated to `generated/prisma/` (not `node_modules/.prisma`). The app uses `@prisma/adapter-mariadb` driver adapter — import from `../../generated/prisma/client`, not `@prisma/client`. See `src/lib/prisma.ts` for the singleton pattern.

### Auth

Uses `better-auth` with Prisma adapter. Server: `src/lib/auth.ts`. Client: `src/lib/auth-client.ts`. Auth API route: `src/app/api/auth/[...all]/route.ts`.

### UI

shadcn (radix-rhea style) components live in `src/components/ui/`. Add new components with `npx shadcn add <component>`. Path alias `@/*` resolves to `./src/*`.

### State

Zustand store for cart: `src/lib/cart-store.ts` (persisted to localStorage as `skill-cart`).

## Gotchas

- **Cache Components**: `cacheComponents: true` is enabled in `next.config.ts`. Several routes opt out with `export const instant = false` and have TODO comments to migrate. See `node_modules/next/dist/docs/01-app/02-guides/migrating-to-cache-components.md`.
- **Prisma generated client**: Always import from `../../generated/prisma/client` or `@/lib/prisma` — never from `@prisma/client`.
- **Decimal fields**: Prisma `Decimal` columns must be converted to `Number()` before passing to Client Components (e.g., product price).
- **`connection()` signal**: Routes using `await connection()` from `next/server` are explicitly marked dynamic — needed because `cacheComponents: true` makes routes static by default.
- **Thai locale**: App uses `lang="th"` with Thai fonts (Prompt, Roboto, Lora). UI text is in Thai.
- **Docker**: Standalone output, copies `generated/` and `prisma/` into runner image. Node 24 Alpine.
- **`.env` is NOT gitignored**: the `.gitignore` `env` pattern is commented out (`#.env`), so `.env` shows as untracked. Do not commit it; re-add `/.env` to `.gitignore` when committing your work.
