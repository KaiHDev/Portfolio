import React from "react";
import { FaGithubSquare, FaEnvelopeSquare, FaLinkedin } from "react-icons/fa";

const SocialIcons = ({ styles }) => {
  return (
    <ul
      className={`font-poppins font-semibold ss:text-[30px] text-[30px] text-white flex flex-row ${styles}`}
    >
      <li className="mr-2 text-hover">
        <a href="https://github.com/KaiHDev" target="_blank">
          <FaGithubSquare />
        </a>
      </li>
      <li className="mr-2 text-hover">
        <a href="mailto:kaihallam95@gmail.com">
          <FaEnvelopeSquare />
        </a>
      </li>
      <li className="mr-2 text-hover">
        <a
          href="https://www.linkedin.com/in/kai-hallam-4b9881156/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
