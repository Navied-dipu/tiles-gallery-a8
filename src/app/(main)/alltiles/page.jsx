"use client";
import { useState } from "react";
import AllTilesCard from "@/app/components/allTiles/AllTilesCard";
import { data } from "../../../../public/data";

const AllTilesPage = () => {
    const [search, setSearch] = useState("");

    const filteredTiles = data.filter(
        (tile) =>
            tile.title.toLowerCase().includes(search.toLowerCase()) ||
            tile.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto text-center mt-5 mb-5 px-4">
            <h2 className="text-5xl font-extrabold pt-6 pb-6">All Tiles</h2>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or category..."
                className="w-full max-w-md px-4 py-2 mb-6 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {filteredTiles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredTiles.map((tile) => (
                        <AllTilesCard key={tile.id} tile={tile} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 text-lg py-16">No tiles found.</p>
            )}
        </div>
    );
};

export default AllTilesPage;