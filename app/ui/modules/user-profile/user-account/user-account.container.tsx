"use client";
import { firebaseLogOutUser } from "@/app/api/authentication";
import { Button } from "@/app/ui/design-system/button/Button";
import { toast } from "react-toastify";

export const UserAccountContainer = () => {
  const handleLogOutUser = async () => {
    const { error } = await firebaseLogOutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientot, Merci pour la visite !");
  };

  return (
    <div className="flex justify-center pt-20 pb-40">
      <Button action={() => handleLogOutUser()} variant="danger">
        Déconnemion
      </Button>
    </div>
  );
};
