"use client";
import { ForgetPasswordView } from "./forget-password.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotFormFieldsType } from "@/app/types/Forms";
import { useToggle } from "@/app/hooks/use-toggle";

export const ForgetPasswordContainer = () => {
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgotFormFieldsType>();

  const onSubmit: SubmitHandler<ForgotFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log("formData", formData);
  };

  return (
    <ForgetPasswordView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};
