"use client";
import { useAuth } from "@/app/context/AuthUserContext";
import { useToggle } from "@/app/hooks/use-toggle";
import { BaseComponentProps } from "@/app/types/onboarding/onboarding-steps-list";
import { Container } from "@/app/ui/components/container/Container";
import OnboardingTabs from "../../tabs/onboarding-tabs";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { OnboardingFooter } from "../footer/onboarding-footer";
import UploadPost from "@/app/ui/components/uploadPost/upload-post";
import { useForm, SubmitHandler } from "react-hook-form";
import { UploadPostFormFieldsType } from "@/app/types/Forms";
import { toast } from "react-toastify";
import { firestoreCreateDocument } from "@/app/api/firestore"; // Correction ici
import { UploadImgPosts } from "@/app/ui/components/uploadImgPost/uploadImg-post";
import { useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  UploadTask,
} from "firebase/storage";
import { storage } from "@/app/config/firebase-config";
import { Button } from "@/app/ui/design-system/button/Button";

export const BlogStep = ({
  prevStep,
  nextStep,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
  } = useForm<UploadPostFormFieldsType>();

  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined
  );
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );

  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgDataUrl = e.target?.result?.toString() as string;
        setImagePreview(imgDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageAndGetURL = async (): Promise<string | null> => {
    if (!selectedImage) return null;

    return new Promise((resolve, reject) => {
      const storageRef = ref(
        storage,
        `users-medias/${authUser.uid}/post/post-${authUser.uid}-${Date.now()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Erreur lors de l'upload de l'image:", error);
          toast.error("Erreur lors de l'upload de l'image");
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

  const onSubmit: SubmitHandler<UploadPostFormFieldsType> = async (
    formData
  ) => {
    if (!authUser) {
      toast.error("Utilisateur non authentifié");
      return;
    }

    setLoading(true);

    try {
      // Télécharger l'image si elle est sélectionnée
      const imageUrl = await uploadImageAndGetURL();

      // Créer le document dans Firestore avec l'URL de l'image
      const { error } = await firestoreCreateDocument("posts", authUser.uid, {
        ...formData,
        authorId: authUser.uid,
        createdAt: new Date().toISOString(),
        imageUrl, // Ajouter l'URL de l'image ici
      });

      if (error) {
        throw new Error(error.message);
      }

      toast.success("Post créé avec succès !");
      reset(); // Réinitialiser le formulaire après la soumission
      nextStep(); // Passer à l'étape suivante
    } catch (error) {
      console.error("Erreur lors de la création du post:", error);
      toast.error("Erreur lors de la création du post");
    } finally {
      setLoading(false);
    }
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
                Dernière étape !
              </Typography>
              <Typography variant="body-base" component="p" theme="secondary">
                Complète ce formulaire et ajoute ton premier post au blog !
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <UploadImgPosts
              handleImageSelect={handleImageSelect}
              imagePreview={imagePreview}
            />
            <div className="flex justify-center w-full">
              <UploadPost
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
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prevStep={prevStep}
        nextStep={handleSubmit(onSubmit)}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  );
};
