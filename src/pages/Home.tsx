import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/home/css/home.module.css";
import useProgressiveImg from "./../utils/progressiveImg";

const Home: React.FC = () => {
  const { src, blur } = useProgressiveImg("./logo.svg", "./logo.jpg");

  return (
    <div className={styles.main}>
      <div>
        <img
          alt="MountWater Logo"
          src={src}
          style={{
            width: 200,
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
        />
      </div>
      <div className={styles.content}>
        <h1>Mountwater</h1>
        <h4>Capital Corp</h4>
        <p>#44 - 2233 Victoria Avenue East,</p>
        <p>Regina, Saskatchewan, S4N 6E4</p>
      </div>
      <div className={styles.btn_container}>
        <NavLink
          className={`${styles.btn_a} ${styles.backgroud_theme}`}
          to="/contact"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
