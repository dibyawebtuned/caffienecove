import React from 'react';
import { ShieldCheck, Heart, Leaf } from 'lucide-react';

// 1. Define data with an 'icon' property
const cardData = [
    {
        id: 1,
        title: "Quality First",
        description: "We never compromise on flavor or freshness.",
        icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
        // bgColor: "bg-orange-100"
    },
    {
        id: 2,
        title: "Warm Hospitality",
        description: "Everyone is welcome here, no matter the reason or time.",
        icon: <Heart className="w-8 h-8 text-green-600" />,
        // bgColor: "bg-green-100"
    },
    {
        id: 3,
        title: "Sustainability",
        description: "Ethically sourced beans and eco-conscious choices.",
        icon: <Leaf className="w-8 h-8 text-blue-600" />,
        // bgColor: "bg-blue-100"
    },
];

const AboutSecondSection = () => {
    return (
        <section className="py-12 px-4">
            {/* Section Title */}
            <h2 className="font-playfair font-semibold text-[40px] text-solid text-center leading-tight mb-12">
                The Heart of <br /> Caffeine
            </h2>

            {/* Cards Container */}
            <div className="flex flex-col md:flex-row gap-[20px] w-full">
                {/* Dynamic Mapping */}
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="flex-1 px-5 py-10 flex flex-col items-center gap-[20px] border border-[#5E315E]/60 bg-[#F5E5F5] rounded-[20px] group"
                    >
                        {/* Icon Wrapper */}
                        <div className={`${card.bgColor} rounded-full flex items-center justify-center`}>
                            {card.icon}
                        </div>

                        <div className='flex flex-col items-center gap-[3px]'>
                            <h3 className="font-lato text-[22px] font-bold text-gray-800">{card.title}</h3>
                            <p className="font-lato text-[16px] text-gray-600 m-0 text-center leading-[120%]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default AboutSecondSection;