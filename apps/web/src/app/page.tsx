import { GameCanvas } from "@/components/GameCanvas";

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="brand">
          <div className="logo">VALEFUN</div>
          <div className="tagline">Live, farm, fish, mine, and build inside a player-owned valley.</div>
        </div>
        <button className="cta" type="button">Connect Wallet</button>
      </header>

      <section className="shell">
        <aside className="sidebar">
          <h1>Valley Prototype</h1>
          <p>
            Web-native rewrite scaffold. This replaces the Godot runtime with a Phaser-powered browser game shell.
          </p>
          <div className="card">
            <h2>MVP Systems</h2>
            <ul>
              <li>Wallet login</li>
              <li>Male/female character select</li>
              <li>Starter house slot</li>
              <li>Farming, fishing, mining</li>
              <li>Warehouse selling</li>
              <li>Realtime multiplayer</li>
            </ul>
          </div>
        </aside>
        <section className="game-wrap">
          <div className="game-frame">
            <GameCanvas />
          </div>
        </section>
      </section>
    </main>
  );
}
