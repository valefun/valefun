import { create } from "zustand";

export type CharacterGender = "male" | "female";

export type PlayerProfile = {
  walletAddress: string | null;
  character: CharacterGender | null;
  houseSlot: string | null;
};

type PlayerProfileState = PlayerProfile & {
  connectDemoWallet: () => void;
  disconnectWallet: () => void;
  chooseCharacter: (character: CharacterGender) => void;
};

function makeDemoAddress() {
  return `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`;
}

export const usePlayerProfile = create<PlayerProfileState>((set) => ({
  walletAddress: null,
  character: null,
  houseSlot: null,
  connectDemoWallet: () =>
    set({
      walletAddress: makeDemoAddress(),
      houseSlot: "A-01",
    }),
  disconnectWallet: () => set({ walletAddress: null, character: null, houseSlot: null }),
  chooseCharacter: (character) => set({ character }),
}));
