import { Container } from "@/app/ui/components/container/Container";
import { Button } from "@/app/ui/design-system/button/Button";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className="w-full space-y-5 max-w-2xl">
        <Typography variant="h1" component="h1" className="max-w-2xl">
          Bienvenue !
        </Typography>
        <Typography variant="body-lg" component="p" className="max-w-lg">
          Suivez mes articles et passions
        </Typography>
        <div className="space-x-5 p-2">
          <Button baseUrl="/blog">Découvrir le blog</Button>
          <Image
            src={"/assets/img/karting.png"}
            alt="accueil"
            width={811}
            height={596}
          />
        </div>
      </div>
    </Container>
  );
};
