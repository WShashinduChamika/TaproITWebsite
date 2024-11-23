import React from "react";
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="container pt-[50px] bg-[#1E1E1E] text-white">

        <div className="flex flex-wrap mx-[80px] text-sm uppercase tracking-wide px-[63.5px] space-x-[68px] h-[60px] border-b border-[#FFFFFF]">
          
            <a href="#" className="hover:underline b2 font-[24px]">
              Design
            </a>
            <a href="#" className="hover:underline  b2 font-[24px]">
              Development
            </a>
            <a href="#" className="hover:underline  b2 font-[24px]">
              Marketing
            </a>
            <a href="#" className="hover:underline  b2 font-[24px]">
              About Us
            </a>
            <a href="#" className="hover:underline  b2 font-[24px]">
              Contact Us
            </a>
            <a href="#" className="hover:underline  b2 font-[24px]">
              Blog
            </a>
            <a href="#" className="hover:underline  b2 font-[24px]">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline  b2 font-[24px]">
              Terms and Conditions
            </a>
          

        </div>

        {/* Bottom Section */}
        <div className="flex flex-row text-sm ml-[80px] mt-[40px]  h-[39px]">
          <div className="b2 font-[24px] leading-[28.64px] w-[360px]">Tapro IT 2024. ALL RIGHTS RESERVED</div>
          <div className="leading-[28.64px] ml-[310px] mr-[480px] w=[184px] b4 font-[36px]">Tapro IT</div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-lg mr-[80px] space-x-[40px]">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-400 transition"
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
              className="hover:text-gray-400 transition"
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
              className="hover:text-gray-400 transition"
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
              className="hover:text-gray-400 transition"
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
