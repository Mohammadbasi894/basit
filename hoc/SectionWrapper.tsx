import { motion, MotionProps } from "framer-motion";
import { ComponentType } from "react";

import { styles } from "../styles";
// import { fadeIn } from "../utils/motion"; // Adjust if 'staggerContainer' has specific types
// import {  } from "@/lib/motion";
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface StarWrapperProps {
  idName: string;
}

const StarWrapper = <P extends object>(
  Component: ComponentType<P>,
  idName: string
) =>
  function HOC(props: P & StarWrapperProps) {
    return (
      <motion.section
        variants={fadeIn} // Adjust if 'staggerContainer' has specific types
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        {...props} // Spread props to pass down to Component
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };

export default StarWrapper;
