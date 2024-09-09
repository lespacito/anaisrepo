import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadeau Anais",
  description: "Codé par Lespacito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
