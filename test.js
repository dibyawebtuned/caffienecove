"use client";

import React, { useRef, useState } from "react";
import Marquee from '@/components/sections/Marquee';
import { Play, Pause } from "lucide-react"; // Ensure lucide-react is installed

const AboutComponent = () => {
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
        <section className='bg-[#FFF7FB]'>
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
                    About Us
                </h2>
            </div>

            {/* Marquee */}
            <Marquee />

            <div className='max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] py-[25px] sm:py-[50px]'>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col gap-[70px] items-center justify-center w-full'>

                        <div className="md:w-[70%] flex flex-col gap-[15px]">
                            <h2 className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-[47px] text-[#5E315E] text-center leading-tight">
                                A Cafe That Feels Like <br /> Home
                            </h2>

                            <p className="m-0 text-center text-[#5E315E]/80 
                            text-sm sm:text-base
                            font-lato font-semibold leading-[140%]">
                                At Caffeine Cove, we believe in more than just coffee.
                                We craft each cup with care, pair it with fresh, locally
                                sourced ingredients, and serve it in a warm, inviting space.
                                Whether you’re stopping by for a morning espresso, brunch with
                                friends, or an afternoon treat, Caffeine Cove is your perfect getaway.
                            </p>

                            {/* --- Video Component --- */}
                            <div className="relative w-full mt-6 group rounded-[20px] overflow-hidden shadow-xl bg-black aspect-video">
                                <video
                                    ref={videoRef}
                                    onClick={togglePlay}
                                    className="w-full h-full object-cover cursor-pointer"
                                    // FIXED: Use string path, do not import
                                    src="/images/Hero_Video.mp4"
                                    playsInline
                                // Optional: Add a poster image so it's not black before loading
                                // poster="/images/web 4.jpg" 
                                />

                                {/* Custom Play/Pause Overlay */}
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
                            </div>
                            {/* ----------------------- */}
                        </div>

                        <div>
                            <h2 className="font-playfair font-semibold text-center text-[32px] sm:text-[40px] text-[#5E315E] leading-tight">
                                The Heart of <br /> Caffeine
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;