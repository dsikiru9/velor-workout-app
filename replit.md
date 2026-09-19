# VELOR Workout

VELOR is a personal progressive workout app for practical at-home training with bodyweight, floor space, a stable chair, and safe household supports.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/velor-workout/src/data/exercises.ts` — centralized exercise bank and generated 88-level workout program
- `artifacts/velor-workout/src/hooks/use-progress.ts` — local progress persistence and workout history
- `artifacts/velor-workout/src/pages/` — home, section, workout, and completion screens
- `artifacts/velor-workout/public/media/` — local exercise demonstration assets
- `artifacts/velor-workout/src/index.css` — VELOR visual tokens and responsive styling

## Architecture decisions

- The first release is frontend-only and uses localStorage so the core workout experience works without accounts or network access.
- Workout content references a centralized exercise bank; levels derive their volume and exercise selection from section-specific progression pools.
- Exercise media is stored locally so a third-party host failure cannot break the workout screen.
- Workout progression is stateful at the set level, with a shared rest timer and explicit completion summary.

## Product

- Four primary workout sections: Arms, Back & Shoulders, Legs, and Abdomen.
- Twenty-two populated levels per section, grouped into Beginner, Intermediate, and Advanced.
- Detailed exercise instructions, form cues, common mistakes, regressions, progressions, equipment notes, and safety guidance.
- Mobile-first workout flow with rest controls, set tracking, completion history, and next-level navigation.

## User preferences

- The product must be presented as a normal workout application, not a calisthenics app.
- The visual direction is clean white and red with serious, athletic usability.
- Household supports must always include stability and safety cues.

## Gotchas

- Keep all exercise content in the centralized data files rather than duplicating it in pages.
- New media should be local or a tested, permitted source; external image hosts can be blocked by the preview environment.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
