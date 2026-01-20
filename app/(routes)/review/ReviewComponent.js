"use client"
import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";


import Image_1 from "@/public/images/web 9.jpg"
import Image_2 from "@/public/images/Footer_2.jpg"
import Image_3 from "@/public/images/web 3.jpg"
import Image_4 from "@/public/images/org/D_1.jpg"
import Image_5 from "@/public/images/org/BK_1.jpg"
import Image_6 from "@/public/images/org/BK_2.jpg"


const ReviewComponent = () => {
    return (
        <section className="bg-[#FFF7FB]">
            <div className="relative h-[40vh] sm:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center" w
                    style={{ backgroundImage: "url('/images/Footer_3.jpg')" }}
                />

                {/* Overlay for opacity */}
                <div className="absolute inset-0 bg-[#3B1E3F]/80"></div>

                {/* Content */}
                <h2 className="mt-[70px] relative z-10 font-playfair font-playfair-semibold 
                text-3xl sm:text-4xl lg:text-[47px] 
                text-light text-center leading-tight px-4" data-aos="fade-up">
                    Reviews
                    {/* <br /> Questions */}
                </h2>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] py-[25px] sm:py-[50px]">
                <div className='flex flex-col lg:flex-row gap-[20px]'>
                    {/* First */}
                    <div className='flex-1 flex flex-col gap-[20px]' data-aos="fade-up" data-aos-delay="100">
                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px]'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    The coffee here is genuinely impressive. You can taste the quality in every sip, and the atmosphere makes it easy to relax or focus. It’s become part of my daily routine.
                                    Highly recommended!
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Alex M.</span>
                            </div>
                        </div>

                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative'>
                            <Image
                                src={Image_1}
                                fill
                                alt=""
                                className='object-cover' />
                        </div>

                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px]'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    From the moment you walk in, the vibe is warm and inviting. The baristas know their craft, and the service always comes with a smile. A great spot to unwind.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Sophia L.</span>
                            </div>
                        </div>

                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative'>
                            <Image
                                src={Image_4}
                                fill
                                alt=""
                                className='object-cover' />
                        </div>
                    </div>

                    {/* Second */}
                    <div className='flex-1 flex flex-col gap-[20px]' data-aos="fade-up" data-aos-delay="300">
                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative order-2 lg:order-1'>
                            <Image
                                src={Image_6}
                                fill
                                alt=""
                                className='object-cover' />
                        </div>

                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px] order-1 lg:order-2'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    This café strikes the perfect balance between modern and cozy. The seating is comfortable, the music is just right, and the coffee never disappoints.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Ryan P.</span>
                            </div>
                        </div>

                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative order-4 lg:order-3'>
                            <Image
                                src={Image_2}
                                fill
                                alt=""
                                className='object-cover' />
                        </div>

                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px] order-3 lg:order-4'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    I stopped by once out of curiosity and now I’m a regular. Their attention to detail—from presentation to taste—is top-notch. Highly recommended.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Daniel K.</span>
                            </div>
                        </div>
                    </div>

                    {/* Third */}
                    <div className='flex-1 flex flex-col gap-[20px]' data-aos="fade-up" data-aos-delay="500">
                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px]'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    An excellent place to work or catch up with friends. The coffee is smooth, the food is fresh, and the ambience makes you want to stay longer.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Michael D.</span>
                            </div>
                        </div>

                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative'>
                            <Image
                                src={Image_5}
                                fill
                                alt=""
                                className='object-cover' />
                        </div>

                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px]'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    You can feel the passion behind everything they serve. Every visit feels consistent, comfortable, and thoughtfully curated.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Laura K.</span>
                            </div>
                        </div>

                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative'>
                            <Image
                                src={Image_3}
                                fill
                                alt=""
                                className='object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewComponent
