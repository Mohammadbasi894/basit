// src/Skills.tsx
import React from "react";
import Skill from "./skill";
import "./skills.css"; // Import CSS for styling

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="heading0 text-center text-[40px] font-bold bmh">
        Skilled <span className="text-purple">in different tecnologies</span>
      </h1>
      <div className="flex w-full justify-center items-center">
        <div className="skills-container">
          <Skill skill="HTML" level={98} color="orange" />
          <Skill skill="CSS" level={93} color="rgba(8, 69, 161, 0.987)" />
          <Skill skill="JS" level={95} color="yellow" />
          <Skill skill="REACT-JS/TS" level={87} color="skyblue" />
          <Skill skill="NEXT" level={96} color="black" />
          <Skill skill="REACT-NATIVE" level={93} color="skyblue" />
          <Skill skill="JAVA" level={76} color="red" />
          <Skill skill="PYTHON" level={77} color="yellow" />
          <Skill skill="PHP" level={90} color="rgba(68, 20, 134, 0.987)" />
          <Skill skill="MY-SQL" level={93} color="rgba(0, 111, 201, 0.987)" />
          <Skill skill="MONGO-DB" level={69} color="green" />
          <Skill skill="C++" level={65} color="blueviolet" />
          <Skill skill="C#" level={70} color="#fff" />
          <Skill skill="VB.net" level={79} color="blue" />
          <Skill skill="XML" level={92} color="rgba(238, 136, 27, 0.987)" />
          <Skill skill="MATH" level={60} color="black" />
          <Skill skill="PHYSICS" level={45} color="gray" />
          <Skill skill="LARVEL" level={89} color="rgba(236, 49, 36, 0.987)" />
          <Skill skill="GO" level={75} color="#fff" />
          <Skill skill="REST" level={66} color="purple" />
          <Skill
            skill="TAILWIND-CSS"
            level={100}
            color="rgba(36, 0, 167, 0.987)"
          />
          <Skill skill="BOOTSTRAP" level={99} color="pink" />
          <Skill skill="WORDPRESS" level={60} color="rgb(70,25,70)" />
          {/* Add more skills as needed */}
        </div>
      </div>
      <div className="bg-canva"></div>
    </section>
  );
};

export default Skills;
