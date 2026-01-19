"use client";
import React from "react";

const MenuComponent = () => {
  return (
    <section className="bg-[#FFF7FB]">
      {/* HERO */}
      <div className="relative h-[40vh] sm:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Footer_3.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#3B1E3F]/80"></div>

        <h2 className="mt-[70px] relative z-10 font-playfair font-semibold text-3xl sm:text-4xl lg:text-[47px] text-white text-center">
          Menu
        </h2>
      </div>

      {/* PDF SECTION */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* FOOD MENU */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-xl p-4">
            <h3 className="text-center font-playfair text-xl mb-4 text-[#3B1E3F]">
              Food Menu
            </h3>

            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <iframe
                src="/pdf/Food.pdf"
                className="w-full h-[70vh] sm:h-[80vh] border-0 rounded-2xl"
                title="Food Menu"
              />
            </div>
          </div>

          {/* DRINKS MENU */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-xl p-4">
            <h3 className="text-center font-playfair text-xl mb-4 text-[#3B1E3F]">
              Drinks Menu
            </h3>

            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <iframe
                src="/pdf/Drinks.pdf"
                className="w-full h-[70vh] sm:h-[80vh] border-0 rounded-2xl"
                title="Drinks Menu"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
