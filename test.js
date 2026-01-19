"use client";
import React from "react";
import Image from "next/image";
import { Coffee, Heart, Smile, Home } from "lucide-react";

import Image_1 from "@/public/images/web 9.jpg";
import Image_2 from "@/public/images/Footer_2.jpg";
import Image_3 from "@/public/images/web 3.jpg";

const FEATURES = [
    {
        icon: Coffee,
        title: "Great Coffee,\nTasty Sips",
    },
    {
        icon: Heart,
        title: "Warm, Cozy\nAtmosphere",
    },
    {
        icon: Smile,
        title: "Speedy Service\nwith a Smile",
    },
    {
        icon: Home,
        title: "Local &\nSustainable",
    },
];

const AboutThirdSection = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] py-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* LEFT CONTENT */}
                <div className="flex-1">
                    <div className="mb-10">
                        <h2 className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-[40px] text-solid leading-tight mb-4">
                            Good Vibes <br /> Great Coffee
                        </h2>

                        <p className="text-gray-600 max-w-md leading-relaxed">
                            At Brewhaus, we serve great coffee and fresh pastries with
                            care and passion, creating a warm, cozy space that feels
                            like home.
                        </p>
                    </div>

                    {/* FEATURES GRID */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 mt-12 bg-[#FBF3DC] rounded-xl overflow-hidden">
                        {/* Dividers */}
                        <div className="hidden sm:block absolute inset-y-0 left-1/2 w-px bg-[#D8D1B8]" />
                        <div className="hidden sm:block absolute inset-x-0 top-1/2 h-px bg-[#D8D1B8]" />

                        {FEATURES.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center text-center px-6 py-10"
                                >
                                    <div className="w-14 h-14 rounded-full bg-[#1E4D2B] flex items-center justify-center mb-5">
                                        <Icon
                                            className="w-7 h-7 text-[#FBF3DC]"
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <h3 className="text-[#1E4D2B] font-playfair text-lg sm:text-xl leading-snug whitespace-pre-line">
                                        {item.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT IMAGES */}
                <div className="flex-1 flex flex-col sm:flex-row gap-5">
                    {/* Large image */}
                    <div className="flex-1 relative h-[260px] sm:h-[320px] lg:h-[380px] rounded-lg overflow-hidden">
                        <Image
                            src={Image_1}
                            alt="Coffee shop"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Two stacked images */}
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="relative h-[180px] sm:h-[150px] lg:h-[180px] rounded-lg overflow-hidden">
                            <Image
                                src={Image_2}
                                alt="Pastries"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative h-[180px] sm:h-[150px] lg:h-[180px] rounded-lg overflow-hidden">
                            <Image
                                src={Image_3}
                                alt="Coffee brewing"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutThirdSection;
