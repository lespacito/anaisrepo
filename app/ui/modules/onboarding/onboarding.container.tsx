"use client"
import { onboardingStepListInterface } from "@/app/types/onboarding/onboarding-steps-list";
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { OnBoardingView } from "./onboarding.view";
import { useState } from "react";
import { ProfileStep } from "./components/steps/profile-step/profile-step";

export const OnBoardingContainer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const stepsList: onboardingStepListInterface[] = [
    {
      id: 1,
      label: "Bienvenue",
      component: { step: WelcomeStep },
    },
    {
      id: 2,
      label: "Profile",
      component: { step: ProfileStep },
    },
  ];

  const getCurrentStep = () => {
    return stepsList.find((el) => el.id === currentStep);
  };

  console.log("currentStep", currentStep);

  const nextStep = () => {
    if (currentStep < stepsList.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFirstStep = () => {
    if (currentStep === 1) {
      return true;
    }
    return false;
  };

  const isFinalStep = () => {
    if (currentStep === stepsList.length) {
      return true;
    }
    return false;
  };

  return (
    <OnBoardingView
      getCurrentStep={getCurrentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      isFirstStep={isFirstStep}
      isFinalStep={isFinalStep}
      stepsList={stepsList}
    />
  );
};
