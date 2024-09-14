import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const firestoreUpdateDocument = async (
  collectionName: string,
  documentID: string,
  data: object
) => {
  try {
    const documentRef = doc(db, "cities", "DC");

    await updateDoc(documentRef, data);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
    };
  }
};
