import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Quote } from 'lucide-react';

import Image_1 from "@/public/images/web 9.jpg"
import Image_2 from "@/public/images/Footer_2.jpg"
import Image_3 from "@/public/images/web 3.jpg"
const Testimonials = () => {
    return (
        <section className='bg-light'>
            <div className='max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-20 flex flex-col gap-[30px]'>
                <h2 className='font-playfair font-playfair-semibold text-3xl sm:text-4xl lg:text-[47px] text-solid text-center leading-tight'>
                    What People <br /> Love About Us
                </h2>

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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
