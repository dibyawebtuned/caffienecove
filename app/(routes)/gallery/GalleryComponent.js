"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const GalleryComponent = () => {
    const [index, setIndex] = useState(-1);

    /**
     *  MASTER IMAGE LIST
     * Add unlimited images here
     */
    const IMAGES = [
        "/images/org/Twelve.jpg",
        // "/images/org/B_1.jpg",
        "/images/org/D_1.jpg",
        "/images/org/BK_1.jpg",
        "/images/org/BK_2.jpg",
        "/images/org/C_1.jpg",
        "/images/org/B_2.jpg",
        "/images/org/T_1.jpg",
        "/images/org/A_1.jpg",
        "/images/org/One.jpg",
        // "/images/org/BK_3.jpg",
        "/images/org/Ten.jpg",

        // These WILL now show
        "/images/org/Two.jpg",
        "/images/org/Three.jpg",
        "/images/org/Four.jpg",
        "/images/org/Five.jpg",
        "/images/org/Six.jpg",
        "/images/org/Seven.jpg",
        "/images/org/Eight.jpg",
        "/images/org/Nine.jpg",
        "/images/org/BK_3.jpg",
        "/images/org/B_1.jpg",
        "/images/org/Thirteen.jpg",
        "/images/org/Fourteen.jpg",
    ];

    /**
     * Featured layout indexes
     */
    const largeLeftIndex = 0;
    const topRightStart = 1;
    const topRightEnd = 5;
    const bottomLeftStart = 5;
    const bottomLeftEnd = 9;
    const largeRightIndex = 9;

    const topRightImages = IMAGES.slice(topRightStart, topRightEnd);
    const bottomLeftImages = IMAGES.slice(bottomLeftStart, bottomLeftEnd);

    /**
     * Extra images (AUTO)
     */
    const extraImages = IMAGES.slice(largeRightIndex + 1);

    /**
     * Lightbox slides
     */
    const slides = IMAGES.map((src) => ({ src }));

    return (
        <section className="bg-[#FFF7FB]">
            {/* Hero */}
            <div className="relative h-[40vh] sm:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/Footer_3.jpg')" }}
                />
                <div className="absolute inset-0 bg-[#3B1E3F]/80" />

                <h2 className="mt-[70px] relative z-10 font-playfair font-semibold 
                text-3xl sm:text-4xl lg:text-[47px] 
                text-white text-center px-4" data-aos="fade-up">
                    Gallery
                </h2>
            </div>

            {/* Featured Gallery */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] pt-[25px] sm:pt-[50px] pb-[20px]">
                <div className="grid gap-6 md:grid-cols-2">

                    {/* Large Left */}
                    <div
                        className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => setIndex(largeLeftIndex)}
                        data-aos="fade-right"
                    >
                        <Image
                            src={IMAGES[largeLeftIndex]}
                            alt="Gallery main"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20" />
                    </div>

                    {/* Top Right Grid */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {topRightImages.map((src, i) => (
                            <div
                                key={i}
                                className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                                onClick={() => setIndex(topRightStart + i)}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery ${topRightStart + i}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20" />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Left Grid */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {bottomLeftImages.map((src, i) => (
                            <div
                                key={i}
                                className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                                onClick={() => setIndex(bottomLeftStart + i)}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery ${bottomLeftStart + i}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20" />
                            </div>
                        ))}
                    </div>

                    {/* Large Right */}
                    {IMAGES[largeRightIndex] && (
                        <div
                            className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                            onClick={() => setIndex(largeRightIndex)}
                            data-aos="fade-left"
                        >
                            <Image
                                src={IMAGES[largeRightIndex]}
                                alt="Gallery main right"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20" />
                        </div>
                    )}
                </div>
            </div>

            {/* EXTRA IMAGES (AUTO SHOW) */}
            {extraImages.length > 0 && (
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] pb-[50px]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {extraImages.map((src, i) => {
                            const actualIndex = largeRightIndex + 1 + i;

                            return (
                                <div
                                    key={actualIndex}
                                    className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                                    onClick={() => setIndex(actualIndex)}
                                    data-aos="zoom-in"
                                    data-aos-delay={(i % 4) * 100}
                                >
                                    <Image
                                        src={src}
                                        alt={`Gallery ${actualIndex}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Lightbox */}
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Zoom, Thumbnails]}
                styles={{ container: { backgroundColor: "rgba(0,0,0,.95)" } }}
            />
        </section>
    );
};

export default GalleryComponent;
