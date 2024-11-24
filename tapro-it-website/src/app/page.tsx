import React, { FC } from 'react'
import HeroSection from "@/components/home/HeroSection";

const Home: FC = () => {
  return (
    <div>
      <div className="w-full h-auto">
        <section>
          <HeroSection />
        </section>
      </div>
    </div>
  )
}

export default Home
