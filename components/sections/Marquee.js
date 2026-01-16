"use client";

import React from "react";
import FastMarquee from "react-fast-marquee";
import {
    Coffee,
    Cake,
    Home,
    Rose,
    Sparkle,
    TruckElectric,
    SunMedium,
} from "lucide-react";

const Marquee = () => {
    return (
        <div className="bg-[#FBC029] border-y border-[#5E315E] py-3 sm:py-4 overflow-hidden">
            <FastMarquee
                speed={35}
                gradient={false}
                pauseOnHover
            >
                <MarqueeItem icon={Coffee} text="Freshly Brewed Coffee" />
                <MarqueeItem icon={Cake} text="Handcrafted Desserts" />
                <MarqueeItem icon={Home} text="Cozy Ambience" />
                <MarqueeItem icon={Rose} text="Daily Specials" />
                <MarqueeItem icon={Sparkle} text="Event Hosting" />
                <MarqueeItem icon={TruckElectric} text="Fast Delivery" />
                <MarqueeItem icon={SunMedium} text="Bright and Airy" />
            </FastMarquee>
        </div>
    );
};

const MarqueeItem = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 px-4 sm:px-6">
        <Icon className="text-[#5E315E] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 shrink-0" />
        <span className="text-[#5E315E] font-lato font-lato-semibold text-sm sm:text-lg lg:text-2xl whitespace-nowrap">
            {text}
        </span>
    </div>
);

export default Marquee;
