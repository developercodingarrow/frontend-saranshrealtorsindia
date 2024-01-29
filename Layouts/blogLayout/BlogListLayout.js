import React, { useContext, useState } from "react";
import styles from "./css/blogListlayout.module.css";
import AppDrawer from "../appLayout/AppDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";

export default function BlogListLayout({ children }) {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  return (
    <div className={styles.main_container}>
      <AppDrawer />
      <ListingNavBar
        toggleAppDrawer={toggleAppDrawer}
        toggleSideBar={toggleSideBar}
      />

      <div className={styles.pageBody_container}>
        <div className={styles.blog_cards_container}>{children}</div>
        <div className={styles.Blog_sideBar}>Side bar</div>
      </div>

      <div className={styles.footer_container}>
        <div className={styles.dekstop_footerWrapper}>
          <DekstopFooter />
        </div>
        <div className={styles.mobile_footerWrapper}>
          <MobileFooter />
        </div>
      </div>
    </div>
  );
}
