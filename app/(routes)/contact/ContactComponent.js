"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import { Phone, Mail, Megaphone, Instagram, ArrowUpRight } from "lucide-react"
import { FaFacebookF } from "react-icons/fa"

import ContactSection from "@/components/sections/Contact";

import CoffeeImg from "@/public/images/web 4.jpg";
import DessertImg from "@/public/images/Footer_3.jpg";
import AmbienceImg from "@/public/images/Footer_1.jpg";
import IcedImg from "@/public/images/web 2.jpg";

const ContactComponent = () => {
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
                <h2
                    className="mt-[70px] relative z-10 font-playfair font-playfair-semibold 
                    text-3xl sm:text-4xl lg:text-[47px] 
                    text-light text-center leading-tight px-4" data-aos="fade-up">
                    Contact Us
                    {/* <br /> Questions */}
                </h2>
            </div>

            <div className='max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] py-[25px] sm:py-[50px]'>
                <div className='flex flex-col gap-[20px] sm:gap-[30px]'>
                    {/* Contact Informations */}
                    <div className="flex flex-col gap-7 sm:gap-0 md:flex-row justify-center items-start md:items-stretch">
                        {/* Call Us */}
                        <div className="flex-1 flex flex-col gap-3 sm:gap-7 sm:items-center text-center p-1 sm:p-6 sm:border-r sm:border-[#505050]" data-aos="fade-up" data-aos-delay="100">
                            <div className='bg-[#5e315e] w-15 h-15 rounded-full flex items-center justify-center'>
                                <Phone className="text-light w-6 h-6" />
                            </div>

                            <div className='flex flex-col sm:items-center '>
                                <h3 className="text-[#5e315e] text-xl poppins font-semibold mb-1 text-start sm:text-center font-playfair font-playfair-semibold">CALL US</h3>
                                <p className="font-lato font-lato-regular text-[#5e315e]/80 mb-1 text-sm leading-5 text-start sm:text-center">
                                    Our team is ready to answer your questions and assist you with any inquiries. Reach out now.
                                </p>
                                <div className='flex'>
                                    <Link href="tel:0243989090" className="text-[#5e315e] flex text-start sm:text-center font-lato font-lato-bold">0243989090</Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="flex-1 flex flex-col gap-3 sm:gap-7 sm:items-center text-center p-1 sm:p-6 sm:border-r sm:border-[#505050]" data-aos="fade-up" data-aos-delay="150">
                            <div className='bg-[#5e315e] w-15 h-15 rounded-full flex items-center justify-center'>
                                <Mail className="text-light w-6 h-6" />
                            </div>

                            <div className='flex flex-col sm:items-center'>
                                <h3 className="text-[#5e315e] text-xl poppins font-semibold mb-1 text-start sm:text-center font-playfair font-playfair-semibold">CONTACT US</h3>
                                <p className="font-lato font-lato-regular text-[#5e315e]/80 mb-1 text-sm leading-5 text-start sm:text-center">
                                    Need more information? Reach out to us via email, and our team will get back to you as soon as possible.
                                </p>
                                <div className='flex'>
                                    <Link href="mailto:info.caffeinecove@gmail.com" className="text-[#5e315e] flex text-start sm:text-center font-lato font-lato-bold">info.caffeinecove@gmail.com</Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex-1 flex flex-col gap-3 sm:gap-7 sm:items-center text-center p-1 sm:p-6" data-aos="fade-up" data-aos-delay="150">
                            <div className='bg-[#5e315e] w-15 h-15 rounded-full flex items-center justify-center'>
                                <Megaphone className="text-light w-6 h-6" />
                            </div>

                            <div className='flex flex-col sm:items-center'>
                                <h3 className="text-[#5e315e] text-xl poppins font-semibold mb-1 text-start sm:text-center font-playfair font-playfair-semibold">
                                    FOLLOW US
                                </h3>

                                <p className="font-lato font-lato-regular text-[#5e315e]/80 mb-1 text-sm leading-5 text-start sm:text-center">
                                    Stay updated by following us on social media.
                                </p>

                                <div className="">
                                    <ul className='flex gap-4 text-start sm:text-center mt-2'>
                                        <li className="border border-[#5e315e] p-2.5 rounded-full transition-all duration-300 hover:bg-[#5e315e] hover:scale-110 group">
                                            <Link
                                                href="https://www.facebook.com/share/1EgdGQEyB6/?mibextid=wwXIfr"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center text-[#5e315e]"
                                            >
                                                <FaFacebookF className="w-5 h-5 transition-colors duration-300 group-hover:text-[#fff6ff]" />
                                            </Link>
                                        </li>

                                        <li className="border border-[#5e315e] p-2.5 rounded-full transition-all duration-300 hover:bg-[#5e315e] hover:scale-110 group">
                                            <Link href="https://www.instagram.com/caffeine_cove.au?igsh=ZmRxbndtNXQxdGV6&utm_source=qr"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center text-[#5e315e]"
                                            >
                                                <Instagram className="w-5 h-5 transition-colors duration-300 group-hover:text-[#fff6ff]" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <ContactSection />

                    {/* Map */}
                    <div
                        className="w-full h-96 rounded-4xl overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <iframe
                            src="https://www.google.com/maps?q=Shop+9+495+Pacific+Highway+Wyoming+NSW+2250+Australia&output=embed"
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>


                </div>
            </div>

        </section>
    )
}

export default ContactComponent