import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/app/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "../utils/getFirebaseErrorMessage";

export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError; // Exemple de code d'erreur
    const errorMessage = getFirebaseErrorMessage("auth", firebaseError.code);
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const firebaseSignInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Rafraîchir les tokens pour avoir accès aux claims
    await user.getIdToken(true);

    const idTokenResult = await user.getIdTokenResult();

    // Vérifier si l'utilisateur a la claim d'admin
    if (idTokenResult.claims.admin) {
      return { data: { user, admin: true } };
    } else {
      return { data: { user, admin: false } };
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "signInWithEmailAndPassword",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const firebaseLogOutUser = async () => {
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "signInWithEmailAndPassword",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const sendEmailResetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "signInWithEmailAndPassword",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const sendEmailVerificationProcedure = async () => {
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      return { data: true };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      const errorMessage = getFirebaseErrorMessage(
        "signInWithEmailAndPassword",
        firebaseError.code
      );
      return {
        error: {
          code: firebaseError.code,
          message: errorMessage,
        },
      };
    }
  } else {
    return { error: { code: "unknown", message: "Une erreur est survenue" } };
  }
};

export const updateUserIdentificationData = async (uid: string, data: any) => {
  const result = await fetch(
    "https://us-central1-anaisproject-ff941.cloudfunctions.net/updateUser-updateUser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: uid, data: data }),
    }
  );

  if (!result.ok) {
    const errorResponse = await result.json();
    const firebaseError = errorResponse as FirebaseError;

    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
  return { data: true };
};

export const addAdminRoleToUser = async (
  uid: string,
  claims: any
): Promise<{ claims?: boolean; error?: { code: string; message: string } }> => {
  try {
    const result = await fetch(
      "https://us-central1-anaisproject-ff941.cloudfunctions.net/addAdminRole",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: uid, claims: claims }), // Correction de claims ici
      }
    );

    if (!result.ok) {
      const errorResponse = await result.json();
      const firebaseError = errorResponse as FirebaseError;

      return {
        error: {
          code: firebaseError.code,
          message: firebaseError.message,
        },
      };
    }

    // Succès : claims ajouté à l'utilisateur
    return { claims: true };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return {
        error: { code: error.code, message: error.message },
      };
    }

    return {
      error: {
        code: "unknown_error",
        message:
          "Une erreur inconnue est survenue, contactez-nous si le problème persiste",
      },
    };
  }
};
