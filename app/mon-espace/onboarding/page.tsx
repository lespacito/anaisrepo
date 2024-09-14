import { Layout } from "../../ui/components/layout/Layout";
import type { Metadata } from "next";
import { REGISTERED } from "@/app/lib/session-status";
import { Session } from "../../ui/components/session/session";
import { OnBoardingContainer } from "../../ui/modules/onboarding/onboarding.container";

export const metadata: Metadata = {
  title: "OnBoarding",
  description:
    "Bienvenue sur le OnBoarding, cette page vous demande vos données utilisateurs ;)",
};

export default function Onboarding() {
  return (
    <>
        <Session sessionStatus={REGISTERED}>
          <OnBoardingContainer/>
        </Session>
    </>
  );
}
