"use client";
import { BaseComponentProps } from "@/app/types/onboarding/onboarding-steps-list";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { Container } from "@/app/ui/components/container/Container";
import Image from "next/image";
import OnboardingTabs from "../../tabs/onboarding-tabs";

export const WelcomeStep = ({
  nextStep,
  isFirstStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  return (
    <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h2" component="h1">
                Bienvenue dans notre univers !
              </Typography>
              <Typography variant="body-base" component="p" theme="secondary">
                Nous sommes ravis de t'accueillir parmi nous. Ici, tu pourras
                plonger dans un espace où la créativité et le partage sont au
                cœur de l'expérience. Explore notre galerie d'images pour
                découvrir et partager des passions en images, crée tes propres
                articles pour exprimer tes idées et inspirations, et interagis
                avec une communauté vibrante via notre blog. Si tu as des
                questions ou des besoins spécifiques, notre page de contact est
                toujours là pour toi.
              </Typography>
              <Typography variant="body-sm" component="p" theme="secondary">
                Prends ton temps, explore, et surtout, amuse-toi à partager ce
                qui te passionne !
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
          <div className="flex justify-end w-full">
              <Image
                src={"/assets/img/karting.png"}
                alt="accueil"
                width={811}
                height={596}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter nextStep={nextStep} isFirstStep={isFirstStep} />
    </div>
  );
};
