import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const firestoreCreateDocument = async (
  collectionName: string,
  documentID: string,
  data: object
) => {
  try {
    const documentRef = doc(db, collectionName, documentID);

    await setDoc(documentRef, data);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
    };
  }
};

export const firestoreUpdateDocument = async (
  collectionName: string,
  documentID: string,
  data: object
) => {
  try {
    const documentRef = doc(db, collectionName, documentID);

    await updateDoc(documentRef, data);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
    };
  }
};
