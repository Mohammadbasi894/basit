"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { Tilt } from "react-tilt";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { motion } from "framer-motion";
import { styles } from "../styles";
export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};
const RecentProjects = () => {
  return (
    <>
      <motion.div variants={textVariant(10)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
    </>
  );
};

export default RecentProjects;
