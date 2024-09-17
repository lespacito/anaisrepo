import { Timestamp } from "firebase/firestore";
export interface UserInterface {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  userDocument?: UserDocument;
}

export interface UserDocument {
  uid: string;
  email: string;
  displayName: string;
  howDidHear: string;
  bio: string;
  favoritepass: string;
  creationDate: Timestamp;
  onboardingIsCompleted: boolean;
}
