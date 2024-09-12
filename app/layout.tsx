import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <body className="min-h-screen">
        <main>
          <ToastContainer
            position="top-center"
            autoClose={8000}
            transition={Flip}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
