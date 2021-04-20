import * as React from "react";
import styles from "../components/home/css/home.module.css";
import FluidAnimation from "react-fluid-animation";
import { NavLink } from "react-router-dom";

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
};

const Home: React.FC = () => {
  return (
    <div
      style={{
        height: "87vh",
      }}
    >
      <FluidAnimation config={defaultConfig} />

      <div className={styles.main}>
        <div className={styles.heroContent}>
          <h1>做我们喜欢的事</h1>
          <NavLink to="/contact" className={styles.btn}>
            Read More
          </NavLink>
        </div>
        <div className={styles.heroDetail}>
          <p>
            Mountwater Capital Corp
            <br />
            #44 - 2233 Victoria Avenue East,
            <br />
            Regina, Saskatchewan, S4N 6E4
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
