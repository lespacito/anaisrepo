"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { useEffect } from "react";
import { LoginFormFieldsType } from "@/app/types/Forms";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/config/firebase-config";
import { useToggle } from "@/app/hooks/use-toggle";
import { firebaseSignInUser } from "@/app/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user", user);
        // ...
      } else {
        console.log("Tu n'es pas connecté");
        // User is signed out
        // ...
      }
    });
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFieldsType) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur CadeauAnais !");
    setIsLoading(false);
    router.push("/mon-espace");
    reset;
  };

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manuel",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleSignInUser(formData);
  };

  return (
    <LoginView form={{ errors, register, handleSubmit, onSubmit, isLoading }} />
  );
};
