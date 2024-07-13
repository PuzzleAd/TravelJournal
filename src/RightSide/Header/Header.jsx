import React from "react";
import styles from "./Header.module.scss";
import icon from "./WorldIcon.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={icon} alt="" />
      <p>my travel journal.</p>
    </div>
  );
};

export default Header;
