import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/app/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
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
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
    };
  }
};

export const firebaseLogOutUser = async () => {
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
    };
  }
};

export const sendEmailResetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
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
      return {
        error: { code: firebaseError.code, message: firebaseError.message },
      };
    }
  } else {
    return { error: { code: "unknown", message: "Une erreur est survenue" } };
  }
};
