import React from "react";
import { FaGithubSquare, FaEye } from "react-icons/fa";

const Projects = (
  { content, name, imgProject, imgScreen, ProjectLink, CodeLink },
  { styles }
) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex flex-row">
      <div className="flex flex-col relative">
        <img
          src={imgScreen}
          alt={name}
          className="flexCenter w-[auto] h-[auto] relative z-10"
        />
        <img
          src={imgProject}
          alt={name}
          className="flexCenter w-[auto] h-[auto] absolute z-0 pl-8 pr-8 pt-2 object-center"
        />
        <h4 className="font-poppins font-normal xs:text-[24px] text-[20px] xs:leading-[26px] leading-[21.58px] text-gradient uppercase mt-10 mb-5">
          {name}
        </h4>
        <p
          className={`font-poppins font-normal text-[18px] leading-[32px] text-dimWhite`}
        >
          {content}
        </p>
        <div className="flex flex-row">
          <a href={ProjectLink} target="_blank" rel="noreferrer">
            <button
              type="button"
              className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 btn-highlight py-4 px-6 
              bg-blue-gradient font-poppins 
              font-medium text-[18px] 
            text-primary outline-none ${styles} rounded-[10px] mt-10 mr-2`}
            >
              <FaEye className="inline w-[20px] h-[20px] mb-1"></FaEye>
              &nbsp; Demo
            </button>
          </a>
          <a href={CodeLink} target="_blank" rel="noreferrer">
            <button
              type="button"
              className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 btn-highlight py-4 px-6 
              bg-blue-gradient font-poppins 
              font-medium text-[18px] 
            text-primary outline-none ${styles} rounded-[10px] mt-10 ml-2`}
            >
              <FaGithubSquare className="inline w-[20px] h-[20px] mb-1"></FaGithubSquare>
              &nbsp; GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
