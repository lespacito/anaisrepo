"use client";
import { BaseComponentProps } from "@/app/types/onboarding/onboarding-steps-list";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { OnboardingFooter } from "../footer/onboarding-footer";
export const ProfileStep = ({
  prevStep,
  nextStep,
  isFirstStep,
  isFinalStep,
}: BaseComponentProps) => {
  return (
    <>
      <Typography
        variant="lead"
        component="h1"
        weight="medium"
        className="flex items-center justify-center"
      >
        Profile setup !
      </Typography>
      <OnboardingFooter
        prevStep={prevStep}
        nextStep={nextStep}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </>
  );
};
