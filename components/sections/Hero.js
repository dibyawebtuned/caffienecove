import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-[90vh] overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/images/Hero_Video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Color Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#360036]/40"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-[1200px] flex flex-col items-center text-center">

                    {/* Text Wrapper */}
                    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mt-20">
                        <h1 className="font-playfair leading-[115%] text-light font-bold 
                            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] mb-4"
                            data-aos="fade-up">
                            Your Daily Escape, One Sip at a Time
                        </h1>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="font-lato text-[#E1E1E1]
                            text-base sm:text-lg md:text-[20px] lg:text-[21px]
                            mb-6"
                        >
                            Caffeine Cove is your neighbourhood escape for exceptional coffee, beautifully crafted meals, and indulgent desserts — served in a warm, relaxed space where every visit feels special.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-row items-center justify-center gap-3 sm:gap-5">
                            <Link href="menu">
                                <button className="bg-[#FBC029] text-[#5E315E]
                                    text-[15px] text-sm sm:text-base font-lato font-lato-semibold
                                    px-6 py-3 rounded-full transition w-full sm:w-auto cursor-pointer">
                                    View Menu
                                </button>
                            </Link>

                            <Link href="about">
                                <button className="border-[1.5px] border-[#FBC029] text-[#FBC029]
                                    text-sm sm:text-base font-lato font-lato-semibold
                                    px-6 py-3 rounded-full hover:bg-[#FBC029]/10
                                    w-full sm:w-auto cursor-pointer">
                                    Know More
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;









// import React from 'react';
// import Link from 'next/link';

// const Hero = () => {
//     return (
//         <div className="relative w-full h-[90vh] overflow-hidden">
//             <video
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 src="/images/Hero_Video.mp4"
//                 autoPlay
//                 loop
//                 muted
//             />

//             <div className="absolute top-0 left-0 w-full h-full bg-[#360036]/40"></div>

//             <div className="relative z-10 max-w-360 mx-auto flex flex-col items-center justify-center h-full text-center px-4">
//                 <div className='w-[60%] flex flex-col items-center justify-center'>
//                     <h1 className="font-playfair leading-[120%] text-light text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
//                         Your Daily Escape, One Sip at a Time
//                     </h1>
//                     <p className="font-lato text-[#E1E1E1] text-lg sm:text-xl md:text-[21px] mb-6 w-full">
//                         Caffeine Cove – a cozy café in Australia serving artisanal coffee, fresh pastries, and a welcoming atmosphere.
//                     </p>

//                     <div className='flex flex-row gap-[20px]'>
//                         <button className="bg-[#FBC029] text-[#5E315E] text-[16px] font-lato font-lato-semibold px-[20px] py-[10px] rounded-full transition">
//                             <Link href="">
//                                 View Menu
//                             </Link>
//                         </button>
//                         <button className="border-[1.5px] border-[#FBC029] text-[#FBC029] text-[16px] font-lato font-lato-semibold px-[20px] py-[10px] rounded-full">
//                             <Link href="">
//                                 Reservation
//                             </Link>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;
