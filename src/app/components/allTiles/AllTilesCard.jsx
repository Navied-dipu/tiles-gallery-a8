import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AllTilesCard({ tile }) {
    return (
        <div className="card bg-base-100  shadow-sm text-left">
            <figure>
                <Image src={tile.image} alt={tile.title} width={400} height={300} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{tile.title}</h2>
                <p>{tile.description}</p>
                <p>Dimensions: {tile.dimensions}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link href={`/tilesDetails/${tile.id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    )
}
