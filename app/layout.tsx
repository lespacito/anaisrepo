import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import type { Metadata } from "next";
import { AuthUserProvider } from "@/app/context/authUserContext";

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
          <AuthUserProvider>
            <ToastContainer
              position="top-center"
              autoClose={8000}
              transition={Flip}
            />
            {children}
          </AuthUserProvider>
        </main>
      </body>
    </html>
  );
}
