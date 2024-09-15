import { OnBoardingView } from "./onboarding.view";
import { useState } from "react";

export const OnBoardingContainer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const stepsList = [
    {
      id: 1,
      label: "Bienvenue",
      component: { step: <div>Step Welcome</div> },
    },
    {
      id: 2,
      label: "Profile",
      component: { step: <div>Step profile</div> },
    },
  ];

  const getCurrentStep = () => {
    return stepsList.find((el) => el.id === currentStep);
  };

  console.log("getCurrentStep", getCurrentStep());

  return <OnBoardingView />;
};
