import errors from "@/app/config/locales/errors.json";

type FirebaseErrorTypes = {
  [key: string]: string;
};

type FirebaseErrors = {
  [key: string]: FirebaseErrorTypes;
};

const firebaseErrors: FirebaseErrors = {
  ...errors,
  unknown_error: {
    unknown_error: errors.unknown_error,
  },
};
export function getFirebaseErrorMessage(
  method: string,
  errorCode: string
): string {
  const defaultErrorMessage = errors.unknown_error;

  if (!firebaseErrors[method]) {
    return defaultErrorMessage;
  }

  if (!firebaseErrors[method][errorCode]) {
    return defaultErrorMessage;
  }

  const errorMessage = firebaseErrors[method][errorCode];

  return errorMessage;
}
