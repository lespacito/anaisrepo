"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormFieldsType } from "@/app/types/Forms";
import { RegisterView } from "./register.view";
import { firebaseCreateUser } from "@/app/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/app/hooks/use-toggle";

export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const handleCreateUserAuthentification = async ({
    email,
    password,
    howDidHear,
  }: RegisterFormFieldsType) => {
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur le site, Merci de m'avoir fait confiance");
    setIsLoading(false);
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setIsLoading(false);
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      return;
    }
    handleCreateUserAuthentification(formData);
  };

  return (
    <RegisterView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};
