import React from "react";
import styles from "./css/listingSearch.module.css";
import { CiSearch } from "../../../ApplicationIcon";
export default function ListingSearch() {
  return (
    <div className={styles.search_container}>
      <input
        type="text"
        placeholder="Search your poperty"
        className={styles.searchInput}
      />
      <div className={styles.search_iconBox}>
        <CiSearch />
      </div>
    </div>
  );
}
