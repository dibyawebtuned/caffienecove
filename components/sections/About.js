"use client";

import React from "react";
import Link from "next/link";
import FastMarquee from "react-fast-marquee";
import Image from "next/image";

import CoffeeImg from "@/public/images/web 4.jpg";
import DessertImg from "@/public/images/Footer_3.jpg";
import AmbienceImg from "@/public/images/Footer_1.jpg";
import IcedImg from "@/public/images/web 2.jpg";

const About = () => {
    // Partial dynamic setup
    // const marqueeItems = [
    //     { src: CoffeeImg, alt: "Freshly Brewed Coffee", width: 385, height: 266 },
    //     { src: DessertImg, alt: "Handcrafted Desserts", width: 385, height: 423 },
    //     { src: AmbienceImg, alt: "Cozy Ambience", width: 385, height: 266 },
    //     { src: IcedImg, alt: "Cozy Ambience", width: 385, height: 423 },
    // ];

    const marqueeItems = [
        { src: CoffeeImg, alt: "Freshly Brewed Coffee" },
        { src: DessertImg, alt: "Handcrafted Desserts" },
        { src: AmbienceImg, alt: "Cozy Ambience" },
        { src: IcedImg, alt: "Cozy Ambience" },
    ];

    return (
        <div className="bg-light flex flex-col gap-[40px]">
            <div className="max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 pt-[80px] flex">
                <div className="flex flex-col items-center gap-[30px]">
                    <div className="md:w-[50%] flex flex-col gap-[15px]">
                        <h2 className="font-playfair font-playfair-semibold text-3xl sm:text-4xl lg:text-[47px] text-solid text-center leading-tight">
                            A Cafe That Feels Like <br /> Home
                        </h2>

                        <p className="m-0 text-center p-text 
                        text-sm sm:text-base
                        font-lato font-lato-semibold leading-[140%]">
                            At Caffeine Cove, we believe in more than just coffee.
                            We craft each cup with care, pair it with fresh, locally
                            sourced ingredients, and serve it in a warm, inviting space.
                            Whether you’re stopping by for a morning espresso, brunch with
                            friends, or an afternoon treat, Caffeine Cove is your perfect getaway.
                        </p>
                    </div>

                    <div>
                        <Link href="about">
                            <button className="bg-[#FBC029] text-[#5E315E] 
                            text-sm sm:text-base
                            font-lato font-lato-semibold px-[20px] py-[10px] rounded-full transition cursor-pointer">
                                Know More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <div className="pb-[80px]">
                <FastMarquee speed={40} gradient={false} pauseOnHover={false}>
                    {marqueeItems.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`
                                    relative mx-[10px] md:mx-[15px] overflow-hidden rounded-[20px] flex-shrink-0
                                    /* Mobile Sizes */
                                    w-[200px] ${isEven ? 'h-[180px]' : 'h-[250px]'}
                                    /* Desktop Sizes (md and up) */
                                    md:w-[385px] ${isEven ? 'md:h-[266px]' : 'md:h-[423px]'}
                                `}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 200px, 385px"
                                    className="object-cover"
                                />
                            </div>
                        );
                    })}
                </FastMarquee>
            </div>
        </div>
    );
};

export default About;
