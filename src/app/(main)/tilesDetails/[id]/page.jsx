import React from 'react';
import { data } from '../../../../../public/data';
import Image from 'next/image';

const Detailspage = async ({ params }) => {
    const { id } = await params;
    const tile = data.find(t => t.id === id);
    return (
        <main className="min-h-screen px-4 py-10 mt-10 sm:px-6">
            <div className="max-w-2xl mx-auto">
                <div
                    className="rounded-2xl flex items-center justify-center  mb-6"

                >
                    <Image src={tile.image} alt={tile.title} width={800} height={700} />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900 ">{tile.dimensions}</h1>
                        <h1 className="text-2xl font-semibold text-gray-900 ">{tile.title}</h1>
                    </div>
                    <div>
 <h1 className="text-2xl font-semibold text-gray-900 ">$ {tile.price}</h1>
                <span className="inline-block mt-2 text-md px-2 py-1 rounded-full bg-gray-900  text-white font-bold ">
                    {tile.category}
                </span>
                    </div>
                </div>
               
                <div>
                    <h2 className="text-xl font-bold text-gray-900 ">Description</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {tile.description}
                    </p>
                </div>

            </div>
        </main>
    );
};

export default Detailspage;