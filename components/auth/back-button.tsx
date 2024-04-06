'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
    label: string;
    href: string;
}

export const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
    return (
        <Button 
            className="w-full text-muted-foreground font-normal"
            variant='link'
            size='sm'
            asChild
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}