import React from "react";
import styles from "../css/authLayout.module.css";

export default function AuthLayout({ children }) {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.navbarContainer}>
          <h2>saransh realtors india</h2>
        </div>
        <div className={styles.childernContainer}>{children}</div>
        <div className={styles.footerContainer}>Footer</div>
      </div>
    </>
  );
}
