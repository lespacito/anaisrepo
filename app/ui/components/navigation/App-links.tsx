import { AppLinks } from "@/app/types/AppLinks";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";

const footerAppLinksList: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Passions",
    baseUrl: "/passions",
    type: "internal",
  },
  {
    label: "Blog",
    baseUrl: "/blog",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/contact",
    type: "internal",
  },
];

const footerUsersLinksList: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/connexion/mot-de-passe-perdu",
    type: "internal",
  },
];

const footerInfosLinksList: AppLinks[] = [
  {
    label: "A propos",
    baseUrl: "/about",
    type: "internal",
  },
  {
    label: "Contactez-moi",
    baseUrl: "/contact",
    type: "internal",
  },
];

export const footerSocialLinksList: AppLinks[] = [
  {
    label: "Instagram",
    baseUrl: "https://www.instagram.com/anaiskart_14/",
    type: "external",
    icon: RiInstagramFill,
  },
  {
    label: "Facebook",
    baseUrl: "https://fr-ca.facebook.com/anais.pro.3760",
    type: "external",
    icon: RiFacebookBoxFill,
  },
];

export const footerLinks = [
  {
    label: "Navigation",
    links: footerAppLinksList,
  },
  {
    label: "Utilisateurs",
    links: footerUsersLinksList,
  },
  {
    label: "Informations",
    links: footerInfosLinksList,
  },
  {
    label: "Réseaux",
    links: footerSocialLinksList,
  },
];
