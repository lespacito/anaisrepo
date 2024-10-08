import clsx from "clsx";
import { Typography } from "../typography/Typography";

interface Props {
  isLoading: boolean;
  placeholder?: string;
  label?: string | null; // Le label peut être null ou non fourni
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg: string;
  id: string;
  required?: boolean;
  isAutoCompleted?: boolean;
}

export const Input = ({
  isLoading,
  placeholder,
  label = null, // par défaut null si non fourni
  type = "text",
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ !",
  id,
  required = true,
  isAutoCompleted = false,
}: Props) => {
  return (
    <div className="space-y-2">
      {label && (
        <Typography
          variant="caption3"
          component="div"
          theme={errors[id] ? "danger" : "secondary"}
        >
          {label}
        </Typography>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          isLoading
            ? "bg-disabled focus:ring-disabled cursor-not-allowed"
            : "bg-white",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger"
            : "placeholder-gray",
          "w-full p-4 font-light border border-gray rounded focus:outline-none focus:ring-1 focus:ring-primary"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutoCompleted ? "on" : "off"}
      />
      {errors[id] && (
        <Typography variant="caption3" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
