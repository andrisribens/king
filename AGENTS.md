# AGENTS.md — King of the Beach

Beach volleyball tournament SPA (4–8 players): schedules, scores, winners, results download.

## Stack and commands

- **pnpm** + Node **22**
- `pnpm start` / `pnpm build` / `pnpm test`
- React 18 CRA, MUI v5, JSX (no TypeScript unless asked)

## Where things live

- UI flow: [`src/components/App.jsx`](src/components/App.jsx)
- Schedule matrices: [`src/schedules.js`](src/schedules.js)
- Wins/points derivation: [`src/scoring.js`](src/scoring.js)
- Sticky state hook: [`src/hooks/useStickyState.js`](src/hooks/useStickyState.js)
- Per-game scores: [`src/components/GameCard.jsx`](src/components/GameCard.jsx)
- Brand CSS: [`public/styles.css`](public/styles.css)

## Cursor guidance

- Always-on rules: [`.cursor/rules/`](.cursor/rules/)
- Schedule/scoring edits: use the **verify-tournament** skill ([`.cursor/skills/verify-tournament/SKILL.md`](.cursor/skills/verify-tournament/SKILL.md))

Preserve `localStorage` sticky key names and existing brand/UI patterns unless the user asks otherwise.
