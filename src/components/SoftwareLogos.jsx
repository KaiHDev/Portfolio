import React from "react";
import { logoList } from "../constants";
import styles from "../style";

const Logos = () => {
  return (
    <section id="Logos">
      <h2
        className={`text-white w-full ${styles.heading2} ${styles.flexCenter}`}
      >
        Front End Experience With
      </h2>
      <div
        className={`justify-between flex-row w-full my-4 grid ${styles.flexCenter}`}
      >
        <div className={`${styles.flexCenter} grid lg:grid-cols-6 w-full`}>
          {logoList.map((logoList) => (
            <div
              key={logoList.id}
              className={`${styles.flexCenter} justify-between flex flex-col px-10 pt-5 rounded-[20px] max-w-[370px]  md:mr-10 sm:mr-5 mr-0 my-4 feedback-card`}
            >
              <img
                src={logoList.logo}
                alt="logo"
                className="sm:w-[192px] object-contain"
              />
              <h2 className={`text-white my-4 ${styles.paragraph}`}>
                {logoList.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
