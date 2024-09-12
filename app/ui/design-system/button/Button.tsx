"use client";
import { IconType } from "react-icons"; // Assurez-vous que l'icône provient de react-icons
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { linkTypes } from "@/app/lib/link-type";
import { ActiveLink } from "../../components/navigation/Active-link";

// Typage pour l'icône
interface IconProps {
  icon: IconType;
}

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "primary" | "secondary" | "outline" | "disabled" | "ico";
  icon?: IconProps;
  iconTheme?: "accent" | "primary" | "secondary";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: linkTypes;
  action?: Function;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export const Button = ({
  size = "medium",
  variant = "primary",
  icon,
  iconTheme = "primary",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  action = () => {},
  type = "button",
  fullWidth = false,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    icoSize: number = 0;

  // Définition des styles selon la variante du bouton
  switch (variant) {
    case "primary":
      variantStyles = "bg-buttonPrimary text-buttonPrimary rounded";
      break;
    case "secondary":
      variantStyles = "bg-buttonSecondary text-buttonSecondary rounded";
      break;
    case "accent":
      variantStyles = "bg-buttonAccent text-buttonAccent rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-buttonDisabled text-buttonDisabled cursor-not-allowed rounded";
      break;
    case "outline":
      variantStyles = "border-buttonOutline text-primary border-2 rounded";
      break;
    case "ico":
      variantStyles = clsx(
        iconTheme === "primary" &&
          "bg-buttonPrimary text-buttonPrimary rounded-full",
        iconTheme === "accent" &&
          "bg-buttonAccent text-buttonAccent rounded-full",
        iconTheme === "secondary" &&
          "bg-buttonSecondary text-buttonSecondary rounded-full"
      );
      break;
  }

  // Définition des styles selon la taille du bouton
  switch (size) {
    case "small":
      sizeStyles = `text-sm font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      icoSize = 18;
      break;
    case "medium":
      sizeStyles = `text-base font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-lg font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;
      break;
  }

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="medium" variant="white" />
          ) : (
            <Spinner size="medium" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize} /> // Affiche l'icône avec la taille appropriée
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <button
      type={type}
      className={clsx(
        variantStyles,
        sizeStyles,
        isLoading && "cursor-not-allowed",
        fullWidth && "w-full",
        "relative animate"
      )}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === linkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <ActiveLink href={baseUrl}>{buttonElement}</ActiveLink>;
    }
  }
  return buttonElement;
};
