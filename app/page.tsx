"use client";

import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Topside from "@/components/Topside";
import Skills from "@/components/skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import GridGlobe from "@/components/ui/GridGlobe";
import { navItems } from "@/data";
import icop from "../public/cloud.svg";
import About from "@/components/About";
import Ab from "@/components/Ab";
import { FaCode, FaMobileAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";
import { IoGameController, IoGameControllerSharp } from "react-icons/io5";
import { FaFantasyFlightGames } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import ServicesCard from "@/components/ServicesCard";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building responsive and high-performance websites.",
    colory: "orange",
  },
  {
    icon: <FaDatabase />,
    title: "Data-Base",
    description: "Creating Data-bases for any source",
    colory: "green",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    description: "Creating mobile applications for both iOS and Android.",
    colory: "#152783",
  },
  {
    icon: <IoGameController />,
    title: "Game Devolopment",
    description: "Building beutifull and simple games for iOS and Android.",
    colory: "purple",
  },
];

const Home = () => {
  return (
    <main className="relative bg-[#1e1f1c] flex justify-center items-center flex-col overflow-hidden mx-auto db">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Topside />

        <div className="flex w-full justify-center">
          <Grid />
        </div>

        <div
          style={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skills />
        </div>
        <section id="about" className="mt-[50px] hen text-[#cacaca]">
          <div className="mx-[30px] text-center text-[#b1afaf]">
            <h2 className="over-t text-[40px]">Overview</h2>
            <p className="text-[20px] ov-p-t">
              I'm a skilled software developer with experience websites
              devolopment, application devolopment, data-base building, data
              analysing and game devolopment working with defferent frame-works;
              I'm a quick learner and collaborate closely with clients to create
              efficient, scalable, and user-friendly solutions that solve
              real-world problems. Let's work together to bring your ideas to
              life!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[15px] tart-holder">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
                colory={service.colory}
              />
            ))}
          </div>
        </section>
        <section id="projects">
          <RecentProjects />
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
