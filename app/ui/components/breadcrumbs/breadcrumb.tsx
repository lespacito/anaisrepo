"use client";
import { usePathname } from "next/navigation";
import { Typography } from "../../design-system/typography/Typography";
import clsx from "clsx";
import { RiHome3Line } from "react-icons/ri";
import { Container } from "../container/Container";
import Link from "next/link";

export const Breadcrumbs = () => {
  const asPath = usePathname();
  const segments = asPath.split("/").filter(Boolean); // Supprime les segments vides
  const lastSegment = segments[segments.length - 1] || "Accueil"; // Définit le dernier segment ou "Accueil" si vide

  // Ajoute "Accueil" au début des segments
  const fullPathSegments = ["Accueil", ...segments];

  const view = fullPathSegments.map((path, index) => {
    const isLast = path === lastSegment; // Vérifie si c'est le dernier segment
    const href =
      index === 0 ? "/" : `/${fullPathSegments.slice(1, index + 1).join("/")}`; // Génère l'URL dynamique

    return (
      <div key={`${path}-${index}`} className="flex items-center">
        <Link href={href}>
          <Typography
            variant="caption3"
            component="span"
            className={clsx(
              !isLast ? "text-gray" : "text-black",
              "capitalize hover:text-black animate"
            )}
          >
            {path !== "Accueil" ? (
              path.replace(/-/g, " ") // Remplace les tirets par des espaces pour une meilleure lisibilité
            ) : (
              <RiHome3Line className="inline -mt-1" />
            )}
          </Typography>
        </Link>

        {!isLast && (
          <Typography
            variant="caption2"
            component="span"
            className="ml-2 text-gray"
          >
            /
          </Typography>
        )}
      </div>
    );
  });

  return <Container className="flex items-center gap-2 py-7">{view}</Container>;
};
