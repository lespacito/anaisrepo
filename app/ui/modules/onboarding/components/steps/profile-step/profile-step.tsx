"use client";
import { BaseComponentProps } from "@/app/types/onboarding/onboarding-steps-list";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Container } from "@/app/ui/components/container/Container";
import OnboardingTabs from "../../tabs/onboarding-tabs";
import ProfileStepForm from "./profile-forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFIelds } from "@/app/types/Forms";
import { useToggle } from "@/app/hooks/use-toggle";
import { firestoreUpdateDocument } from "@/app/api/firestore";
import { useAuth } from "@/app/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
export const ProfileStep = ({
  prevStep,
  nextStep,
  isFirstStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFIelds>();

  const { displayName, favoritepass, bio } = authUser.userDocument;

  useEffect(() => {
    const fieldsToUpdate: ("displayName" | "favoritepass" | "bio")[] = [
      "displayName",
      "favoritepass",
      "bio",
    ];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  });

  const handleUpdateUserDocument = async (
    formData: OnboardingProfileFormFIelds
  ) => {
    console.log("use API")
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
      // Add your own data if needed
    );
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    setLoading(false);
    reset();
    nextStep();
  };

  const onSubmit: SubmitHandler<OnboardingProfileFormFIelds> = async (
    formData
  ) => {
    setLoading(true);
    // Your code here to create or update the user document
    if (
      displayName !== formData.displayName ||
      favoritepass !== formData.favoritepass ||
      bio !== formData.bio
    ) {
      handleUpdateUserDocument(formData);
    }
    nextStep()
  };

  return (
    <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h2" component="h1">
                Compléte ici ton profil !
              </Typography>
              <Typography variant="body-base" component="p" theme="secondary">
                Bienvenue dans notre communauté de passionnés ! Maintenant,
                c’est à ton tour de te présenter. Complète ton profil pour que
                les autres membres puissent mieux te connaître.
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <ProfileStepForm
              form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
              }}
            />
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prevStep={prevStep}
        nextStep={handleSubmit(onSubmit)}
        isFirstStep={isFirstStep}
        isLoading={isLoading}
      />
    </div>
  );
};
