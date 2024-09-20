import { useAuth } from "@/app/context/AuthUserContext";

export const UserAccountContainer = () => {
  const {authUser} = useAuth

  console.log("authUser", authUser)

  return (
    <div className="flex justify-center pt-20 mb-40">
      Ici le contenu de ton utilisateur
    </div>
  );
};
