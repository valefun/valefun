"use client";

import { useEffect, useRef } from "react";
import type Phaser from "phaser";

export function GameCanvas() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function bootGame() {
      if (!hostRef.current || gameRef.current) return;
      const { createValefunGame } = await import("@/game/createValefunGame");
      if (cancelled || !hostRef.current) return;
      gameRef.current = createValefunGame(hostRef.current);
    }

    void bootGame();

    return () => {
      cancelled = true;
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="valefun-game" ref={hostRef} />;
}
