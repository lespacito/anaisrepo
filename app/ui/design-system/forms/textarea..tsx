import clsx from "clsx";
import { Typography } from "../typography/Typography";

interface TextareaProps {
  isLoading: boolean;
  placeholder?: string; // Placeholder peut être optionnel
  label?: string | null; // Label peut être optionnel ou null
  register: any;
  errors: any;
  errorMsg: string;
  id: string;
  required?: boolean;
  rows?: number; // 5 lignes par défaut
}

export const Textarea = ({
  isLoading,
  placeholder,
  label = null, // Par défaut null si non fourni
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ !",
  id,
  required = true,
  rows = 5,
}: TextareaProps) => {
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
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={clsx(
          isLoading
            ? "bg-disabled focus:ring-disabled cursor-not-allowed"
            : "bg-white",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger"
            : "placeholder-gray",
          "w-full p-4 font-light border border-gray rounded focus:outline-none focus:ring-1 focus:ring-primary resize-none"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
      />
      {errors[id] && (
        <Typography variant="caption3" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
