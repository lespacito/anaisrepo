import { Button } from "@/app/ui/design-system/button/Button";
import clsx from "clsx";

interface Props {
  nextStep?: () => void;
  prevStep?: () => void;
  isFirstStep?: () => boolean;
  isFinalStep?: () => boolean;
  isLoading?: boolean;
}
export const OnboardingFooter = ({
  nextStep,
  prevStep,
  isFirstStep,
  isFinalStep,
  isLoading,
}: Props) => {
  let actionButtonTitle: string;

  if (isFirstStep && isFirstStep()) {
    actionButtonTitle = "Commencer";
  } else if (isFinalStep && isFinalStep()) {
    actionButtonTitle = "Terminer";
  } else {
    actionButtonTitle = "Continuer";
  }
  return (
    <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray">
      <div
        className={clsx(
          prevStep && !nextStep && "justify-start",
          !prevStep && nextStep && "justify-end",
          prevStep && nextStep && "justify-between",
          "flex items-center justify-end gap-5"
        )}
      >
        {prevStep && (
          <Button
            action={prevStep}
            variant={!isLoading ? "outline" : "disabled"}
            disabled={isLoading}
          >
            Précédent
          </Button>
        )}

        <Button action={nextStep} isLoading={isLoading}>
          {actionButtonTitle}
        </Button>
      </div>
    </div>
  );
};
