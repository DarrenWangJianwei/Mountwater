import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
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
