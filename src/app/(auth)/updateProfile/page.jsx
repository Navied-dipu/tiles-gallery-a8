"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ fixed
import { authClient, useSession } from "@/lib/auth-client";

export default function UpdateProfilePage() {
    const { data: session, } = useSession();
    const user = session?.user;
    const router = useRouter(); // ✅ fixed

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (user) {
            setName(user.name ?? "");
            setImage(user.image ?? "");
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const { data: updatedData, error, } = await authClient.updateUser({
            name,
            image,
        });
        
        router.refresh();
        router.push("/myprofile");
        setLoading(false);

        if (updatedData) {
            setMessage({ type: "success", text: "Profile updated successfully!" });
            await authClient.getSession();
              router.push("/myprofile");
            setTimeout(() => router.push("/myprofile"), 1500); // 
        } else if (error) {
            setMessage({ type: "error", text: error.message ?? "Something went wrong." });
            console.error(error);
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-8">Update Profile</h1>

                {message && (
                    <p className={`mb-4 text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-500"}`}>
                        {message.text}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-medium">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email (read-only) */}
                    <div>
                        <label className="block mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            value={user.email}
                            disabled
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-2 font-medium">Image URL</label>
                        <input
                            type="text"
                            name="photoUrl"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Enter image URL"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                        {loading ? "Saving..." : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
}