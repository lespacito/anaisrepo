"use client";
import { BaseComponentProps } from "@/app/types/onboarding/onboarding-steps-list";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { Container } from "@/app/ui/components/container/Container";

export const WelcomeStep = ({
  nextStep,
  isFirstStep,
}: BaseComponentProps) => {
  return (
    <div className="relative h-screen">
      <Typography variant="h3" component="h1">
        Bienvenue dans notre univers !
      </Typography>
      <Typography variant="body-lg" className="mt-5" component="span">
        Nous sommes ravis de t'accueillir parmi nous. Ici, tu pourras plonger
        dans un espace où la créativité et le partage sont au cœur de
        l'expérience. Explore notre galerie d'images pour découvrir et partager
        des passions en images, crée tes propres articles pour exprimer tes
        idées et inspirations, et interagis avec une communauté vibrante via
        notre blog. Si tu as des questions ou des besoins spécifiques, notre
        page de contact est toujours là pour toi.
      </Typography>
      <Container className="space-x-2">
        <Typography variant="body-lg" component="p">
          Prends ton temps, explore, et surtout, amuse-toi à partager ce qui te
          passionne !
        </Typography>
      </Container>
      <OnboardingFooter
        nextStep={nextStep}
        isFirstStep={isFirstStep}
      />
    </div>
  );
};
