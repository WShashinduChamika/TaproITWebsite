"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import HeroSection from "@/components/home/HeroSection";

const Home: FC = () => {
  return (
    <div>
      <div className="h-auto">
        <section>
          <HeroSection />
        </section>
      </div>
    </div>
  );
};

export default Home;
