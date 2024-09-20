import React, { useState, useEffect } from "react";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import { Container } from "@/app/ui/components/container/Container";
import { BaseComponentProps } from "@/app/types/onboarding/onboarding-steps-list";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthUserContext";
import { useToggle } from "@/app/hooks/use-toggle";
import Confetti from "react-confetti";
import { firestoreUpdateDocument } from "@/app/api/firestore";
import { toast } from "react-toastify";

export default function OnboardingFinishStep({
  isFinalStep,
  nextStep,
}: BaseComponentProps) {
  const { authUser } = useAuth();
  const { value: isLoading, toggle } = useToggle();

  const [showConfetti, setShowConfetti] = useState(false);
  // Fonction pour fermer l'onboarding et lancer les confettis
  const handleCloseOnboarding = async () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 6000); // Durée des confettis

    const data = { onboardingIsCompleted: true };

    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      data
    );

    if (error) {
      toggle();
      toast.error(error.message);
      return;
    }
    toggle();
  };

  // Met à jour la taille de la fenêtre et lance les confettis après un délai
  useEffect(() => {
    // Lancer les confettis après 50ms
    const timer = setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 6000); // Gérer la durée des confettis
    }, 50);

    return () => {
      clearTimeout(timer); // Nettoyage du timer
    };
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
          initialVelocityX={4}
          initialVelocityY={10}
        />
      )}

      <div className="relative h-screen pb-[91px]">
        <div className="h-full overflow-auto">
          <Container className="h-full">
            <div className="relative z-10 flex items-center h-full py-10">
              <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
                <div className="space-y-3">
                  <Image
                    src="/assets/img/karting.png"
                    alt="AnaisCadeau"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <Typography variant="h1" component="h1" className="text-center">
                  Félicitations!
                </Typography>
                <Typography
                  variant="body-base"
                  component="p"
                  theme="secondary"
                  className="text-center"
                >
                  Tu fais maintenant partie de la communauté de AnaisCadeau !
                  Nous sommes ravis de t'accueillir parmi nous. Tu vas pouvoir
                  ainsi découvrir mes passions favorites ainsi que les intérêts
                  communs que tu as parmi les autres utilisateurs. N'hésite pas
                  à nous contacter en cas de remarques ou questions. Amuse-toi
                  bien !
                </Typography>
              </div>
            </div>
          </Container>
        </div>
        <OnboardingFooter
          isFinalStep={isFinalStep}
          isLoading={isLoading}
          nextStep={handleCloseOnboarding}
        />
      </div>
    </>
  );
}
