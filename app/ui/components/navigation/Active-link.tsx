"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
  const pathname = usePathname();

  const isActive: boolean = useMemo(() => {
    return pathname === href;
  }, [pathname, href]);
  return (
    <Link href={href} className={clsx(isActive && "text-primary font-medium")}>
      {children}
    </Link>
  );
};
