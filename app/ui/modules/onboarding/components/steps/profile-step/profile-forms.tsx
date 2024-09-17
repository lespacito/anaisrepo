import { FormsType } from "@/app/types/Forms";
import { Input } from "@/app/ui/design-system/forms/input";
import { Select } from "@/app/ui/design-system/forms/select";
import { Textarea } from "@/app/ui/design-system/forms/textarea.";

interface Props {
  form: FormsType;
}
export default function ProfileStepForm({ form }: Props) {
  const { errors, isLoading, register } = form;
  return (
    <form className="w-full max-w-md space-y-4">
      <Input
        isLoading={isLoading}
        label="Nom d'utilisteur :"
        placeholder="Lespacito"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ !"
        id="displayName"
        required={true}
      />
      <Select
        isLoading={isLoading}
        placeholder="Sélectionne ta passion favorite"
        options={["Photographie", "Voyage", "Cuisine", "Art", "Musique"]}
        register={register}
        errors={errors}
        errorMsg="Tu dois sélectionner une passion !"
        id="favoritepass"
        required={true}
      />
      <Textarea
        isLoading={isLoading}
        label="Biographie :"
        placeholder="Donne nous ta meilleure description de toi..."
        register={register}
        errors={errors}
        rows={5}
        errorMsg="La description est obligatoire !"
        id="bio"
        required={false}
      />
    </form>
  );
}
