import React, { useContext, useState } from "react";
import styles from "./css/homepage.module.css";
import AppDrawer from "../appLayout/AppDrawer";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import { AppContext } from "../../ContextApi/AppContextApi";
import HeroSection from "./HeroSection";
import FeatureListing from "./FeatureListing";
import ListingSearch from "../../Utils/data-fillter/searchInputs/listing-search/ListingSearch";

export default function HomePageLayOut() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  return (
    <div className={styles.main_container}>
      <div>
        <AppDrawer />
        <ListingNavBar
          toggleAppDrawer={toggleAppDrawer}
          toggleSideBar={toggleSideBar}
        />
      </div>
      <div className={styles.home_listingSearchBox}>
        <ListingSearch />
      </div>
      <div className={styles.hero_section}>
        <HeroSection />
      </div>

      <div>
        <FeatureListing
          sectionTitle="DISCOVER OUR FEATURED LISTINGS"
          sortDescreption="Experience excellence in real estate - explore our handpicked selection of standout listings, tailored for your distinct desires."
        />
      </div>
    </div>
  );
}
