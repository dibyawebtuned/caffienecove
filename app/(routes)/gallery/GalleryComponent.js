"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const GalleryComponent = () => {
    // State now tracks the INDEX of the open image (-1 means closed)
    const [index, setIndex] = useState(-1);

    // 1. Define source arrays
    const largeLeft = "/images/web 4.jpg";
    const largeRight = "/images/web 4.jpg";

    const topRightImages = [
        "/images/web 4.jpg",
        "/images/Footer_3.jpg",
        "/images/Footer_1.jpg",
        "/images/web 2.jpg",
    ];

    const bottomLeftImages = [
        "/images/web 2.jpg",
        "/images/Footer_1.jpg",
        "/images/Footer_3.jpg",
        "/images/web 4.jpg",
    ];

    // 2. Create a MASTER SLIDES array for the Lightbox
    // The order here determines the "Next/Prev" flow
    const slides = [
        { src: largeLeft },                     // Index 0
        ...topRightImages.map(src => ({ src })), // Indices 1-4
        ...bottomLeftImages.map(src => ({ src })), // Indices 5-8
        { src: largeRight }                     // Index 9
    ];

    return (
        <section className="bg-[#FFF7FB]">
            {/* Hero Section */}
            <div className="relative h-[40vh] sm:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/Footer_3.jpg')" }}
                />
                <div className="absolute inset-0 bg-[#3B1E3F]/80" />

                <h2 className="mt-[70px] relative z-10 font-playfair font-semibold 
                    text-3xl sm:text-4xl lg:text-[47px] 
                    text-white text-center leading-tight px-4">
                    Gallery
                </h2>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] py-[25px] sm:py-[50px]">
                {/* Responsive Logic: 
                   - Mobile: Single column stack (flex-col)
                   - Desktop: Two columns side-by-side (md:grid-cols-2)
                */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* 1. Large Left Image (Index 0) */}
                    <div
                        className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => setIndex(0)}
                    >
                        <Image
                            src={largeLeft}
                            alt="Gallery main"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>

                    {/* 2. Top Right Grid (Indices 1, 2, 3, 4) */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {topRightImages.map((src, i) => (
                            <div
                                key={i}
                                className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                                // Offset index by 1 because Large Left is 0
                                onClick={() => setIndex(i + 1)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                        ))}
                    </div>

                    {/* 3. Bottom Left Grid (Indices 5, 6, 7, 8) */}
                    {/* On mobile, this usually appears 3rd. We keep the DOM order. */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {bottomLeftImages.map((src, i) => (
                            <div
                                key={i}
                                className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                                // Offset index by 1 (Large Left) + 4 (Top Right) = 5
                                onClick={() => setIndex(i + 5)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${i + 5}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                        ))}
                    </div>

                    {/* 4. Right Large Image (Index 9) */}
                    <div
                        className="relative aspect-[5/4] rounded-xl overflow-hidden cursor-pointer group"
                        // Offset is last index
                        onClick={() => setIndex(9)}
                    >
                        <Image
                            src={largeRight}
                            alt="Gallery main right"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                </div>
            </div>

            {/* Lightbox Component */}
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Zoom, Thumbnails]}
                // Custom styles for the lightbox to match theme (optional)
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
            />
        </section>
    );
};

export default GalleryComponent;