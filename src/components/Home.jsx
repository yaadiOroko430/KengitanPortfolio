import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import AnimatedWrapper from "./ui/AnimatedWrapper";
import { ArrowDown } from "./Icons";
import Avatar from "../assets/Avatars/avatar.png";
import contactInfo from "../data/contactInfo";

const Home = () => {
  const interests = [
    " . . . ",
    3000,
    "Full Stack Development",
    2000,
    "Mobile App Development",
    2000,
    "Graphics Design",
    4000,
    "Video Editing",
    2000,
  ];

  return (
    <div
      name="Home"
      className="pt-16 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-5 sm:px-10 lg:px-20 flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <AnimatedWrapper delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Kengitan Qabato
              </span>
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.35}>
            <p className="text-lg sm:text-xl text-gray-300 font-medium mb-6">
              A passionate developer specializing in{" "}
              <span className="text-cyan-400">
                <TypeAnimation
                  sequence={interests}
                  speed={50}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </p>
          </AnimatedWrapper>

          {/* Contact Icons */}
          <AnimatedWrapper delay={0.45}>
            <ul className="flex items-center gap-4 justify-center md:justify-start mb-8">
              {contactInfo.map(({ id, link, icon }) => (
                <li key={id} className="hover:scale-110 transition-transform">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedWrapper>

          {/* About Me Button */}
          <AnimatedWrapper delay={0.55}>
            <Link
              to="About"
              smooth
              duration={500}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              <span>About Me</span>
              <ArrowDown className="w-4 h-4" />
            </Link>
          </AnimatedWrapper>
        </div>

        {/* Avatar Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <AnimatedWrapper delay={0.8}>
            <img
              src={Avatar}
              alt="Kengitan Qabato"
              className="w-64 h-64 sm:w-80 sm:h-80 border-4 border-cyan-500 shadow-lg rounded-full"
            />
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default Home;