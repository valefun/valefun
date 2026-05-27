"use client";

import { usePlayerProfile, type CharacterGender } from "@/state/playerProfile";

const characterOptions: Array<{ id: CharacterGender; label: string; description: string; emoji: string }> = [
  { id: "male", label: "Male Farmer", description: "Balanced starter resident for farming, fishing, and mining.", emoji: "👨‍🌾" },
  { id: "female", label: "Female Farmer", description: "Balanced starter resident for farming, fishing, and mining.", emoji: "👩‍🌾" },
];

function shortAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function OnboardingPanel() {
  const { walletAddress, character, houseSlot, connectDemoWallet, disconnectWallet, chooseCharacter } = usePlayerProfile();

  return (
    <div className="onboarding">
      <div className="step-card">
        <div className="step-head">
          <span className="step-number">1</span>
          <div>
            <h2>Connect Wallet</h2>
            <p>Your wallet becomes your Valefun identity.</p>
          </div>
        </div>
        {walletAddress ? (
          <div className="wallet-pill">
            <span>{shortAddress(walletAddress)}</span>
            <button type="button" onClick={disconnectWallet}>Disconnect</button>
          </div>
        ) : (
          <button className="primary-button" type="button" onClick={connectDemoWallet}>Connect Demo Wallet</button>
        )}
      </div>

      <div className={`step-card ${!walletAddress ? "disabled" : ""}`}>
        <div className="step-head">
          <span className="step-number">2</span>
          <div>
            <h2>Choose Character</h2>
            <p>Select your first resident. Real sprite sheets come next.</p>
          </div>
        </div>
        <div className="character-grid">
          {characterOptions.map((option) => (
            <button
              key={option.id}
              className={`character-card ${character === option.id ? "selected" : ""}`}
              type="button"
              disabled={!walletAddress}
              onClick={() => chooseCharacter(option.id)}
            >
              <span className="character-emoji">{option.emoji}</span>
              <strong>{option.label}</strong>
              <small>{option.description}</small>
            </button>
          ))}
        </div>
      </div>

      <div className={`step-card ${!character ? "disabled" : ""}`}>
        <div className="step-head">
          <span className="step-number">3</span>
          <div>
            <h2>Starter Home</h2>
            <p>Your first small house is assigned inside Jenn Valley.</p>
          </div>
        </div>
        <div className="house-slot">House Slot: <strong>{houseSlot ?? "Locked"}</strong></div>
      </div>
    </div>
  );
}
