import React, { useContext, useState } from "react";
import styles from "./css/blogListlayout.module.css";
import AppDrawer from "../appLayout/AppDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";
import EnquireForm from "../../Utils/cards/EnquireForm";

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
        <div className={styles.Blog_sideBar}>
          <div className={styles.sideBarElement_box}>
            <EnquireForm />
          </div>
          <div className={styles.sideBarElement_box}>
            <div className={styles.sideBarElement_Wrapper}>
              <div>Recent Blog</div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                return (
                  <div>
                    <div> Recen </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
