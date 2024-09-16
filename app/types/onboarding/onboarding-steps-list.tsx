export interface BaseComponentProps {
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: () => boolean;
  isFinalStep: () => boolean;
  stepsList: onboardingStepListInterface[];
  getCurrentStep: () => onboardingStepListInterface | undefined;
}

// Interface onboardingStepListInterface
export interface onboardingStepListInterface {
  id: number;
  label: string;
  component: { step: React.ComponentType<BaseComponentProps> };
}
