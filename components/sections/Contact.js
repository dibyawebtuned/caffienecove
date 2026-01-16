"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


import CoffeeImg from "@/public/images/web 4.jpg";
import DessertImg from "@/public/images/Footer_3.jpg";
import AmbienceImg from "@/public/images/Footer_1.jpg";
import IcedImg from "@/public/images/web 2.jpg";

const ContactSection = () => {
    return (
        <div className="">
            <div className="w-full pb-[50px] overflow-hidden">
                {/* Contact Section Content */}
                <div className="flex flex-col gap-20 md:flex-row sm:gap-0">
                    <div className="relative flex-1">
                        <Image
                            src={CoffeeImg}
                            alt="Roofing"
                            className="rounded-[10px] w-[420px] h-[310px] object-cover shadow-lg"
                        />
                        <Image
                            src={DessertImg}
                            alt="Roofing"
                            className="rounded-[10px] w-[60%] h-[220px] object-cover shadow-lg absolute -bottom-12 right-0"
                        />
                    </div>

                    <div className="flex-1">
                        <form
                            className="flex flex-col gap-4 p-0 rounded-lg sm:p-6"
                        >
                            {/* Name + Email */}
                            <div className="flex flex-col md:flex-row gap-[20px]">
                                <div className="flex flex-col flex-1">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Full Name"
                                        className="text-[#582f58]! border border-[#582f58]/30 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#582f58]/40"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="text-[#582f58]! border border-[#582f58]/30 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#582f58]/40"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact + Subject */}
                            <div className="flex flex-col md:flex-row gap-[20px]">
                                <div className="flex flex-col flex-1">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="text-[#582f58]! border border-[#582f58]/30 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#582f58]/40"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        className="text-[#582f58]! border border-[#582f58]/30 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#582f58]/40"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    className="text-[#582f58]! border border-[#582f58]/30 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#582f58]/40"
                                    required
                                ></textarea>
                            </div>

                            {/* Button */}
                            <div>
                                <div className="inline-block">
                                    <button
                                        type="submit"
                                        className={`bg-[#582f58] text-light w-full md:w-auto text-[14px] inline-flex items-center justify-center px-3 py-2 rounded-[10px] font-medium cursor-pointer`}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
