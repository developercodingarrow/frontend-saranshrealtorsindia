import React, { useContext, useState } from "react";
import styles from "./css/projectListingLayout.module.css";
import Link from "next/link";
import {
  FcHome,
  HiOutlineBuildingOffice2,
  IoCallOutline,
  MdOutlineMessage,
  IoNewspaperOutline,
} from "../../Utils/ApplicationIcon";
import MobileFillterDrawer from "./MobileFillterDrawer";
import DekstopFillterDrawer from "./DekstopFillterDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingCard from "../../Utils/cards/listing-card/ListingCard";
import ListingSearch from "../../Utils/data-fillter/searchInputs/listing-search/ListingSearch";

import Image from "next/image";
import { ListingContext } from "../../ContextApi/userinterface/ListingContextApi";
import ListingNavBar from "./ListingNavBar";
import AppDrawer from "../appLayout/AppDrawer";
export default function ProjectListingLayout({ children }) {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const { allListing } = useContext(ListingContext);

  return (
    <div className={styles.main_container}>
      <AppDrawer />
      <ListingNavBar
        toggleAppDrawer={toggleAppDrawer}
        toggleSideBar={toggleSideBar}
      />
      <div className={styles.fillter_TopBar}>
        <ListingSearch />
      </div>
      <div className={styles.listing_container}>
        <div
          className={`${styles.sideBarFillter_Container} ${
            showSideBar ? styles.showSideBar : ""
          }`}
        >
          <div className={styles.dekstop_fillterBarUi}>
            <DekstopFillterDrawer />
          </div>
          <div className={styles.mobile_fillterBarUi}>
            <MobileFillterDrawer />
          </div>
        </div>

        <div className={styles.projectListing_Container}>
          {allListing?.map((el, i) => {
            return (
              <>
                <ListingCard />
              </>
            );
          })}
        </div>
        <div className={styles.listing_rightSide}>enquery form side</div>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.dekstop_footer}>Dekstop Footer</div>
        <div className={styles.mobile_footer}>
          <Link href="/property" className={styles.footerTab_link}>
            <span className={styles.footerTab_icon}>
              <FcHome />
            </span>
            <span className={styles.footerTab_text}>Home </span>
          </Link>

          <Link href="/property" className={styles.footerTab_link}>
            <span className={styles.footerTab_icon}>
              <HiOutlineBuildingOffice2 />
            </span>
            <span className={styles.footerTab_text}>Projects </span>
          </Link>

          <Link href="/property" className={styles.footerTab_link}>
            <span className={styles.footerTab_icon}>
              <MdOutlineMessage />
            </span>
            <span className={styles.footerTab_text}>Enquery </span>
          </Link>

          <Link href="/property" className={styles.footerTab_link}>
            <span className={styles.footerTab_icon}>
              <IoNewspaperOutline />
            </span>
            <span className={styles.footerTab_text}>Blogs</span>
          </Link>

          <Link href="/property" className={styles.footerTab_link}>
            <span className={styles.footerTab_icon}>
              <IoCallOutline />
            </span>
            <span className={styles.footerTab_text}>Call </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
