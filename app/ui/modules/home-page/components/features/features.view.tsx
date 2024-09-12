"use client";
import { Container } from "@/app/ui/components/container/Container";
import { SocialNetworksButtons } from "@/app/ui/components/navigation/Social-networks-buttons";
import { Button } from "@/app/ui/design-system/button/Button";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

export interface BlogListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const blogData: BlogListInterface[] = [
  {
    imagePath: "/assets/img/pexels-ekrulila-2333332.jpg",
    imageAlt: "illustration",
    title: "Article 1",
    description: "Mon suberbe contenu",
  },
  {
    imagePath: "/assets/img/pexels-ekrulila-2385562.jpg",
    imageAlt: "illustration",
    title: "Article 2",
    description: "Mon suberbe contenu 2",
  },
  {
    imagePath: "/assets/img/pexels-fotios-photos-1438190.jpg",
    imageAlt: "illustration",
    title: "Article 3",
    description: "Mon suberbe contenu 3",
  },
  {
    imagePath: "/assets/img/pexels-vlada-karpovich-4050347.jpg",
    imageAlt: "illustration",
    title: "Article 4",
    description: "Mon suberbe contenu 4",
  },
];

export const FeaturesView = () => {
  const textBodyBlog = `Sois libre de nous parler n'importe quel sujet qui te tiens
  sincèrement à coeur, avec nous pas de tabou`;

  const blogList = blogData.map((posts) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center p-7 bg-white rounded"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
        <Image
          fill
          src={posts.imagePath}
          alt={posts.imageAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={posts.imagePath}
          alt={posts.imageAlt}
          className="object-scale-down"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {posts.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="secondary"
        className="text-center"
      >
        {posts.description}
      </Typography>
    </div>
  ));
  return (
    <div className="bg-background">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 col-span-7 gap-7">{blogList}</div>
        <div className="flex flex-col justify-between col-span-5 gap-10">
          <div className="">
            <Typography variant="h4" component="h2" className="mb-5">
              Partage tes connaissances ou même des événements de ton quotidien
              avec nous, nous te conseillerons!
            </Typography>
            <Typography
              variant="body-sm"
              component="p"
              className="mb-8"
              theme="secondary"
            >
              {textBodyBlog}
            </Typography>
            <Button
              variant="outline"
              baseUrl="/blog"
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Lire plus
            </Button>
          </div>
          <div className="">
            <Typography
              variant="caption3"
              theme="secondary"
              component="div"
              className="mb-4"
            >
              Nos réseaux sociaux
              <SocialNetworksButtons />
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};
