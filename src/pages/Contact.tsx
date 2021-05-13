import * as React from "react";
import styles from "../components/contact/css/contact.module.css";
import useProgressiveImg from "./../utils/progressiveImg";
import Particles from "../components/particles/Particles";
import Hero from "../components/hero/Hero";

const Home: React.FC = () => {
  const { src, blur } = useProgressiveImg("./logo.svg", "./logo2.jpg");

  return (
    <Particles>
      <Hero>
        <div className={styles.main}>
          <div className={styles.logo}>
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
          <div className={styles.content_name}>
            <h2>Office</h2>
          </div>
          <div className={styles.content_info}>
            <div className={styles.content_info_address}>
              <p>1519 Bellevue Ave,</p>
              <p>West Vancouver, BC, V7V 1A6</p>
            </div>
            <div>
              <p>E: office@mountwatercapital.com</p>
              <p>www.MountwaterCapital.com</p>
            </div>
          </div>
        </div>
      </Hero>
    </Particles>
  );
};

export default Home;
