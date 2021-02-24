import * as React from "react";
import styles from "../components/contact/css/contact.module.css";
import useProgressiveImg from "./../utils/progressiveImg";

const Home: React.FC = () => {
  const { src, blur } = useProgressiveImg("./logo.svg", "./logo.jpg");

  return (
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
        <h2>Tony Yan</h2>
        <h3>President</h3>
      </div>
      <div className={styles.content_info}>
        <div className={styles.content_info_address}>
          <p>#44 - 2233 Victoria Avenue East,</p>
          <p>Regina, Saskatchewan, S4N 6E4</p>
        </div>
        <div>
          <p>C: 778-829-9955</p>
          <p>E: Tony@mountwatercapital.com</p>
          <p>www.MountwaterCapital.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
