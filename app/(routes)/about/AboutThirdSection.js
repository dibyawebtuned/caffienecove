import React from 'react'
import Image from 'next/image'
import { Coffee, Heart, Smile, Home } from "lucide-react";

import Image_1 from "@/public/images/web 9.jpg"
import Image_2 from "@/public/images/Footer_2.jpg"
import Image_3 from "@/public/images/web 3.jpg"

const FEATURES = [
    { icon: Coffee, title: "Great Coffee,\nTasty Sips" },
    { icon: Heart, title: "Warm, Cozy\nAtmosphere" },
    { icon: Smile, title: "Speedy Service\nwith a Smile" },
    { icon: Home, title: "Local &\nSustainable" },
];

const AboutThirdSection = () => {
    return (
        <div
            className="
        flex flex-col lg:flex-row
        gap-[20px]
        px-1 sm:px-6 lg:px-0
      "
        >
            {/* LEFT CONTENT */}
            <div className='flex-1'>
                <div className='mb-6 md:mb-12 flex flex-col gap-[15px] text-center lg:text-left'>
                    <h2 className="font-playfair font-playfair-semibold text-3xl sm:text-4xl lg:text-[47px] text-solid leading-tight text-center">
                        Good Vibes <br /> Great Coffee
                    </h2>

                    <p className="m-0 p-text text-sm sm:text-base font-lato font-lato-semibold leading-[140%] text-center">
                        At Brewhaus, we serve great coffee and fresh pastries with
                        care and passion, creating a warm, cozy space that feels like home.
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 mt-0 sm:mt-12 mx-0 sm:mx-4 rounded-xl overflow-hidden">
                    {/* Dividers */}
                    <div className="hidden sm:block absolute inset-y-0 left-1/2 w-px bg-[#5E315E]" />
                    <div className="hidden sm:block absolute inset-x-0 top-1/2 h-px bg-[#5E315E]" />

                    {FEATURES.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-5 sm:py-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5E315E] flex items-center justify-center mb-4 sm:mb-5">
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-light" strokeWidth={1.8} />
                                </div>

                                <h3 className="text-[#5E315E] font-playfair-semibold font-playfair text-base sm:text-lg lg:text-xl leading-snug whitespace-pre-line">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="
        flex-1 flex flex-col sm:flex-row
        gap-5
        mt-0 lg:mt-0   /* spacing when stacked */
      ">
                {/* Large image */}
                <div className="
          flex-1 relative
          h-[220px] sm:h-[340px] lg:h-[650px]
          rounded-lg overflow-hidden
        ">
                    <Image src={Image_1} alt="Coffee shop" fill className="object-cover" priority />
                </div>

                {/* Two stacked images */}
                <div className="flex-1 flex flex-col gap-5">
                    <div className="
            relative
            h-[180px] sm:h-[160px] lg:h-[315px]
            rounded-lg overflow-hidden
          ">
                        <Image src={Image_2} alt="Pastries" fill className="object-cover" />
                    </div>

                    <div className="
            relative
            h-[180px] sm:h-[160px] lg:h-[315px]
            rounded-lg overflow-hidden
          ">
                        <Image src={Image_3} alt="Coffee brewing" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutThirdSection
