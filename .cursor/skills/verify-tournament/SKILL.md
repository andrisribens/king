---
name: verify-tournament
description: Checklist for validating King of the Beach schedule and scoring changes. Use when editing tournament matrices, round filters, wins/net points, winners sorting, GameCard scores, or localStorage sticky state in App.jsx or GameCard.jsx.
---

# Verify tournament changes

Copy this checklist and track progress when schedule or scoring code changes:

```
Verify tournament:
- [ ] Identify player-count matrices touched (4 / 5 / 6 / 7 / 8)
- [ ] Sample path: players → games → scores → winners
- [ ] Sticky keys still read/write
- [ ] Multi-round add/hide (4–5 players) if relevant
- [ ] No accidental dead code / unused matrices left behind
```

## 1. Scope the matrices

In `src/schedules.js`, confirm which player-count templates changed. Untouched player counts should behave identically.

## 2. Walk a sample path

Mentally (or via `pnpm start`) verify:

1. Choose a player count and enter names
2. Schedule games match expected partners/opponents
3. Enter and edit scores (add + delete/edit after submit)
4. Winners table: wins first, then net points

## 3. Sticky state

Confirm renamed or new keys were intentional. Existing keys in App and per-game GameCard keys (`inputScore{N}`, etc.) must still hydrate after refresh. Restart still clears via `localStorage.clear()`.

## 4. Multi-round (4–5 players)

If round UI changed, smoke-check `addSecondRound` / `addThirdRound` / `addFourthRound` show the correct filtered games and persist across reload.

## 5. Cleanup note

Call out leftover unused schedule data, duplicate helpers, or references to `WinnersTableRowOld.jsx` if introduced by the change.
