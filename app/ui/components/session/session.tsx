"use client";
import { useAuth } from "@/app/context/AuthUserContext";
import { ScreenSpinner } from "../../design-system/spinner/screen-spinner";
import { useRouter, usePathname } from "next/navigation";
import { SessionStatusTyype } from "@/app/types/SessionStatusTypes";
import { REGISTERED, GUEST } from "@/app/lib/session-status";

interface Props {
  children: React.ReactNode;
  sessionStatus?: SessionStatusTyype;
}

export const Session = ({ children, sessionStatus }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { authUserIsLoading, authUser } = useAuth();

  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

  const shouldRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      !onboardingIsCompleted &&
      pathname !== "/mon-espace/onboarding"
    );
  };

  const shouldNotRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      onboardingIsCompleted &&
      pathname === "/mon-espace/onboarding"
    );
  };

  if (shouldRedirectToOnboarding()) {
    router.push("/mon-espace/onboarding");
    return <ScreenSpinner />;
  }

  if (shouldNotRedirectToOnboarding()) {
    router.push("/mon-espace");
    return <ScreenSpinner />;
  }

  if (sessionStatus === GUEST && !authUserIsLoading) {
    if (!authUser) {
      return <>{children}</>;
    } else {
      router.push("/mon-espace");
    }
  }

  if (sessionStatus === REGISTERED && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>;
    } else {
      router.push("/connexion");
    }
  }

  if (!authUserIsLoading && !sessionStatus) {
    return <>{children}</>;
  }
  return <ScreenSpinner />;
};
