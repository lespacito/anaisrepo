import { useAuth } from "@/app/context/AuthUserContext";
import { ScreenSpinner } from "../../design-system/spinner/screen-spinner";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  sessionStatus?: string;
}

export const Session = ({ children, sessionStatus }: Props) => {
  const router = useRouter();
  const { authUserIsLoading, authUser } = useAuth();

  if (sessionStatus === "registered" && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>;
    } else {
      router.push("/connexion");
    }
  }

  if (!authUserIsLoading) {
    return <>{children}</>;
  }
  return <ScreenSpinner />;
};
