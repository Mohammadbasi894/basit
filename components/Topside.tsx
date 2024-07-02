import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundGtAnimation } from "./ui/GradientBg";
import Image from "next/image";
// import dol from "../../../1717842327537.jpg";
import myself from "../public/me.png";

const Hero = () => {
  return (
    <div>
      {/* <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}

      {/* <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
    
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div> */}

      <div className="flex h-screen topside-o">
        <div className="w-[40%] h-[100%] topside-seco">
          <div className="w-[100%] rounded-br-[100%] h-[546px] bg-main the-main-top overflow-hidden">
            <BackgroundGtAnimation></BackgroundGtAnimation>
            {/* <div className="w-[100%] h-[100%] mt-[-100%] bg-basit"></div> */}
          </div>
        </div>
        <div>
          <div className="flex justify-center relative my-10 z-10 sep-top">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 fade-in mo-he-text">
                Welcome to Clasic future
              </p>

              <TextGenerateEffect
                words="Level up your comunity with Seamless User Interface"
                className="text-center text-[40px] md:text-5xl lg:text-6xl mo-to-text"
              />

              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl fade-in name-top">
                Hi! I&apos;m Mohammad Basit Yousoufi
              </p>
              <a
                href="mailto:mohammadbasityousoufi@gmail.com"
                className="a fade-in mon"
              >
                <span className="span1 span"></span>
                <span className="span2 span"></span>
                <span className="span3 span"></span>
                <span className="span4 span"></span>Discover me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[200px] flex justify-center lon">
          <a
            href="mailto:mohammadbasityousoufi@gmail.com"
            className="a fade-in !hidden lon !mt-[0px]"
          >
            <span className="span1 span"></span>
            <span className="span2 span"></span>
            <span className="span3 span"></span>
            <span className="span4 span"></span>Discover me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
