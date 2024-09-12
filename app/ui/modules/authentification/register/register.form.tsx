import { FormsType } from "@/app/types/Forms";
import { Button } from "@/app/ui/design-system/button/Button";
import { Input } from "@/app/ui/design-system/forms/input";

interface Props {
  form: FormsType;
}
export const RegisterForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="JohnDoe@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ !"
        id="email"
      />
      <Input
        isLoading={isLoading}
        placeholder="John Doe"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ !"
        id="username"
      />
      <Input
        isLoading={isLoading}
        placeholder="Mot de passe"
        type="password"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ !"
        id="password"
      />
      <Input
        isLoading={isLoading}
        placeholder="Comment nous as-tu connus ?"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ !"
        id="howDidHear"
      />
      <Button isLoading={isLoading} type="submit" fullWidth>
        S'inscrire
      </Button>
    </form>
  );
};
