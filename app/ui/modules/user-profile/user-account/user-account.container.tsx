"use client";
import { Button } from "@/app/ui/design-system/button/Button";
export const UserAccountContainer = () => {
  return (
    <div className="flex justify-center pt-20 pb-40">
      <Button action={() => console.log("first")} variant="danger">
        Déconnemion
      </Button>
    </div>
  );
};
