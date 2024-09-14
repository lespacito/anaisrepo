"use client";
import { firebaseLogOutUser } from "@/app/api/authentication";
import { Box } from "@/app/ui/design-system/box/box";
import { toast } from "react-toastify";
import { Button } from "@/app/ui/design-system/button/Button";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { ActiveLink } from "./Active-link";

export const UserAccountNavigation = () => {
  const handleLogOutUser = async () => {
    const { error } = await firebaseLogOutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientot, Merci pour la visite !");
  };
  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
        </Typography>
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace/mes-projets">Mes projets</ActiveLink>
        </Typography>
      </div>
      <Button action={() => handleLogOutUser()} variant="danger">
        Déconnexion
      </Button>
    </Box>
  );
};
