import Image from 'next/image'
import React from 'react'

export default function PopularCard({ tile }) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image src={tile.image} alt={tile.title} width={400} height={300} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
