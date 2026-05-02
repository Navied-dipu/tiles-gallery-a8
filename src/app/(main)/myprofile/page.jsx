// app/profile/page.jsx

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Tiles Gallery - My Profile",
  description: "A collection of beautiful tiles for your inspiration.",
};
export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-semibold">Please Login First</h1>
            </div>
        );
    }

    const { user } = session;

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <div className="flex flex-col items-center">
                    <Image
                        src={
                            user.image ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt="profile"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-blue-500"
                    />

                    <h1 className="text-3xl font-bold mt-4">
                        {user.name}
                    </h1>

                    <p className="text-gray-500">{user.email}</p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h2 className="text-sm text-gray-500 mb-1">
                            User ID
                        </h2>
                        <p className="font-medium break-all">
                            {user.id}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h2 className="text-sm text-gray-500 mb-1">
                            Email Verified
                        </h2>
                        <p className="font-medium">
                            {user.emailVerified ? "Verified ✅" : "Not Verified ❌"}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h2 className="text-sm text-gray-500 mb-1">
                            Created At
                        </h2>
                        <p className="font-medium">
                            {new Date(user.createdAt).toLocaleString()}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h2 className="text-sm text-gray-500 mb-1">
                            Updated At
                        </h2>
                        <p className="font-medium">
                            {new Date(user.updatedAt).toLocaleString()}
                        </p>
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <Link href="/updateProfile">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                            Update Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}