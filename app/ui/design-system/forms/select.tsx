import clsx from "clsx";
import { Typography } from "../typography/Typography";

interface SelectProps {
  isLoading: boolean;
  placeholder: string;
  options: string[];
  register: any;
  errors: any;
  errorMsg: string;
  id: string;
  required?: boolean;
  isAutoCompleted?: boolean;
}

export const Select = ({
  isLoading,
  placeholder,
  options,
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ !",
  id,
  required = true,
  isAutoCompleted = false,
}: SelectProps) => {
  return (
    <div className="space-y-2">
      <select
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
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {errors[id] && (
        <Typography variant="caption3" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
