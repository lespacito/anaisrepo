"use client";
import { useAuth } from "@/app/context/AuthUserContext";

export const UserAccountContainer = () => {
  const { authUser } = useAuth();
  console.log("AuthUser", authUser);

  return (
    <div className="flex justify-center pt-20 mb-40">
      Ici le contenu de ton utilisateur
    </div>
  );
};
