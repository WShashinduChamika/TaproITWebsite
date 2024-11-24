import Link from 'next/link';
import React, { FC } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface BtnProps {
  btn: {
    href: string;
    height: string;
    width: string;
    bgClr: string;
    text1: string;
    text2: string;
  };
}

const TextAnimateBtn: FC<BtnProps> = ({ btn }) => {
  return (
    <Link href={btn.href}>
      <button
        className={`group flex items-center gap-2 text-lg text-TP-primary-text rounded-lg overflow-hidden relative`}
        style={{
          backgroundColor: btn.bgClr,
          width: btn.width,
          height: btn.height,
        }}
      >
        <div className="absolute inset-0 opacity-100 flex items-center justify-center gap-2 transition-all duration-1000 group-hover:opacity-0 group-hover:translate-y-[-50%]">
          <p className="whitespace-nowrap">{btn.text1}</p>
          <FaArrowRightLong className="text-sm " />
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-[50%] opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="whitespace-nowrap">{btn.text2}</p>
          <FaArrowRightLong className="text-sm" />
        </div>
      </button>
    </Link>
  );
};

export default TextAnimateBtn;
