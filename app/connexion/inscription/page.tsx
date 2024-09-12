import type { Metadata } from "next";
import { Layout } from "../../ui/components/layout/Layout";
import { RegisterContainer } from "@/app/ui/modules/authentification/register/register.container";

export const metadata: Metadata = {
  title: "Inscription sur CadeauAnais",
  description: "Page d'inscription",
};

export default function Register() {
  return (
    <>
      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
}
