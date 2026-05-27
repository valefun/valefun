import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valefun",
  description: "A 2D pixel village life web game with wallet-connected ownership.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
