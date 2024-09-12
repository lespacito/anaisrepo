import type { Metadata } from "next";
import { Layout } from "../ui/components/layout/Layout";
import { LoginContainer } from "../ui/modules/authentification/login/login.container";

export const metadata: Metadata = {
  title: "Connexion sur CadeauAnais",
  description: "Page de connexion",
};

export default function Connexion() {
  return (
    <>
      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
}
