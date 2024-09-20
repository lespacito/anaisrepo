import { FormsType } from "@/app/types/Forms";
import { Input } from "../../design-system/forms/input";
import { Textarea } from "../../design-system/forms/textarea.";

interface Props {
  form: FormsType;
}

export default function UploadPost({ form }: Props) {
  const { errors, isLoading, register } = form;
  return (
    <form className="w-full max-w-md space-y-4">
      <Input
        isLoading={isLoading}
        label="Titre de l'article"
        placeholder="Mon premier article"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ !"
        id="title"
        required={true}
      />
      <Textarea
        isLoading={isLoading}
        label="Contenu de l'article"
        placeholder="Je voudrais vous parler de..."
        register={register}
        errors={errors}
        rows={5}
        errorMsg="Le contenu de l'article est obligatoire !"
        id="content"
        required={true}
      />
    </form>
  );
}
