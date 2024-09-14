import { Container } from "@/app/ui/components/container/Container";
import { Box } from "@/app/ui/design-system/box/box";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import Link from "next/link";
import Image from "next/image";
import { ForgotForm } from "./forget.form";
import { FormsType } from "@/app/types/Forms";

interface Props {
  form: FormsType;
}

export const ForgetPasswordView = ({ form }: Props) => {
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
              <Typography variant="lead" component="h1">
                Mot de passe perdu ?
              </Typography>
              <Typography variant="caption3" component="span" theme="primary">
                <Link href="/connexion">Se connecter</Link>
              </Typography>
            </div>
            <ForgotForm form={form} />
          </Box>
        </div>
      </Container>
    </>
  );
};
