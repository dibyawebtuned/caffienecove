import React from "react";
import { CircleQuestionMark } from "lucide-react";

const Faq = () => {
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
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col gap-10">

                {/* Heading */}
                <h2 className="font-playfair font-playfair-semibold text-3xl sm:text-4xl lg:text-[47px] text-solid text-center leading-tight">
                    Frequently Asked <br /> Questions
                </h2>

                {/* FAQ Card */}
                <div className="bg-[#F5E5F5] border border-[#5E315E] rounded-2xl px-5 sm:px-8 py-6 sm:py-8">
                    {faqs.map((item, index) => (
                        <div key={index}>

                            {/* FAQ Row */}
                            <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 py-6">

                                {/* Question */}
                                <div className="flex items-center gap-2 lg:gap-3 lg:w-2/5 text-[#5E315E]">
                                    <CircleQuestionMark className="w-4 h-4 mt-1 shrink-0" />
                                    <p className="font-playfair font-playfair-semibold text-base sm:text-lg leading-snug">
                                        {item.question}
                                    </p>
                                </div>

                                {/* Answer */}
                                <div className="lg:w-3/5">
                                    <p className="text-[#5E315E] font-lato font-lato-regular text-sm sm:text-base leading-snug">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            {index !== faqs.length - 1 && (
                                <div className="border-t border-[#5E315E]/30" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
