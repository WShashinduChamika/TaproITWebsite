import React from "react";
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="pt-[50px] bg-[#1E1E1E] text-white">

        <div className="flex flex-wrap mx-[80px] text-sm uppercase tracking-wide px-[63.5px] space-x-[68px] h-[60px] border-b border-[#FFFFFF]">
          
            <a href="#" className="b2 font-[24px]">
              Design
            </a>
            <a href="#" className="  b2 font-[24px]">
              Development
            </a>
            <a href="#" className=" b2 font-[24px]">
              Marketing
            </a>
            <a href="#" className="b2 font-[24px]">
              About Us
            </a>
            <a href="#" className=" b2 font-[24px]">
              Contact Us
            </a>
            <a href="#" className=" b2 font-[24px]">
              Blog
            </a>
            <a href="#" className=" b2 font-[24px]">
              Privacy Policy
            </a>
            <a href="#" className="b2 font-[24px]">
              Terms and Conditions
            </a>
        </div>


        <div className="flex flex-row text-sm mx-[80px] mt-[40px] mb-[54px] h-[80px] space-x-[370px]">
          <div className="font-sf-pro-display  font-[24px] leading-[28.64px]">Tapro IT 2024. ALL RIGHTS RESERVED</div>
          <div className="font-benzin-medium text-[36px] mb-[5px] font-[400] leading-[49.57px]">Tapro IT </div>

          <div className="flex text-lg space-x-[40px]">
            <a
              href="#"
              aria-label="Facebook"
              className=" transition"
            >
                  <Image 
                    src="/footer/fb.svg" 
                    alt="FB Image" 
                    width={20} 
                    height={20} 
                  />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition"
            >
                <Image 
                    src="/footer/instergram.svg" 
                    alt="Instergram Image" 
                    width={20} 
                    height={20} 
                />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition"
            >
                <Image 
                    src="/footer/linkdin.svg" 
                    alt="LINKDIN Image" 
                    width={20} 
                    height={20} 
                />
            </a>
            <a
              href="#"
              aria-label="Custom Icon"
              className="transition"
            >
                <Image 
                    src="/footer/X.svg" 
                    alt=" Image" 
                    width={20} 
                    height={20} 
                />
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;