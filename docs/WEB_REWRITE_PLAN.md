# Valefun Web Rewrite Plan

## Decision

Rewrite Valefun as a web-native game app.

The old Godot prototype is preserved under `legacy-godot/` for reference. The new product should be implemented in `apps/web` with Next.js + Phaser.

## Target Architecture

- `apps/web`: Next.js shell + Phaser game canvas.
- `packages/shared`: shared game constants/types later.
- Backend later: Fastify/NestJS + Socket.IO + PostgreSQL/Prisma.
- Wallet later: RainbowKit/Wagmi/Viem.

## Implementation Order

1. Web game shell and Phaser scene.
2. Character select male/female.
3. Wallet login/sign-message.
4. Map zones: residential, farm, river, mine, forest, warehouse.
5. Inventory + item definitions.
6. Farming loop.
7. Fishing loop.
8. Mining loop.
9. Warehouse sell flow and Vale Coin.
10. Realtime multiplayer movement/chat.
11. Admin dashboard.
