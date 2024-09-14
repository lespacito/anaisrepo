import Link from "next/link";
import { Typography } from "@/app/ui/design-system/typography/Typography"

export const AccountNavLinkProfil = () => {
    return(
        <Link href="/mon-espace" className="flex items-center gap-2">
            <div className="">
                <Typography variant="caption2" weight="medium" className="truncate">
                    Lespacito
                </Typography>
                <Typography variant="caption4" weight="medium" className="gray">
                    Mon compte
                </Typography>
            </div>
        </Link>
};
