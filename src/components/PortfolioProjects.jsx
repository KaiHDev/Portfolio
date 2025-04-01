import React from "react";
import { projects } from "../constants";
import styles from "../style";
import Projects from "./Projects";

const PortfolioProjects = () => (
  <section
    id="projects"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}></p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5 px-2 relative z-[1]">
      {projects.map((card) => (
        <Projects key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default PortfolioProjects;
