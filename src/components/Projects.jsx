import React from "react";
import { FaGithubSquare, FaEye } from "react-icons/fa";

const Projects = (
  { content, name, imgProject, imgScreen, ProjectLink, CodeLink },
  { styles }
) => (
  <div className="w-full md:w-[48%] flex flex-col px-10 py-12 rounded-[20px] feedback-card">
    <div className="flex flex-row">
      <div className="flex flex-col relative">
        <div className="relative w-full flex justify-center items-center mb-6">
          <img
            src={imgScreen}
            alt={`${name} screenshot`}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-[100%] h-auto"
          />
          <img
            src={imgProject}
            alt={`${name} frame`}
            className="w-[76%] h-auto z-0 mt-4 sm-mt-0 object-cover rounded-md"
          />
        </div>
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
