"use client";
import { useAuth } from "@/app/context/AuthUserContext";
import { Button } from "../../design-system/button/Button";
import { Typography } from "../../design-system/typography/Typography";
import { Container } from "../container/Container";
import Link from "next/link";
import { ActiveLink } from "./Active-link";

interface Props {}

export const Navbar = ({}: Props) => {
  const { authUser } = useAuth();

  const authentificationSystem = (
    <div className="flex items-center gap-2">
      <Button size="small" variant="primary" baseUrl="/connexion">
        Se connecter
      </Button>
      |
      <Button size="small" variant="secondary" baseUrl="/connexion/inscription">
        Inscription
      </Button>
    </div>
  );

  return (
    <div className="border-background border-b-2">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <ActiveLink href="/">
          <div className="flex flex-col">
            <div className="text-secondary font-extrabold text-lg">
              CadeauAnais
            </div>
            <Typography variant="caption4" theme="secondary" component="span">
              Partageons ensemble mes passions
            </Typography>
          </div>
        </ActiveLink>
        <div className="flex items-center gap-7">
          <Typography
            variant="body-base"
            component="div"
            theme="secondary"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/passions">Passions</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <ActiveLink href="/contact">Contactez-moi</ActiveLink>
          </Typography>

          {!authUser ? (
            authentificationSystem
          ) : (
            <>
              <Link href="/mon-espace" className="flex items-center gap-2">
                Mon espace
              </Link>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
