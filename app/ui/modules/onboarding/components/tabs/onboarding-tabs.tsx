import { onboardingStepListInterface } from "@/app/types/onboarding/onboarding-steps-list";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { clsx } from "clsx";
interface Props {
  tabs: onboardingStepListInterface[];
  getCurrentStep: () => onboardingStepListInterface | undefined;
}
export default function OnboardingTabs({ tabs, getCurrentStep }: Props) {
  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-6">
        {tabs &&
          tabs.map(
            (tab) =>
              tab.id !== tabs.length && (
                <div
                  key={tab.id}
                  className={clsx(
                    getCurrentStep && getCurrentStep()?.id === tab.id
                      ? "border-primary"
                      : "border-gray",
                    "relative z-10 py-2.5 border-b-[2px]"
                  )}
                >
                  <Typography
                    variant="caption3"
                    weight="medium"
                    theme={
                      getCurrentStep && getCurrentStep()?.id === tab.id
                        ? "primary"
                        : "secondary"
                    }
                  >
                    {tab.label}
                  </Typography>
                </div>
              )
          )}
      </div>
    </div>
  );
}
