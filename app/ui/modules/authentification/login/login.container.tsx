"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { useEffect } from "react";
import { LoginFormFieldsType } from "@/app/types/Forms";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/config/firebase-config";
import { useToggle } from "@/app/hooks/use-toggle";

export const LoginContainer = () => {
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

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log("formData", formData);
  };

  return (
    <LoginView form={{ errors, register, handleSubmit, onSubmit, isLoading }} />
  );
};
