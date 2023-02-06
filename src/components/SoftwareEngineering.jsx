import React from "react";
import { coding } from "../assets";
import styles, { layout } from "../style";
import ResumeButton from "./ResumeButton";

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
        My current role requires me to research and develop solutions using
        languages such as React, NodeJS, C#, SQL and Microsoft developed
        platforms such as PowerApps/Automate/PowerBi.
      </p>
      <ResumeButton styles="mt-10" />
    </div>
  </section>
);

export default SoftwareEngineering;
