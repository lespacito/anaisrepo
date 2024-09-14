"use client";
import { ForgetPasswordView } from "./forget-password.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotFormFieldsType } from "@/app/types/Forms";
import { useToggle } from "@/app/hooks/use-toggle";
import { sendEmailResetPassword } from "@/app/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ForgotFormFieldsType>();

  const handleResetPassword = async ({ email }: ForgotFormFieldsType) => {
    const { error } = await sendEmailResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`Un email a été envoyé à l'adresse ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

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
