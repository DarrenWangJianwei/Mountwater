import React from "react";
import styles from "./css/footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyRight}>
        ©2021 Mountwater Capital Corp. All rights reserved.
        <br />
        Terms of Use Privacy Policy
      </p>
      <p className={styles.address}>
        <strong>Mountwater Capital Corp</strong>
        <br />
        1519 Bellevue Ave,
        <br />
        West Vancouver, BC, V7V 1A6
      </p>
    </footer>
  );
};

export default Footer;
