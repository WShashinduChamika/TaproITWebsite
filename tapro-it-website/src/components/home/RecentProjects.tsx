import React, { FC, useRef, useEffect, useState } from "react";
import TextAnimateBtn from "../utils/TextAnimateBtn";

interface RecentProjectsProps {
  onProjectLastVisible: () => void;
  enableScroll: boolean;
  onProjectOneVisible: () => void;
}

const RecentProjects: FC<RecentProjectsProps> = ({ onProjectOneVisible, enableScroll, onProjectLastVisible }) => {
  const projectOneRef = useRef<HTMLDivElement | null>(null);
  const projectLastRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollDown(currentScrollY > lastScrollY);
    setLastScrollY(currentScrollY);
  };

  const projects = [
    {
      img: "project1.png",
      title: "Skin Vision",
      description: " Skinvisions is a revolutionary mobile app that leverages AI to personalize skincare management. Our team designed a"
                    +"compelling brand identity, crafted an intuitive UX/UI for seamless user experiences, and developed the mobile app to"
                    +"bring this innovative idea to life.",
      btn: {
        href: "/",
        height: "2.5rem",
        width: "100%",
        bgClr: "transparent",
        hoverBgClr: "rgba(73, 149, 255, 1)",
        text1: "See How We Built It",
        text2: "Un Cover the Creative Process",
      }
    },
    {
      img: "project1.png",
      title: "Skin Vision",
      description: " Skinvisions is a revolutionary mobile app that leverages AI to personalize skincare management. Our team designed a"
                    +"compelling brand identity, crafted an intuitive UX/UI for seamless user experiences, and developed the mobile app to"
                    +"bring this innovative idea to life.",
      btn: {
        href: "/",
        height: "2.5rem",
        width: "100%",
        bgClr: "transparent",
        hoverBgClr: "rgba(73, 149, 255, 1)",
        text1: "See How We Built It",
        text2: "Un Cover the Creative Process",
      }
    },
    {
      img: "project1.png",
      title: "Skin Vision",
      description: " Skinvisions is a revolutionary mobile app that leverages AI to personalize skincare management. Our team designed a"
                    +"compelling brand identity, crafted an intuitive UX/UI for seamless user experiences, and developed the mobile app to"
                    +"bring this innovative idea to life.",
      btn: {
        href: "/",
        height: "2.5rem",
        width: "100%",
        bgClr: "transparent",
        hoverBgClr: "rgba(73, 149, 255, 1)",
        text1: "See How We Built It",
        text2: "Un Cover the Creative Process",
      }
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectOneRef.current && entry.isIntersecting && !isScrollDown) {
            onProjectOneVisible();
            console.log("Scrolled up to Project 1");
          }

          if (entry.target === projectLastRef.current && entry.isIntersecting && isScrollDown) {
            onProjectLastVisible();
            console.log("Scrolled down to Project 3");
          }
        });
      },
      { threshold: isScrollDown ? 0.85 : 0.85 }
    );

    if (projectOneRef.current) observer.observe(projectOneRef.current);
    if (projectLastRef.current) observer.observe(projectLastRef.current);

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (projectOneRef.current) observer.unobserve(projectOneRef.current);
      if (projectLastRef.current) observer.unobserve(projectLastRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollDown, lastScrollY]);

  return (
    <div
      className={`my-3 w-full max-h-[80vh] flex flex-col items-center ${enableScroll ? "overflow-y-auto" : "overflow-y-hidden"
        } hide-scrollbar`}
    >
      {
        projects.map((project, index) => {
          let currentProjecRef;
          if(index === 0){
            currentProjecRef = projectOneRef;
          }
          if(index === 2){
            currentProjecRef = projectLastRef;
          }
          return (
              <div key={index} ref={currentProjecRef} className="w-9/12 grid grid-cols-2 items-center gap-10 min-h-[90vh] bg-transparent">
                <div className="col-span-1">
                  <img
                    className="min-w-[90%] max-h-[75vh] rounded-lg"
                    src={`/assets/images/${project.img}`}
                  />
                </div>
                <div className="col-span-1 flex flex-col">
                  <h2 className="mb-5 text-xl text-TP-primary-text font-font1 font-normal">{project.title}</h2>
                  <p className="mb-5 text-md text-TP-secondary-text font-font2 font-normal">
                    {project.description}
                  </p>
                  <div className="mb-28 w-full grid grid-cols-7 gap-5">
                    <button className="col-span-2 px-2 py-1 text-md text-TP-secondary-text font-font-1 bg-transparent border-[1px] border-TP-secondary-text rounded-full">
                      Branding
                    </button>
                    <button className="col-span-2 px-2 py-1 text-md text-TP-secondary-text font-font-1 bg-transparent border-[1px] border-TP-secondary-text rounded-full">
                      UI & UX
                    </button>
                    <button className="col-span-3 px-2 py-1 text-md text-TP-secondary-text font-font-1 bg-transparent border-[1px] border-TP-secondary-text rounded-full">
                      Mobile App Development
                    </button>
                  </div>
                  <div className="mb-10 border-b-[1px] border-TP-secondary-text"></div>
                  <TextAnimateBtn btn={project.btn} />
                </div>
              </div>
          );
        })
      }
    </div>
  );
};

export default RecentProjects;
