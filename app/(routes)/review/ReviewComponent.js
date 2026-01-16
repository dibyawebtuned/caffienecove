"use client"
import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";


import Image_1 from "@/public/images/web 9.jpg"
import Image_2 from "@/public/images/Footer_2.jpg"
import Image_3 from "@/public/images/web 3.jpg"


const ReviewComponent = () => {
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
                text-light text-center leading-tight px-4">
                    Reviews
                    {/* <br /> Questions */}
                </h2>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] py-[25px] sm:py-[50px]">
                <div className='flex flex-col lg:flex-row gap-[20px]'>
                    {/* First */}
                    <div className='flex-1 flex flex-col gap-[20px]'>
                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px]'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    Caffeine Cove has become my go-to cafe. The coffee is consistently excellent,
                                    the atmosphere is calm and welcoming, and the staff always make you feel at home.
                                    Highly recommended!
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>James R</span>
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
                                    Caffeine Cove has become my go-to cafe. The coffee is consistently excellent,
                                    the atmosphere is calm and welcoming, and the staff always make you feel at home.
                                    Highly recommended!
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>James R</span>
                            </div>
                        </div>

                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative'>
                            <Image
                                src={Image_1}
                                fill
                                alt=""
                                className='object-cover' />
                        </div>
                    </div>

                    {/* Second */}
                    <div className='flex-1 flex flex-col gap-[20px]'>
                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative order-2 lg:order-1'>
                            <Image
                                src={Image_2}
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
                                    You can really tell they care about what they serve here. Every cup is made with attention to detail, and the service is friendly and professional. Easily one of the best cafés around.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Daniel K.</span>
                            </div>
                        </div>

                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative order-2 lg:order-3'>
                            <Image
                                src={Image_2}
                                fill
                                alt=""
                                className='object-cover' />
                        </div>

                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px] order-1 lg:order-4'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    You can really tell they care about what they serve here. Every cup is made with attention to detail, and the service is friendly and professional. Easily one of the best cafés around.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Daniel K.</span>
                            </div>
                        </div>
                    </div>

                    {/* Third */}
                    <div className='flex-1 flex flex-col gap-[20px]'>
                        <div className='bg-[#F5E5F5] border border-[#5E315E] rounded-[20px] px-[15px] sm:px-[20px] py-[26px] sm:py-[47px] flex flex-col gap-[15px] sm:gap-[20px]'>
                            <div>
                                <Quote fill="currentColor" className='scale-x-[-1] scale-y-[-1] text-[#5E315E]' />
                            </div>
                            <div className='flex flex-col gap-[10px] sm:gap-[15px]'>
                                <p className='m-0 font-playfair font-lato-semibold text-solid text-[14px] sm:text-[16px] leading-[120%]'>
                                    I love the modern yet cozy feel of this place. Their coffee is smooth and well-balanced,
                                    and the food is always fresh. Perfect for catching up with friends or getting some work done.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Emily T.</span>
                            </div>
                        </div>

                        <div className='h-[300px] sm:h-[406px] rounded-[20px] overflow-hidden relative'>
                            <Image
                                src={Image_3}
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
                                    I love the modern yet cozy feel of this place. Their coffee is smooth and well-balanced,
                                    and the food is always fresh. Perfect for catching up with friends or getting some work done.
                                </p>

                                <span className='font-lato font-lato-regular text-[12px] sm:text-[14px] text-solid leading-[120%]'>Emily T.</span>
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
