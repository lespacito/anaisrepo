import { Container } from "@/app/ui/components/container/Container";
import { Box } from "@/app/ui/design-system/box/box";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { FormsType } from "@/app/types/Forms";

interface Props {
  form: FormsType;
}

export const RegisterView = ({ form }: Props) => {
  return (
    <>
      <Container className="grid grid-cols-2 gap-20 mb-32">
        <div className="flex items-center">
          <div className="relative w-full h-[532px]">
            <Image
              fill
              src={"/assets/img/bohnomme.svg"}
              alt="bohnomme blanc"
              className="object-scale-down"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Box padding_y="py-5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" component="h1">
                Inscription
              </Typography>
              <div className="flex items-center gap-2">
                <Typography
                  variant="caption3"
                  component="span"
                  theme="secondary"
                >
                  Tu as déjà un compte ?
                </Typography>
                <Typography variant="caption3" component="span" theme="primary">
                  <Link href="/connexion">Connexion</Link>
                </Typography>
              </div>
            </div>
            <RegisterForm form={form} />
            <Typography
              variant="caption4"
              theme="secondary"
              className="max-w-md mx-auto space-y-1 text-center"
            >
              <div>En t'inscrivant tu acceptes les</div>
              <div>
                <Link href="/about" className="text-secondary">
                  Conditions d'utilisation
                </Link>{" "}
                et la{" "}
                <Link href="/about" className="text-secondary">
                  Politique de confidentialité
                </Link>
                .
              </div>
            </Typography>
          </Box>
        </div>
      </Container>
    </>
  );
};
