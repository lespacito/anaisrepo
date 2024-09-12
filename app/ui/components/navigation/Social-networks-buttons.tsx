"use client";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../design-system/button/Button";
import { footerSocialLinksList } from "./App-links";
import { RiFacebookBoxFill } from "react-icons/ri";
import clsx from "clsx";

interface Props {
  className?: string;
  theme?: "primary" | "secondary" | "accent";
}
export const SocialNetworksButtons = ({
  className,
  theme = "secondary",
}: Props) => {
  const action = () => {
    console.log("Hello world");
  };

  const icoList = footerSocialLinksList.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
      }}
      baseUrl={socialNetwork.baseUrl}
      linkType="external"
    />
  ));
  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
};
