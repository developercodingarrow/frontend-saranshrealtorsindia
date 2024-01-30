import React, { useContext, useState } from "react";
import styles from "./css/appDeawer.module.css";
import Image from "next/image";
import logo from "../../public/web-static-images/saransh logo.png";
import { AppContext } from "../../ContextApi/AppContextApi";
import Link from "next/link";
const pageLink = [
  {
    name: "Home",
  },

  {
    name: "About us",
  },

  {
    name: "Blog",
  },

  {
    name: "Projects",
  },
  {
    name: "Contact us",
  },
];

const botomLink = [
  {
    name: "privay Policy",
  },
];

export default function AppDrawer() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  return (
    <div
      className={`${styles.app_drawer} ${
        showAppDrawer ? styles.Hide_app_drawer : ""
      }`}
      onClick={toggleAppDrawer}
    >
      <div className={styles.appDrawer_innerContainer}>
        <div className={styles.appDrawer_header}>
          <Image
            src={logo}
            width={900}
            height={900}
            className={styles.logoStyle}
          />
        </div>

        <div className={styles.optionTab_wrapper}>
          <div className={styles.top_options}>
            {pageLink.map((el) => {
              return (
                <div className={styles.tabs}>
                  <Link href={"/"} className={styles.tabLinkStyle}>
                    {" "}
                    {el.name}{" "}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className={styles.bottom_options}>
            {botomLink.map((el) => {
              return (
                <div className={styles.tabs}>
                  <Link href={"/"} className={styles.tabLinkStyle}>
                    {" "}
                    {el.name}{" "}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
