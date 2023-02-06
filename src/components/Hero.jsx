import React from "react";
import styles from "../style";
import { macbookScreen, moviefinderapp } from "../assets";
import SocialIcons from "./SocialIcons";
import Typewriter from "typewriter-effect";
import ResumeButton from "./ResumeButton";
import { FaCode } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex w-[300px] items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <FaCode className="icon-blue w-[24px] h-[24px]" />
          <div className={`${styles.paragraph} ml-2`}>
            <span className="text-white flex">
              <Typewriter
                options={{
                  strings: [
                    "Front End Development",
                    "Full Stack Development",
                    "Back End Development",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Kai Hallam{" "}
            <br
              className="sm:block 
            hidden"
            ></br>
            <span className="text-gradient">Portfolio</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I'm Passionate about developing great Front/Backend experiences for
          end users.
        </p>
        <ResumeButton styles="mt-5" />
        <SocialIcons styles="mt-5" />
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={macbookScreen}
          alt={"screen"}
          className="flexCenter w-[auto] h-[auto] relative z-10"
        />
        <img
          src={moviefinderapp}
          alt={"website"}
          className="flexCenter w-[auto] h-[auto] absolute z-0 pl-[10%] pr-[10%] pt-2"
        />
        <div className="absolute z-[0] w-[40%]"></div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
