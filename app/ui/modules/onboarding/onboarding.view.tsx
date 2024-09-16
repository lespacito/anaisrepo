"use client"
import { BaseComponentProps } from "@/app/types/onboarding/onboarding-steps-list";

export const OnBoardingView = ({
  nextStep,
  prevStep,
  isFirstStep,
  isFinalStep,
  getCurrentStep,
  stepsList,
}: BaseComponentProps) => {
  if (getCurrentStep()?.component) {
    const Component = getCurrentStep()?.component.step;
    return (
      <div className="">
        {Component && (
          <Component
            nextStep={nextStep}
            prevStep={prevStep}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
            getCurrentStep={getCurrentStep}
            stepsList={stepsList}
          />
        )}
      </div>
    );
  }
  return null;
};
