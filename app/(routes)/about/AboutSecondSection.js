import React, { useRef, useState } from 'react'
import Marquee from '@/components/sections/Marquee'
import { Play, Pause } from "lucide-react";
import { ShieldCheck, Heart, Leaf } from 'lucide-react';
import Image from 'next/image';

import IcedImg from "@/public/images/web 2.jpg";


// 1. Define data with an 'icon' property
const cardData = [
    {
        id: 1,
        title: "Quality First",
        description: "We never compromise on flavor or freshness.",
        icon: <ShieldCheck className="w-8 h-8 text-[#5e315e]" />,
        // bgColor: "bg-orange-100"
    },
    {
        id: 2,
        title: "Warm Hospitality",
        description: "Everyone is welcome here, no matter the reason or time.",
        icon: <Heart className="w-8 h-8 text-[#5e315e]" />,
        // bgColor: "bg-green-100"
    },
    {
        id: 3,
        title: "Sustainability",
        description: "Ethically sourced beans and eco-conscious choices.",
        icon: <Leaf className="w-8 h-8 text-[#5e315e]" />,
        // bgColor: "bg-blue-100"
    },
];

const AboutSecondSection = () => {
    // Video Player Logic
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="">
            {/* Section Title */}
            <h2 className="font-playfair font-semibold text-[40px] text-solid text-center leading-tight mb-12">
                The Heart of <br /> Caffeine
            </h2>

            {/* Cards Container */}
            <div className='flex flex-col gap-[30px]'>
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    {/* Dynamic Mapping */}
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="flex-1 px-5 py-10 flex flex-col items-center gap-5 border border-[#5E315E]/60 bg-[#F5E5F5] rounded-[20px] group"
                        >
                            {/* Icon Wrapper */}
                            <div className={`${card.bgColor} rounded-full flex items-center justify-center`}>
                                {card.icon}
                            </div>

                            <div className='flex flex-col items-center gap-0.75'>
                                <h3 className="font-lato text-[22px] font-bold text-[#5e315e]">{card.title}</h3>
                                <p className="font-lato text-[16px] text-gray-600 m-0 text-center leading-[120%]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>


                {/* <div className='relative w-full h-[500px] rounded-[15px] overflow-hidden'>
                    <video
                        ref={videoRef}
                        onClick={togglePlay}
                        className="w-full h-full object-cover"
                        src="/images/Hero_Video.mp4"
                        playsInline
                    />

                    <div
                        className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300 pointer-events-none
                                    ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                    >
                        <button
                            className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-[#5E315E] fill-current" />
                            ) : (
                                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#5E315E] fill-current ml-1" />
                            )}
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default AboutSecondSection;