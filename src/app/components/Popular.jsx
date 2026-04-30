import { data } from "../../../public/data"
import PopularCard from "./PopularCard";

export default function Popular() {
    const featuredTiles = data.slice(0, 4);

    return (
        <div className="popular-section text-center my-4">
            <div className="popular-header space-y-3">
                <h2 className="text-5xl font-bold">Feature</h2>
                <p>Explore our premium tile collection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 max-w-4xl mx-auto px-4">
                {featuredTiles.map(tile => (
                    <PopularCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    )
}