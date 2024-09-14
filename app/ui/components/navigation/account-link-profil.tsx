import Link from "next/link";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { useAuth } from "@/app/context/AuthUserContext";

export const AccountNavLinkProfil = () => {
  const { authUser } = useAuth();

  const { displayName } = authUser;

  return (
    <Link href="/mon-espace" className="flex items-center gap-2">
      <div className="max-w-[160px]">
        <Typography variant="caption2" weight="medium" className="truncate">
          {displayName ? displayName : "Bienvenue"}
        </Typography>
        <Typography variant="caption4" weight="medium" theme="background">
          Mon compte
        </Typography>
      </div>
    </Link>
  );
};
