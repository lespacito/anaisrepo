import { IconType } from "react-icons";
import { linkTypes } from "../lib/link-type";

export interface AppLinks {
  label: string;
  baseUrl: string;
  type: linkTypes;
  icon?: IconType;
}

export interface FooterLinks {
  label: string;
  links: AppLinks[];
}
