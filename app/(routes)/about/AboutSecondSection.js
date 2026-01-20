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
        <section className="flex flex-col gap-[20px]">
            {/* Section Title */}
            <h2 className="font-playfair font-playfair-semibold text-3xl sm:text-4xl lg:text-[47px] text-solid leading-tight text-center">
                The Heart of <br /> Caffeine
            </h2>

            {/* Cards Container */}
            <div className='flex flex-col gap-[30px]'>
                <div className="flex flex-col md:flex-row gap-5 w-full">

                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="flex-1 px-5 py-10 flex flex-col items-center gap-5 border border-[#5E315E]/60 bg-[#F5E5F5] rounded-[20px] group"
                        >

                            <div className={`${card.bgColor} rounded-full flex items-center justify-center`}>
                                {card.icon}
                            </div>

                            <div className='flex flex-col items-center gap-0.75'>
                                <h3 className="font-lato sm:text-[20px] lg:text-[22px] font-bold text-[#5e315e]">{card.title}</h3>
                                <p className="font-lato text-[14px] sm:text-[15px] lg:text-[16px] text-gray-600 m-0 text-center leading-[120%]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Cards Container */}
            {/* <div className="flex flex-col gap-8 sm:gap-10">
                <div className="flex flex-col sm:flex-row gap-5 lg:gap-6 w-full">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="
                    w-full sm:flex-1
                    px-5 sm:px-6 lg:px-8
                    py-8 sm:py-10 lg:py-12
                    flex flex-col items-center gap-4 sm:gap-5
                    border border-[#5E315E]/60
                    bg-[#F5E5F5]
                    rounded-[16px] sm:rounded-[20px]
                    transition-all duration-300
                    hover:-translate-y-1
                "
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center">
                                {React.cloneElement(card.icon, {
                                    className: "w-6 h-6 sm:w-7 sm:h-7 text-[#5e315e]",
                                })}
                            </div>

                            <div className="flex flex-col items-center gap-1 text-center">
                                <h3 className="font-lato font-bold text-[18px] sm:text-[20px] lg:text-[22px] text-[#5e315e]">
                                    {card.title}
                                </h3>

                                <p className="font-lato text-[14px] sm:text-[15px] lg:text-[16px] text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

        </section>
    );
};

export default AboutSecondSection;