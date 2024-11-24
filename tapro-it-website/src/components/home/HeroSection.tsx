import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative w-full h-[89vh] bg-[url('/assets/images/banner.jpeg')] bg-cover bg-center rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] pointer-events-none rounded-xl"></div>
            <div className="absolute inset-0 flex items-end justify-start z-10">
                <h1 className="ml-10 mb-10 flex flex-col gap-4 text-7xl text-white font-font1 shadow-md">
                   <span>Where Creativity</span>
                   <span> Meets Technology</span>
                </h1>
            </div>
        </div>
    );
};

export default HeroSection;
