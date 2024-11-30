import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import AnimatedWrapper from "./ui/AnimatedWrapper";
import { ArrowDown } from "./Icons";
import Avatar from "../assets/Avatars/Yaad2.jpg";
import contactInfo from "../data/contactInfo";

const Home = () => {
  const interests = [
    " . . . ",
    3000,
    "Frontend Development",
    2000,
    "Backend Development",
    2000,
    "Mobile App Development",
    4000,
   
    "Video Editing",
    2000,
  ];

  return (
    <div
      name="Home"
      className="pt-8 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="section gap-16 md:gap-8 md:justify-between items-center md:flex-row-reverse w-full px-5">
        {/* Avatar Section */}
        <div className="flex flex-col justify-center md:w-2/5 w-full mb-8 md:mb-0">
          <AnimatedWrapper delay={0.8} animateFrom="left">
            <img
              src={Avatar}
              alt="Yaad's Avatar"
              width="auto"
              height="auto"
              loading="eager"
              title="Avatar"
              className="rounded-full mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            />
          </AnimatedWrapper>
        </div>

        {/* Text Section */}
        <div className="pl-2 xs:pl-8 flex flex-col gap-3 justify-center text-gray-200 w-full md:w-3/5">
          <AnimatedWrapper delay={0.2}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left">
              <span className="block">Hi There, </span>
              <span>I'm </span>
              <span className="text-transparent bg-gradient-to-br from-cyan-300 to-blue-600 bg-clip-text">
                Kengitan Qabato
              </span>
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.35}>
            <p className="text-gray-400 text-lg xs:text-xl sm:text-2xl font-semibold py-4 min-w-[16rem] xs:min-w-[20rem] max-w-[26rem] text-center sm:text-left">
              <span className="block xs:inline">I am into</span>
              <span className="text-cyan-400 xs:pl-2">
                <TypeAnimation
                  sequence={interests}
                  speed={1}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </p>
          </AnimatedWrapper>

          {/* Contact Icons */}
          <AnimatedWrapper delay={0.45}>
            <ul className="flex items-center z-40 gap-3 md:gap-8 lg:gap-4 justify-center sm:justify-start flex-wrap">
              {contactInfo.map(({ id, link, name, icon, download }) => {
                return (
                  <li
                    key={id}
                    link={link}
                    className={`group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105 focus:grayscale-0 focus:scale-105 active:grayscale-0 active:scale-105`}
                  >
                    <a
                      href={link}
                      download={download}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </AnimatedWrapper>

          {/* About Me Button */}
          <AnimatedWrapper delay={0.55}>
            <div className="py-5 text-center">
              <Link
                to="About"
                smooth
                duration={500}
                className="z-30 group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3 rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-40 relative"
              >
                <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out">
                  About Me
                </span>
                <span className="absolute z-30 right-5 sm:-translate-y-7 sm:group-hover:translate-y-0 sm:scale-0 transition-all group-hover:scale-125 ease-in delay-200 animate-pulse duration-500">
                  <ArrowDown />
                </span>
              </Link>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default Home;
