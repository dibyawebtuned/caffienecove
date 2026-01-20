"use client"

import React from "react";
import { CircleQuestionMark } from "lucide-react";

const FaqComponent = () => {
    const faqs = [
        {
            question: "Do you offer takeaway and dine-in?",
            answer:
                "Yes, we offer both takeaway and dine-in options for your convenience.",
        },
        {
            question: "Do you have dairy-free or plant-based milk options?",
            answer:
                "Yes, we offer a selection of plant-based milk alternatives. Please ask our staff for available options.",
        },
        {
            question: "Are your coffee beans freshly brewed?",
            answer:
                "Absolutely. All our coffee is freshly brewed using premium, carefully selected beans.",
        },
        {
            question: "Do you accept card payments?",
            answer:
                "Yes, we accept all major cards and contactless payments.",
        },
    ];
    return (
        <section className="bg-[#FFF7FB]">
            <div className="relative h-[40vh] sm:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/Footer_3.jpg')" }}
                />

                {/* Overlay for opacity */}
                <div className="absolute inset-0 bg-[#3B1E3F]/80"></div>

                {/* Content */}
                <h2 className="mt-[70px] relative z-10 font-playfair font-playfair-semibold 
                text-3xl sm:text-4xl lg:text-[47px] 
                text-light text-center leading-tight px-4" data-aos="fade-up">
                    Frequently Asked <br /> Questions
                </h2>
            </div>


            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-[25px] sm:py-[50px] flex flex-col">
                {/* Heading */}
                <div className="">
                    {/* <h2 className="font-playfair font-playfair-semibold text-3xl sm:text-4xl lg:text-[47px] text-solid text-center leading-tight">
                    Frequently Asked <br /> Questions
                </h2> */}
                </div>

                {/* FAQ Card */}
                <div className="bg-[#5E315E] rounded-2xl px-5 sm:px-8 py-6 sm:py-8">
                    {faqs.map((item, index) => (
                        <div key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-anchor-placement="top-bottom">

                            {/* FAQ Row */}
                            <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 py-6">

                                {/* Question */}
                                <div className="flex items-start gap-2 lg:gap-3 lg:w-2/5 text-[#FFF6FF]">
                                    <CircleQuestionMark className="w-4 h-4 mt-1 shrink-0" />
                                    <p className="font-playfair font-playfair-semibold text-base sm:text-lg leading-snug">
                                        {item.question}
                                    </p>
                                </div>

                                {/* Answer */}
                                <div className="lg:w-3/5">
                                    <p className="text-[#FFF6FF] font-lato font-lato-regular text-sm sm:text-base leading-snug">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            {index !== faqs.length - 1 && (
                                <div className="border-t border-white/30" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FaqComponent
