# Valefun

Valefun is being rewritten as a web-native 2D pixel village-life game.

Players will connect a wallet, choose a character, receive a starter house inside an owner-managed valley, then farm, fish, mine, craft, trade, upgrade their home, and interact with other online players.

## Repository Layout

- `apps/web` — new Next.js + Phaser web game app.
- `packages/shared` — shared game types/constants later.
- `legacy-godot` — preserved Godot prototype for reference.
- `legacy-screenshots` — old screenshots for reference.
- `docs` — architecture and rewrite notes.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
```

## Core Direction

Core gameplay should remain fast and off-chain. Blockchain ownership is reserved for important assets such as master land, house deeds, rare cosmetics, event trophies, and marketplace items.
