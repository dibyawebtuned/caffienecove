import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Footer_Logo from "@/public/images/Footer_Logo.png";
import { PhoneCall, Mail, Clock7, MapPin } from "lucide-react";
import { Instagram } from "lucide-react"
import { FaFacebookF } from "react-icons/fa"

import FooterMarquee from '../ui/FooterMarquee';

const Footer = () => {
  return (
    <section className='footer-bg text-light'>
      <div className='max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 pt-[80px] flex flex-col lg:flex-row flex-wrap gap-y-12'>
        {/* Logo Info */}
        <div className='flex-2 flex flex-col gap-[32px]'>
          {/* Footer Logo */}
          <div className='w-[85px] h-[114px] relative'>
            <Image
              src={Footer_Logo}
              alt="Caffeine Cove Footer Logo"
              fill
              className="object-contain"
            />
          </div>
          {/* Info Links */}
          <ul className='flex flex-col gap-[10px]'>
            <li className='flex items-center gap-2'>
              <PhoneCall size={16} />
              <Link href="tel:0422514520" className='text-[16px] font-lato font-lato-semibold'>0243989090</Link>
            </li>
            <li className='flex items-center gap-2'>
              <Mail size={16} />
              <Link href="tel:0422514520" className='text-[16px] font-lato font-lato-semibold'>info.caffeinecove@gmail.com</Link>
            </li>
            <li className='flex items-center gap-2'>
              <Clock7 size={16} />
              <Link href="tel:0422514520" className='text-[16px] font-lato font-lato-semibold'>7:30am - 5pm (Everyday)</Link>
            </li>
            <li className='flex items-center gap-2'>
              <MapPin size={16} />
              <Link href="tel:0422514520" className='text-[16px] font-lato font-lato-semibold'>Australia</Link>
            </li>
          </ul>
        </div>

        {/* Main Menu */}
        <div className='flex-1 flex flex-col gap-[20px]'>
          <div>
            <span className='font-lato font-lato-semibold text-[21px]'>Main</span>
          </div>
          <ul className='flex flex-col gap-[11px]'>
            <li>
              <Link href="" className='font-playfair font-playfair-semibold'>About us</Link>
            </li>
            <li>
              <Link href="" className='font-playfair font-playfair-semibold'>Menu</Link>
            </li>
            <li>
              <Link href="" className='font-playfair font-playfair-semibold'>Reviews</Link>
            </li>
            <li>
              <Link href="" className='font-playfair font-playfair-semibold'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className='flex-1 flex flex-col gap-[20px]'>
          <div>
            <span className='font-lato font-lato-semibold text-[21px]'>Categories</span>
          </div>
          <ul className='flex flex-col gap-[11px]'>
            <li>
              <Link href="" className='font-playfair font-playfair-semibold'>House Brew</Link>
            </li>
            <li>
              <Link href="" className='font-playfair font-playfair-semibold'>Drinks</Link>
            </li>
            <li>
              <Link href="" className='font-playfair font-playfair-semibold'>Breakfast</Link>
            </li>
            <li>
              <Link href="" className='font-playfair font-playfair-semibold'>Desserts</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className='flex-1 flex flex-col gap-[20px]'>
          <div>
            <span className='font-lato font-lato-semibold text-[21px]'>Social Links</span>
          </div>

          <ul className='flex flex-row gap-[15px]'>
            <li className="border border-[#FFF6FF] p-2.5 rounded-full transition-all duration-300 hover:bg-[#FFF6FF] hover:scale-110 group">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-[#FFF6FF]"
              >
                <FaFacebookF className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />
              </Link>
            </li>

            <li className="border border-[#FFF6FF] p-2.5 rounded-full transition-all duration-300 hover:bg-[#FFF6FF] hover:scale-110 group">
              <Link href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-[#FFF6FF]"
              >
                <Instagram className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='flex-1 flex flex-col gap-[20px] '>
          <div>
            <span className='font-lato font-lato-semibold text-[21px]'>Newsletter</span>
          </div>

          {/* Newsletter Form */}
          <form className="flex w-full max-w-full rounded-full overflow-hidden border border-[#FFF6FF]">
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="flex-1 bg-[#FFF6FF] px-5 py-3 text-[14px] text-[#171716] placeholder-[#9B9B9B] focus:outline-none font-inter"
            />

            <button
              type="submit"
              className="bg-[#3F1F3F] px-6 py-3 text-[14px] text-[#FFF6FF] font-inter font-medium hover:bg-[#5E315E] transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <FooterMarquee />

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-center items-center pb-5 px-4 sm:px-0">
        {/* Copyright */}
        <p className="font-lato font-lato-semibold text-[13px] sm:text-[15px] text-[#FFF6FF] inter font-medium text-center sm:text-left">
          &copy; {new Date().getFullYear()} Caffeine Cove. All rights reserved. {" "}
          <span className="font-lato font-lato-semibold text-[13px] sm:text-[15px] text-[#FFF6FF] inter font-medium text-center sm:text-left">
            Designed By{" "}
            <Link
              href="https://murphystechnology.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-lato font-lato-semibold text-[#E4BAE4] transition-colors duration-300 ease-in-out"
            >
              Murphy’s Technology
            </Link>
          </span>
        </p>
      </div>

    </section>
  )
}

export default Footer
