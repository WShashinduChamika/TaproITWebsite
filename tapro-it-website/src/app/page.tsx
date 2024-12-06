"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import RecentProjects from "@/components/home/RecentProjects";
import HappyClientSection from "@/components/home/HappyClientSection";

const Home: FC = () => {
  const recentProjectsSectionRef = useRef<HTMLDivElement | null>(null);
  const [disableBodyScroll, setDisableBodyScroll] = useState(false);
  const [enableRecentProjectsScroll, setEnableRecentProjectsScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisableBodyScroll(true);
          setEnableRecentProjectsScroll(true);
        } else {
          setDisableBodyScroll(false);
          setEnableRecentProjectsScroll(false);
        }
      },
      { threshold: 0.9 }
    );

    if (recentProjectsSectionRef.current) {
      observer.observe(recentProjectsSectionRef.current);
    }

    return () => {
      if (recentProjectsSectionRef.current) {
        observer.unobserve(recentProjectsSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = disableBodyScroll ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [disableBodyScroll]);

  const handleProjectLastVisible = () => {
    setDisableBodyScroll(false);
    setEnableRecentProjectsScroll(false);
  };

  const handleProjectOneVisible = ()=>{
    setDisableBodyScroll(false);
    setEnableRecentProjectsScroll(false);
  }

  return (
    <div>
      <div className="w-full h-auto">
        <section>
          <HeroSection />
        </section>
        <section >
          <div className="my-20 pb-14 bg-TP-black flex flex-col items-center justify-start">
            <div className="my-12 flex flex-col items-center">
              <h3 className="text-lg text-TP-primary-text font-font2 ">How we helped others to success</h3>
              <h1 className="text-4xl text-TP-primary font-font1 font-normal">Recent Projects</h1>
            </div>
            <div className="w-full" ref={recentProjectsSectionRef}>
              <RecentProjects
                onProjectLastVisible={handleProjectLastVisible}
                enableScroll={enableRecentProjectsScroll}
                onProjectOneVisible={handleProjectOneVisible}
              />
            </div>
          </div>
        </section>
        <section>
          <HappyClientSection />
        </section>
      </div>
    </div>
  );
};

export default Home;