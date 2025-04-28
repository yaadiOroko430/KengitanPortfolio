import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Download } from "./Icons";
import resume from "../assets/resume.jpg";
import SectionHeading from "./SectionHeading";
import techStack from "../data/techStack";

const About = () => {
  return (
    <div
      name="About"
      className="pt-16 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800 via-black to-black text-white"
    >
      <div className="container mx-auto px-5 sm:px-10 lg:px-20 flex flex-col justify-center">
        {/* Section Heading */}
        <AnimatedWrapper>
          <SectionHeading heading="About Me" />
        </AnimatedWrapper>

        {/* Text Content Section */}
        <div className="text-center md:text-left">
          <AnimatedWrapper animateFrom="bottom">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Hi there! 👋 , I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Kengitan Qabato
              </span>
            </h3>
          </AnimatedWrapper>

          <div className="text-gray-400 py-4 space-y-4 text-lg sm:text-xl font-medium leading-relaxed">
            <AnimatedWrapper>
              <p>
                A passionate software engineer with a knack for building
                impactful digital solutions. My expertise spans full-stack web
                development, mobile app creation, and video editing, making me a
                versatile tech enthusiast and creative professional.
              </p>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <p>
                With a solid foundation in frontend and backend technologies, I
                specialize in crafting seamless user experiences and scalable
                applications. I’m proficient in technologies like React,
                Node.js, Flutter, and MongoDB, and I constantly stay updated
                with emerging trends in the tech world.
              </p>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <p>
                Beyond coding, I bring stories to life through compelling video
                editing. From short social media clips to polished professional
                edits, I enjoy combining visuals and audio to create engaging
                content.
              </p>
            </AnimatedWrapper>
          </div>

          {/* Tech Stack */}
          <AnimatedWrapper>
            <div className="py-6">
              <p className="text-lg sm:text-xl font-semibold mb-4">My Tech Stack:</p>
              <ul className="flex flex-wrap gap-6">
                {techStack.map(({ icon, name }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <span>{icon}</span>
                    <span className="hidden sm:inline">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedWrapper>

          {/* Resume Button */}
          <AnimatedWrapper>
            <div className="py-5">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                <span>Download Resume</span>
                <Download className="w-5 h-5" />
              </a>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;