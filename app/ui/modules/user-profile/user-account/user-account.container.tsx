"use client";
import { Button } from "@/app/ui/design-system/button/Button";
export const UserAccountContainer = () => {
  return (
    <div>
      <Button action={() => console.log("first")} variant="danger">
        Déconnemion
      </Button>
    </div>
  );
};
