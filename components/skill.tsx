// src/components/Skill.tsx
import React, { useState, useEffect, useRef } from "react";
import "./skills.css"; // Import CSS for styling

interface SkillProps {
  skill: string;
  level: number;
  color: string;
}

const Skill: React.FC<SkillProps> = ({ skill, level, color }) => {
  const [animated, setAnimated] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressBarElement = progressBarRef.current;

    const handleScroll = () => {
      if (progressBarElement) {
        const top = progressBarElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight) {
          setAnimated(true);
        }
      }
    };

    // Add event listener to listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate width of progress bar based on level
  const progressBarStyle: React.CSSProperties = {
    width: animated ? `${level}%` : "0%",
  };

  return (
    <div className="skill">
      <div className="skill-name" style={{ color: `${color}` }}>
        {skill}
      </div>
      <div className="progress-bar" ref={progressBarRef}>
        <div
          className={`progress ${animated ? "glow" : ""}`}
          style={progressBarStyle}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
