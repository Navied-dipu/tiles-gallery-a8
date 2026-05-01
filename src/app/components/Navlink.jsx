'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navlink({ href, children, onClick }) {
    const pathName = usePathname()
    const isActive = pathName === href

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`relative text-sm font-medium transition-colors duration-200 pb-0.5
                after:absolute after:left-0 after:bottom-0 after:h-0.5 after:rounded-full
                after:transition-all after:duration-300
                ${isActive
                    ? "text-gray-900 after:w-full after:bg-blue-500"
                    : "text-gray-500 hover:text-gray-900 after:w-0 hover:after:w-full after:bg-gray-300"
                }`}
        >
            {children}
        </Link>
    )
}