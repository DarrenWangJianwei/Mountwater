import React from "react";
import styles from "./css/footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h4>Mountwater Capital Corp</h4>
      <p>#44 - 2233 Victoria Avenue East,</p>
      <p>Regina, Saskatchewan, S4N 6E4</p>
    </footer>
  );
};

export default Footer;
