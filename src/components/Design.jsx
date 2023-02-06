import React from "react";
import { tomsbarbershero } from "../assets";
import styles, { layout } from "../style";
import ResumeButton from "./ResumeButton";

const Design = () => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Design
          <br className="sm:block hidden" /> Experience
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          My experience with design has been taking a set of instructions from a
          client/designer and turning those visions into fully functioning
          websites with my passion being around the users experience. An example
          of this would be a site I created "Toms Barbers" a salon/barber shop
          in Lincoln.
        </p>
        <ResumeButton styles="mt-10" />
      </div>
      <div className={layout.sectionImgReverse}>
        <div className="w-full rounded-[20px] bg-gradient-to-r from-secondary to-secondaryLight p-1">
          <img
            src={tomsbarbershero}
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
