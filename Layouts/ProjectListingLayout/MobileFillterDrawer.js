import React, { useState } from "react";
import styles from "./css/mobileFillterDrawer.module.css";
import {
  IoIosCloseCircle,
  IoIosArrowForward,
  IoLocationOutline,
} from "../../Utils/ApplicationIcon";
import PriceSlider from "../../Utils/data-fillter/price/PriceSlider";
import ButtonCheckBox from "../../Utils/data-fillter/checkBox/ButtonCheckBox";

const tabOptions = [
  { name: "Price", id: "price" },
  { name: "Sort", id: "sort" },
  { name: "Search", id: "search" },
  { name: "Unity Type", id: "unity" },
];

export default function MobileFillterDrawer() {
  const [activeTab, setActiveTab] = useState("price");

  const renderOptions = () => {
    switch (activeTab) {
      case "price":
        return <PriceSlider />;
      case "sort":
        return <p>Sort</p>;
      case "search":
        return <p>Search</p>;
      case "unity":
        return <ButtonCheckBox label="2" />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.mainConatiner}>
      <div className={styles.fillterDrawer_header}>
        <div className={styles.headerLeft_side}>
          {" "}
          <span className={styles.header_closeIconBox}>
            <IoIosCloseCircle />
          </span>
          <span className={styles.header_title}>
            <h3>Fillter </h3>
          </span>{" "}
        </div>
        <div className={styles.headerRight_side}>
          <span>Reset All</span>
        </div>
      </div>
      <div className={styles.fillterTab_container}>
        <div className={styles.tab_wrapper}>
          {tabOptions.map((el) => {
            return (
              <div
                className={styles.tab_option}
                onClick={() => setActiveTab(el.id)}
              >
                <div>
                  <div className={styles.tab_iconBox}>
                    <IoLocationOutline />{" "}
                  </div>
                  <div className={styles.tabTextBox}>{el.name} </div>
                </div>
                <div className={styles.arrowBox}>
                  <IoIosArrowForward />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.render_optionBox}>{renderOptions()}</div>
      </div>
    </div>
  );
}
