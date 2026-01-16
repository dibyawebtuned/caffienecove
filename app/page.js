"use client"
import Image from "next/image";

import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Testimonials />
      <Marquee />
      <Faq />
    </div>
  );
}