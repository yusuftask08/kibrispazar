// components/Car/CarShowcase.js
/* eslint-disable-next-line react/no-unescaped-entities */
"use client";
import cars from "@/app/data/cars";
import Image from "next/image";

export default function CarShowcase() {
    return (
        <section className="px-4 sm:px-8 py-10 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Vitrindeki Araçlar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 xl:gap-6">
                {cars.map((car, index) => (
                    <div key={index} className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all">
                        {/* Resim Alanı */}
                        <div className="relative aspect-[4/3]">
                            <Image
                                src={car.image}
                                alt={car.title}
                                fill
                                className="object-cover rounded-t-xl"
                            />
                            {/* Marka - Model metni görselin üstüne */}
                            <div className="absolute bottom-0 w-full bg-black/40 text-white text-xs text-center py-1 px-1 truncate">
                                {car.brand} {car.model}
                            </div>
                        </div>

                        {/* Bilgi Alanı */}
                        <div className="p-3">
                            <p className="text-[#F05A28] font-bold text-lg">{car.price} GBP</p>
                            <p className="text-xs text-gray-500">{car.location}</p>
                            <p className="text-sm text-gray-700">{car.year} • {car.km} km • {car.gear}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
