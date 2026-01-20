"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Demo images
import Menu_One from "@/public/images/org/menu_straw.png"
import Menu_Two from "@/public/images/org/Menu_Two.png"
import Menu_Three from "@/public/images/org/Menu_Three.png"
import Menu_Four from "@/public/images/org/Menu_Four.png"
import Menu_Five from "@/public/images/org/Menu_Five.png"
import Menu_Six from "@/public/images/org/Menu_Six.png"
import Menu_Seven from "@/public/images/org/Menu_Seven.png"
import Menu_Eight from "@/public/images/org/Menu_Eight.png"
import Menu_Nine from "@/public/images/org/Menu_Nine.png"
import Menu_Ten from "@/public/images/org/Menu_Ten.png"
import Menu_1 from "@/public/images/Menu_1.png";
import Menu_2 from "@/public/images/Menu_2.png";
import Menu_3 from "@/public/images/Menu_3.png";
import Menu_4 from "@/public/images/Menu_4.png";

const menuItems = [
  {
    image: Menu_Nine,
    title: "Morning Smash",
    description: "Perfectly smashed avocado on toasted sourdough, topped with fresh herbs and a zesty lemon finish.",
  },
  {
    image: Menu_Eight,
    title: "Spaghetti Gamberi",
    description: "Al dente spaghetti tossed with juicy prawns in a rich garlic, chilli, and olive oil sauce.",
  },
  {
    image: Menu_Seven,
    title: "Smoked Salmon Bagel",
    description: "Soft toasted bagel layered with silky smoked salmon, cream cheese, and fresh dill.",
  },
  {
    image: Menu_Six,
    title: "Healthy Salmon Bowl",
    description: "A nourishing bowl of grilled salmon, fresh greens, grains, and a light citrus dressing.",
  },
  {
    image: Menu_Five,
    title: "Coconut Yoghurt Bowl",
    description: "Creamy coconut yoghurt topped with seasonal fruits, crunchy granola, and a drizzle of honey.",
  },
  {
    image: Menu_Four,
    title: "Cove Benedict",
    description: "Classic eggs benedict with perfectly poached eggs, toasted muffin, and silky hollandaise sauce.",
  },
  {
    image: Menu_Three,
    title: "Cheesy Chilli Prawn Omelette",
    description: "Fluffy omelette packed with juicy prawns, melted cheese, and a gentle chilli kick.",
  },
  {
    image: Menu_Ten,
    title: "Strawberry Milkshake",
    description: "Thick and creamy milkshake blended with ripe strawberries for a refreshing sweet treat.",
  },
  {
    image: Menu_One,
    title: "Mango Matcha",
    description: "Smooth matcha layered with sweet mango for a vibrant, refreshing, and energising drink.",
  },
  {
    image: Menu_Two,
    title: "Bacon & Egg Roll",
    description: "Crispy bacon, fluffy eggs, and rich sauce served in a warm, freshly baked roll.",
  },
];


const Menu = () => {
    return (
        <section className="solid-bg py-12 md:py-20">
            {/* Custom CSS to style the Swiper Navigation Arrows 
               (Makes them white/purple instead of the default blue)
            */}
            <style jsx global>{`
                .swiper-button-prev, .swiper-button-next {
                    color: #fff6ff !important;
                    background: rgba(94, 49, 94, 0.5);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%; 
                    backdrop-filter: blur(4px);
                }
                .swiper-button-prev::after, .swiper-button-next::after {
                    font-size: 18px !important;
                    font-weight: bold;
                }
                /* Hide arrows on very small screens if they block content */
                @media (max-width: 480px) {
                    .swiper-button-prev, .swiper-button-next {
                        // display: none;
                    }
                }
            `}</style>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px]">
                {/* Heading: Responsive text sizing */}
                <h2 className="font-playfair font-playfair-semibold text-3xl sm:text-4xl lg:text-[47px] text-solid text-center !text-white mb-6 md:mb-12">
                    Our All-Day Menu of Food, Coffee <br className="hidden md:block" /> & Cafe Favourites
                </h2>

                {/* Menu Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={1}
                    // className="!pb-10"
                    breakpoints={{
                        // Mobile: 1 slide
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        // Tablet: 2 slides
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // Small Laptop: 3 slides (Prevent squashing)
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 25
                        },
                        // Large Desktop: 4 slides
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                    }}
                >
                    {menuItems.map((item, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            {/* Card: Added h-full to ensure equal height cards */}
                            <div className="h-full relative bg-[#fff6ff] rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300">

                                {/* Top-right decorative image */}
                                <div className="absolute -top-5 -right-0 w-[70px] h-[90px] pointer-events-none">
                                    <Image
                                        src="/images/Koffee.png"
                                        alt=""
                                        fill
                                        className="object-contain opacity-50 md:opacity-100"
                                    />
                                </div>

                                {/* Product Image */}
                                <div className="w-[80px] h-[70px] md:w-[100px] md:h-[89px] relative mb-4 z-10">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100px, 150px"
                                        className="object-contain"
                                    />
                                </div>

                                {/* Title & Price */}
                                <div className="flex justify-center w-full items-center mb-2 px-1 z-10">
                                    <h3 className="font-playfair font-semibold text-base md:text-lg text-[#5E315E]">
                                        {item.title}
                                    </h3>
                                    <span className="font-playfair font-semibold text-base md:text-lg text-[#5E315E]">
                                        {item.price}
                                    </span>
                                </div>

                                {/* Divider */}
                                <hr className="border-dotted border-[#5E315E]/50 w-full mb-3 z-10" />

                                {/* Description */}
                                <p className="text-[#5E315E]/90 font-lato font-normal text-sm leading-[140%] z-10">
                                    {item.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Menu;