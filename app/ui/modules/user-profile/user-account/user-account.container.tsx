"use client";
import { Button } from "../../../design-system/button/Button";
export const UserAccountContainer = () => {
  return (
    <div>
      <Button action={() => console.log("Déconnected")} variant="danger">
        Déconnexion
      </Button>
    </div>
  );
};
