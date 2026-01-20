"use client";
import React, { useState } from "react";
import Image from "next/image";

import Food_menu from "@/public/images/Food_Menu.jpg";
import Drink_menu from "@/public/images/Drink_Menu.jpg";

const MenuComponent = () => {
  const [activeTab, setActiveTab] = useState("food");

  return (
    <section className="bg-[#FFF7FB] min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[40vh] sm:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Footer_3.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#3B1E3F]/80" />

        <h2 className="mt-[70px] relative z-10 font-playfair font-playfair-semibold
                text-3xl sm:text-4xl lg:text-[47px]
                text-white text-center leading-tight px-4" data-aos="fade-up">
          Menu
        </h2>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 pb-20">

        {/* TAB NAVIGATION */}
        <div className="flex justify-center mb-10" data-aos="fade-up"
          data-aos-delay="200">
          <div className="inline-flex bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-white/50">
            <button
              onClick={() => setActiveTab("drinks")}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === "drinks"
                ? "bg-[#3B1E3F] text-white shadow-lg"
                : "text-[#3B1E3F] hover:bg-white/50"
                }`}
            >
              Drinks & Spirits
            </button>
            <button
              onClick={() => setActiveTab("food")}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === "food"
                ? "bg-[#3B1E3F] text-white shadow-lg"
                : "text-[#3B1E3F] hover:bg-white/50"
                }`}
            >
              Food Selection
            </button>
          </div>
        </div>

        {/* MENU DISPLAY AREA */}
        <div className="max-w-5xl mx-auto"
          data-aos="zoom-in-up"
          data-aos-delay="400"
          data-aos-duration="800">
          <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden">

            {/* Food Menu Item */}
            <div
              className={`transition-all duration-500 ease-in-out ${activeTab === "food"
                ? "opacity-100 translate-y-0 relative"
                : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
            >
              <div className="p-4 sm:p-8">
                <Image
                  src={Food_menu}
                  alt="Food Menu"
                  className="w-full h-auto rounded-3xl"
                  priority
                />
              </div>
            </div>

            {/* Drinks Menu Item */}
            <div
              className={`transition-all duration-500 ease-in-out ${activeTab === "drinks"
                ? "opacity-100 translate-y-0 relative"
                : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
            >
              <div className="p-4 sm:p-8">
                <Image
                  src={Drink_menu}
                  alt="Drinks Menu"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;