'use client'
import Image from 'next/image'
import Link from 'next/link'
import userimg from '@/assate/user.png'
import Navlink from './Navlink'
import { authClient } from '@/lib/auth-client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Navbar() {
    const router = useRouter()
    const { data: session, isPanding } = authClient.useSession()
    const user = session?.user
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='sticky top-0 bg-white z-50 shadow-sm border-b border-gray-100'>
            <div className='max-w-6xl mx-auto px-4 py-3 flex justify-between items-center'>

                {/* Logo */}
                <p className='text-xl font-extrabold text-black'>
                    <Link href="/">TaileS</Link>
                </p>

                {/* Desktop Nav */}
                <ul className='hidden md:flex items-center gap-6'>
                    <li><Navlink href="/">Home</Navlink></li>
                    <li><Navlink href="/alltiles">All Tiles</Navlink></li>
                    <li><Navlink href="/myprofile">My Profile</Navlink></li>
                </ul>

                {/* Desktop User */}
                <div className='hidden md:flex items-center gap-3'>
                    {user?.name && <span className='text-sm text-gray-700 font-medium'>{user.name}</span>}
                    <Image
                        src={user?.image || userimg}
                        className='rounded-full object-cover'
                        alt="User avatar"
                        width={36}
                        height={36}
                    />
                    {isPanding ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : user ? (
                        <button
                            onClick={() => authClient.signOut({ fetchOptions: { onSuccess: () => router.push('/login') } })}
                            className='bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded-lg transition'
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className='bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 rounded-lg transition'
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className='md:hidden flex flex-col gap-1.5 p-1'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden px-4 pb-4 flex flex-col gap-3 border-t border-gray-100 bg-white'>
                    <ul className='flex flex-col gap-2 pt-3'>
                        <li><Navlink href="/" onClick={() => setMenuOpen(false)}>Home</Navlink></li>
                        <li><Navlink href="/alltiles" onClick={() => setMenuOpen(false)}>All Tiles</Navlink></li>
                        <li><Navlink href="/myprofile" onClick={() => setMenuOpen(false)}>My Profile</Navlink></li>
                    </ul>

                    <div className='flex items-center gap-3 pt-2 border-t border-gray-100'>
                        <Image
                            src={user?.image || userimg}
                            className='rounded-full object-cover'
                            alt="User avatar"
                            width={34}
                            height={34}
                        />
                        {user?.name && <span className='text-sm text-gray-700 font-medium flex-1'>{user.name}</span>}
                        {isPanding ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : user ? (
                            <button
                                onClick={() => { authClient.signOut({ fetchOptions: { onSuccess: () => router.push('/login') } }); setMenuOpen(false) }}
                                className='bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded-lg transition'
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className='bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 rounded-lg transition'
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}