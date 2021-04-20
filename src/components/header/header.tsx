import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/header.module.css";
import useProgressiveImg from "../../utils/progressiveImg";

const Header: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const { src, blur } = useProgressiveImg("./logo1.svg", "./logo1.jpg");

  const clickLinks = (): void => {
    setChecked(false);
  };
  return (
    <header className={styles.header}>
      <div>
        <img
          alt="MountWater Logo"
          src={src}
          style={{
            width: 64,
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
        />
      </div>
      <NavLink
        to="/"
        onClick={clickLinks}
        className={styles.logo}
        activeStyle={{
          fontWeight: "bold",
        }}
      ></NavLink>
      <label
        htmlFor="ham-icon"
        className={`${styles.hamIcon} ${!checked ? styles.show : styles.hide}`}
      >
        <span>&#9776;</span>
        <input
          type="checkbox"
          id="ham-icon"
          onChange={(): void => setChecked(!checked)}
        />
      </label>
      <nav className={checked ? styles.animatedShow : styles.hide}>
        <label
          htmlFor="close-icon"
          className={`${styles.hamIcon} ${checked ? styles.show : styles.hide}`}
        >
          <span>X</span>
          <input
            type="checkbox"
            id="close-icon"
            onChange={(): void => setChecked(!checked)}
          />
        </label>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={clickLinks}
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={clickLinks}
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
