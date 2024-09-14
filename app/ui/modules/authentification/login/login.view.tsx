import { Container } from "@/app/ui/components/container/Container";
import { Box } from "@/app/ui/design-system/box/box";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "./login.form";
import { FormsType } from "@/app/types/Forms";

interface Props {
  form: FormsType;
}

export const LoginView = ({ form }: Props) => {
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
                Connexion
              </Typography>
              <div className="flex items-center gap-2">
                <Typography
                  variant="caption3"
                  component="span"
                  theme="secondary"
                >
                  Tu n'a pas de compte ?
                </Typography>
                <Typography variant="caption3" component="span" theme="primary">
                  <Link href="/connexion/inscription">S'inscrire</Link>
                </Typography>
              </div>
            </div>
            <LoginForm form={form} />
            <Typography variant="caption4" theme="primary">
              <Link
                href="/connexion/mot-de-passe-perdu"
                className="flex justify-center"
              >
                Mot de passe perdu ?
              </Link>
            </Typography>
          </Box>
        </div>
      </Container>
    </>
  );
};
