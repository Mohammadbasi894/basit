// components/ServicesCard.tsx

import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import { color, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = styled.div`
  background: #263011;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 300px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #cbcbcb;
`;

interface ServicesCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  colory: string;
}

const textVariant = (delay: number = 0) => ({
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

const fadeIn = (
  direction: "left" | "right" | "up" | "down" = "left",
  type: "spring" | "tween" = "spring",
  delay: number = 0,
  duration: number = 0.75
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const ServicesCard: React.FC<ServicesCardProps> = ({
  icon,
  title,
  description,
  index,
  colory,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        scale={1.05}
        className="cursor-pointer bg-tertiary rounded-[10px] py-5 px-1 min-h-[280px] flex justify-evenly items-center flex-col fitl"
      >
        <Card className="tart">
          <div>
            <Icon className="ico" style={{ color: colory }}>
              {icon}
            </Icon>
            <Title className="fitel">{title}</Title>
            <Description className="depsersion">{description}</Description>
          </div>
        </Card>
      </Tilt>
    </motion.div>
  );
};

export default ServicesCard;
