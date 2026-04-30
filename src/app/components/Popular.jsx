import { data } from "../../../public/data"
import PopularCard from "./PopularCard";

export default function Popular() {
    // Show only first 4 tiles
    const featuredTiles = data.slice(0, 4);

    return (
        <div className="popular-section text-center my-4">
            <div className="popular-header space-y-3">
                <h2 className="text-5xl font-bold">Featured Tiles</h2>
                <p>Explore our premium tile collection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {
                    featuredTiles.map(tile => (
                        <PopularCard key={tile.id} tile={tile} ></PopularCard>
                    ))
                }
            </div>
        </div>
    )
}