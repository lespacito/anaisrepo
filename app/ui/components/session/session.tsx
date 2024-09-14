"use client";
import { useAuth } from "@/app/context/AuthUserContext";
import { ScreenSpinner } from "../../design-system/spinner/screen-spinner";
import { useRouter } from "next/navigation";
import { SessionStatusTyype } from "@/app/types/SessionStatusTypes";
import { REGISTERED, GUEST, ADMIN } from "@/app/lib/session-status";

interface Props {
  children: React.ReactNode;
  sessionStatus?: SessionStatusTyype;
}

export const Session = ({ children, sessionStatus }: Props) => {
  const router = useRouter();
  const { authUserIsLoading, authUser } = useAuth();

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

  if (sessionStatus === ADMIN && !authUserIsLoading) {
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
