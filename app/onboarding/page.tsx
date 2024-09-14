import { Layout } from "../ui/components/layout/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OnBoarding",
  description:
    "Bienvenue sur le OnBoarding, cette page vous demande vos données utilisateurs ;)",
};

export default function Onboarding() {
  return (
    <>
      <Layout>
        <div className="flex items-center pt-20 py-20">
          Bienvenue sur le OnBoarding
        </div>
      </Layout>
    </>
  );
}
