import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}
export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "";

  switch (size) {
    case "small":
      sizeStyles = "w-5 h-5";
      break;
    case "medium":
      sizeStyles = "w-9 h-9";
      break;
    case "large":
      sizeStyles = "w-12 h-12";
      break;
  }

  switch (variant) {
    case "primary":
      variantStyles = "text-primary";
      break;
    case "white":
      variantStyles = "text-white";
      break;
  }

  return (
    <svg
      className={clsx(sizeStyles, variantStyles, "animate-spin")}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#bdc3c7"
        strokeWidth="10"
        fill="none"
        strokeDasharray="250"
        strokeDashoffset="50"
      />

      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#3498db"
        strokeWidth="10"
        fill="none"
        strokeDasharray="100"
        strokeDashoffset="0"
      />
    </svg>
  );
};
