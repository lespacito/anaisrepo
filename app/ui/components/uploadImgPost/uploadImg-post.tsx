import Image from "next/image";
interface Props {
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | ArrayBuffer | null;
}

export const UploadImgPosts = ({ handleImageSelect, imagePreview }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <label className="inline-block bg-secondary text-white rounded px-[18px] py-[15px] text-caption2 font-medium animate pointer-cursor">
        <div className="flex items-center gap-2">
          <span>Ajouter une image</span>
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageSelect}
        />
        <Image
          height={400}
          width={200}
          src={
            imagePreview
              ? typeof imagePreview === "string"
                ? imagePreview
                : String(imagePreview)
              : "/assets/bonhommeConnexion.jpg"
          }
          alt="example image ou image du post"
        />
      </label>
    </div>
  );
};
