import React from "react";
import styles from "./style";
import {
  Experience,
  WebDevelopment,
  SoftwareEngineering,
  SoftwareLogos,
  Footer,
  Navbar,
  PortfolioProjects,
  Hero,
  SoftwareDevelopment,
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
        <SoftwareDevelopment />
        <PortfolioProjects />
        <SoftwareLogos />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
