import React from "react";
import { coding } from "../assets";
import styles, { layout } from "../style";
import ProjectsButton from "./ProjectsButton";

const SoftwareEngineering = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="w-full rounded-[20px] bg-gradient-to-r from-secondary to-secondaryLight p-1">
        <img
          src={coding}
          alt="coding"
          className="w-[100%] h-[100%] rounded-[20px]"
        ></img>
      </div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Software Engineering <br className="sm:block hidden" />
        Experience
      </h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
        During my time at Dynex, I designed and implemented solutions for various business needs, 
        working with a diverse tech stack including React, Node.js, C#, SQL, 
        and Microsoft tools like PowerApps, Power Automate, and Power BI.
      </p>
      <ProjectsButton styles="mt-10" />
    </div>
  </section>
);

export default SoftwareEngineering;
