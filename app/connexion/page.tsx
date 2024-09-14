import { Layout } from "../ui/components/layout/Layout";
import { LoginContainer } from "../ui/modules/authentification/login/login.container";
import { GUEST } from "../lib/session-status";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion sur CadeauAnais",
  description: "Page de connexion",
};

export default function Connexion() {
  return (
    <>
      <Layout sessionStatus={GUEST}>
        <LoginContainer />
      </Layout>
    </>
  );
}
