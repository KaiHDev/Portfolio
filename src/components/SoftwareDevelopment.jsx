import React from "react";
import { softwaredevelopmentteam } from "../assets";
import styles, { layout } from "../style";
import ResumeButton from "./ResumeButton";

const Design = () => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Software
          <br className="sm:block hidden" /> Development
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          While at TotalMobile, I contributed to the development and maintenance of their flagship product, 'Connect,' 
          working with technologies such as React, JavaScript, C#, and SQL. 
          I also played an active role in sprint planning and team collaboration within an Agile environment.
        </p>
        <ResumeButton styles="mt-10" />
      </div>
      <div className={layout.sectionImgReverse}>
        <div className="w-full rounded-[20px] bg-gradient-to-r from-secondary to-secondaryLight p-1">
          <img
            src={softwaredevelopmentteam}
            alt="billing"
            className="w-[auto] h-[auto] relative z-[5] rounded-[20px]"
          ></img>
        </div>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>
    </section>
  );
};

export default Design;
