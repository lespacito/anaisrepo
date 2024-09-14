"use client"
import useFirebaseAuth from "@/app/hooks/use-firebase-auth";
import { UserDocument } from "@/app/types/User";
import { createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const init = {
  uid: "",
  email: "",
  emailVerified: false,
  phoneNumber: "",
  userDocument: {} as UserDocument,
};

const authUserContext = createContext({
  authUser: init,
  authUserIsLoading: true,
});

export function AuthUserProvider({ children }: Props) {
  const auth = useFirebaseAuth();

  return (
    <authUserContext.Provider
      value={{
        authUser: auth.authUser as {
          uid: string;
          email: string;
          displayName: string;
          emailVerified: boolean;
          phoneNumber: string;
          userDocument: UserDocument;
        },
        authUserIsLoading: auth.authUserIsLoading,
      }}
    >
      {children}
    </authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
