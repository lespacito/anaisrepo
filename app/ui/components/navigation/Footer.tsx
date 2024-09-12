import { FooterLinks } from "@/app/types/AppLinks";
import { Typography } from "../../design-system/typography/Typography";
import { Container } from "../container/Container";
import { ActiveLink } from "./Active-link";
import { footerLinks } from "./App-links";
import { v4 as uuidv4 } from "uuid";
import { linkTypes } from "@/app/lib/link-type";
import { SocialNetworksButtons } from "./Social-networks-buttons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footernNavlinks = footerLinks.map((columnLinks) => (
    <FooterLink key={uuidv4()} data={columnLinks} />
  ));

  return (
    <div className="bg-secondary">
      <Container className="flex justify-between pt-10">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="background" weight="medium">
            CadeauAnais
          </Typography>
          <Typography variant="caption3" theme="neutral">
            Partageons ensemble mes passions
          </Typography>
        </div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <Typography variant="caption3" theme="neutral">
          <div className="flex gap-7">{footernNavlinks}</div>
        </Typography>
        <hr className="text-background" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="neutral">
            {`Copyright © ${currentYear} | Propulsé par`}{" "}
            <a href="https://github.com/lespacito" target="_blank">
              {` Lespacito - Codeur Freelance`}
            </a>
          </Typography>
          <div className="">
            <SocialNetworksButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const LinksList = data.links.map((link) => (
    <div key={uuidv4()} className="pb-2">
      {link.type === linkTypes.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === linkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="background"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <div className="space-y-4">{LinksList}</div>
    </div>
  );
};
