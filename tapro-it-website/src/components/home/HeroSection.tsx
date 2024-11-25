import React, { FC } from 'react';

const HeroSection: FC = () => {
    return (
        <div className="relative mx-auto mb-10 w-[95vw] h-[89vh] rounded-lg overflow-hidden">
            <video 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                autoPlay
                loop
                muted
            >
                <source src="/assets/videos/b.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex items-end justify-start z-10">
                <h1 className="ml-10 mb-10 flex flex-col gap-4 text-7xl text-white font-font1 shadow-md">
                    <span>Where Creativity</span>
                    <span>Meets Technology</span>
                </h1>
            </div>
        </div>
    );
};

export default HeroSection;
