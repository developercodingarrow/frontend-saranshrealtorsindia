import React, { useContext, useState } from "react";
import styles from "../ProjectListingLayout/css/projectListingLayout.module.css";
import { AppContext } from "../../ContextApi/AppContextApi";

export default function AppDrawer() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  return (
    <div
      className={`${styles.app_drawer} ${
        showAppDrawer ? styles.Hide_app_drawer : ""
      }`}
    >
      App Drawer
    </div>
  );
}
