"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo_Image from "@/public/images/Logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-3 sm:top-5 lg:top-6 left-0 right-0 z-[9999] flex justify-center px-2 sm:px-3 lg:px-4">
      <div className="font-lato-regular flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-2.5 rounded-full bg-[#3B1E3F]/90 text-[#FBC029] backdrop-blur-md shadow-lg w-full max-w-[98%] sm:max-w-[95%] lg:max-w-fit">

        {/* Left Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="menu" className="nav-link">Menu</Link>
          <Link href="about" className="nav-link">About</Link>
          <Link href="gallery" className="nav-link">Gallery</Link>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
            <Image src={Logo_Image} alt="Caffeine Cove Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Right Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="faq" className="nav-link">FAQ</Link>
          <Link href="review" className="nav-link">Review</Link>
          <Link href="contact" className="nav-link">Contact</Link>
        </div>

        {/* Hamburger (Mobile + Small Tablet) */}
        <button
          className="md:hidden text-[#FBC029]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full mt-3 w-[90%] max-w-sm bg-[#3B1E3F]/95 backdrop-blur-md rounded-2xl shadow-xl py-6 flex flex-col items-center gap-5 md:hidden">
          <Link href="menu" className="nav-link" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
          <Link href="gallery" className="nav-link" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="faq" className="nav-link" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="review" className="nav-link" onClick={() => setOpen(false)}>Review</Link>
          <Link href="contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}














// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import Logo_Image from "@/public/images/Logo.png";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-6 left-0 right-0 z-[9999] flex justify-center">
//       <div className="font-lato-regular flex items-center justify-between gap-10 px-10 py-2 rounded-full bg-[#3B1E3F]/90 text-[#FBC029] backdrop-blur-md shadow-lg">

//         <div className="flex items-center gap-8">
//           <Link href="#menu" className="nav-link">Menu</Link>
//           <Link href="#about" className="nav-link">About</Link>
//           <Link href="#gallery" className="nav-link">Gallery</Link>
//         </div>

//         <div className="flex items-center justify-center">
//           <div className="w-12 h-12 rounded-full flex items-center justify-center">
//             <Image src={Logo_Image} alt="Caffeine Cove Logo" width={50} height={50} />
//           </div>
//         </div>

//         <div className="flex items-center gap-8">
//           <Link href="#faq" className="nav-link">FAQ</Link>
//           <Link href="#review" className="nav-link">Review</Link>
//           <Link href="#contact" className="nav-link">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
