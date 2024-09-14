import { auth, db } from "@/app/config/firebase-config";
import { useState, useEffect } from "react";
import { UserDocument, UserInterface } from "@/app/types/User";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

  const formatAuthUser = (user: UserInterface) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
  });

  const getUserDocument = async (user: UserInterface) => {
    if (auth.currentUser) {
      const documentRef = doc(db, "users", auth.currentUser.uid);
      const compactUser = user;
      onSnapshot(documentRef, async (doc) => {
        if (doc.exists()) {
          compactUser.userDocument = doc.data() as UserDocument;
        }
        setAuthUser((prevAuthUser) => ({ ...prevAuthUser, ...compactUser }));
        setAuthUserIsLoading(false);
      });
    }
  };

  const authStateChanged = async (authState: UserInterface | User | null) => {
    if (!authState) {
      setAuthUser(null);
      setAuthUserIsLoading(false);
      return;
    }
    setAuthUserIsLoading(true);
    const formattedUser = formatAuthUser(authState);
    await getUserDocument(formattedUser);
  };

  useEffect(() => {
    const onsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => onsubscribe();
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
}
