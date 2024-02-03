import React, { useContext, useState } from "react";
import { isAuth } from "../Actions/authAction";
import ListingNavBar from "../Layouts/ProjectListingLayout/ListingNavBar";
import { AppContext } from "../ContextApi/AppContextApi";
import ListingSearch from "../Utils/data-fillter/searchInputs/listing-search/ListingSearch";
import HomePageLayOut from "../Layouts/homepage/HomePageLayOut";
export default function HomePage() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  return (
    <>
      <div>
        <HomePageLayOut />
      </div>
    </>
  );
}
