import type { Metadata } from "next";
import { Layout } from "../../ui/components/layout/Layout";
import { RegisterContainer } from "@/app/ui/modules/authentification/register/register.container";
import { GUEST } from "@/app/lib/session-status";

export const metadata: Metadata = {
  title: "Inscription sur CadeauAnais",
  description: "Page d'inscription",
};

export default function Register() {
  return (
    <>
      <Layout sessionStatus={GUEST}>
        <RegisterContainer />
      </Layout>
    </>
  );
}
