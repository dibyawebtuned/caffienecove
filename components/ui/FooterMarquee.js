"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import Img1 from "@/public/images/Footer_1.jpg";
import Img2 from "@/public/images/Footer_2.jpg";
import Img3 from "@/public/images/Footer_3.jpg";
import Img4 from "@/public/images/Footer_4.jpg";
import Img5 from "@/public/images/Footer_5.jpg";

const FooterMarquee = () => {
    const images = [
        { src: Img1, alt: "Dish 1" },
        { src: Img2, alt: "Dish 2" },
        { src: Img3, alt: "Dish 3" },
        { src: Img4, alt: "Dish 4" },
        { src: Img5, alt: "Dish 5" },
    ];

    return (
        <div className="bg-[#3F1F3F] py-4 sm:py-5 lg:py-6 overflow-hidden">
            <Marquee speed={50} gradient={false} pauseOnHover={false}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="
                        mx-2 sm:mx-3 lg:mx-4
                        flex-shrink-0
                        w-[140px] h-[140px]
                        xs:w-[180px] xs:h-[180px]
                        sm:w-[220px] sm:h-[220px]
                        md:w-[250px] md:h-[250px]
                        lg:w-[300px] lg:h-[300px]
                        xl:w-[340px] xl:h-[340px]
                        rounded-lg sm:rounded-xl
                        overflow-hidden
                        relative
                        "
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default FooterMarquee;
