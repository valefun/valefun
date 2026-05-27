import { GameCanvas } from "@/components/GameCanvas";
import { OnboardingPanel } from "@/components/OnboardingPanel";

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="brand">
          <div className="logo">VALEFUN</div>
          <div className="tagline">Live, farm, fish, mine, and build inside a player-owned valley.</div>
        </div>
        <a className="cta" href="#onboarding">Start</a>
      </header>

      <section className="shell">
        <aside className="sidebar">
          <h1>Valley Prototype</h1>
          <p>
            Web-native rewrite scaffold. This replaces the Godot runtime with a Phaser-powered browser game shell.
          </p>
          <div id="onboarding" className="card">
            <h2>Player Onboarding</h2>
            <OnboardingPanel />
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
