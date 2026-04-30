'use client'
import Image from 'next/image'
import Link from 'next/link'
import userimg from '@/assate/user.png'
import logo from '@/assate/images.png'
import Navlink from './Navlink'
// import { authClient } from '@/lib/auth-client'

export default function Navbar() {
    // const { data: session, isPanding } = authClient.useSession()
    // const user = session?.user
    // console.log(user)
    return (
        <div className='flex justify-evenly items-center pt-5 pb-2 sticky top-0 bg-white z-50'>

            <div><p className='text-xl text-black font-extrabold'><Link href="/">TaileS</Link></p></div>
            <div >
                <ul className='flex justify-evenly items-center  gap-2'>
                    <li><Navlink href="/">Home</Navlink></li>
                    <li><Navlink href="/alltiles">All Tiles</Navlink></li>
                    <li><Navlink href="/myprofile">My Profile</Navlink></li>
                </ul>
            </div>
            {/* <div className='flex justify-between items-center gap-2'>
                <h2>{user?.name}</h2>
                <Image src={userimg} alt="Logo" width={40} height={50} />
                {isPanding ? <span className="loading loading-spinner loading-lg"></span> :
                    user ? <button onClick={() => authClient.signOut()} className='bg-red-500 text-white px-3 py-1 rounded'>Logout</button>
                        : <Link href="/login" className='bg-blue-500 text-white px-3 py-1 rounded'>Login</Link>
                }
            </div> */}
        </div>
    )
}
