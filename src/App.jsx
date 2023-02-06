import React from "react";
import styles from "./style";
import {
  Experience,
  WebDevelopment,
  Design,
  SoftwareEngineering,
  SoftwareLogos,
  Footer,
  Navbar,
  PortfolioProjects,
  Hero,
  Resume,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Experience />
        <WebDevelopment />
        <SoftwareEngineering />
        <Design />
        <PortfolioProjects />
        <SoftwareLogos />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
