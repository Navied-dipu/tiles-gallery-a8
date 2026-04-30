'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navlink({ href, children }) {
    const pathName = usePathname()
    const isActive = pathName === href
    return (
        <Link href={href} className={isActive ? "text-pink-400" : "text-gray-400"}>
            {children}
        </Link>
    )
}
