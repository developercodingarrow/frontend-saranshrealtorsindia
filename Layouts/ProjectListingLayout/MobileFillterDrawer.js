import React, { useContext, useState } from "react";
import styles from "./css/mobileFillterDrawer.module.css";
import {
  IoIosCloseCircle,
  IoIosArrowForward,
  IoLocationOutline,
} from "../../Utils/ApplicationIcon";
import PriceSlider from "../../Utils/data-fillter/price/PriceSlider";
import ButtonCheckBox from "../../Utils/data-fillter/checkBox/ButtonCheckBox";
import { tabOptions } from "../../JsonData/fillterFileds";
import { useFillterUrlUpdater } from "../../custome-hooks/useFillterUrlUpdater";
import CheckBoxFillter from "../../Utils/data-fillter/checkBox/CheckBoxFillter";
import FillterInput from "../../Utils/data-fillter/searchInputs/FillterInput";
import FillterHeader from "./FillterHeader";

export default function MobileFillterDrawer() {
  const [activeTab, setActiveTab] = useState("searchTerm");
  const {
    checkedItems,
    handleCheckboxChange,
    handleCityChange,
    selectedCities,
    handleBuilderSelection,
    selectedBuilders,
    handleSliderChange,
    normalizedPrice,
    handelsearchTermChange,
    searchTerm,
  } = useFillterUrlUpdater();

  const renderOptions = () => {
    const activeTabData = tabOptions.find(
      (option) => option.render === activeTab
    );

    if (!activeTabData) return null;

    const { label, options } = activeTabData;
    switch (activeTab) {
      case "minPriceRange":
        return (
          <PriceSlider
            handleSliderChange={handleSliderChange}
            normalizedPrice={normalizedPrice}
          />
        );
      case "projectStatusCheckBox":
        return (
          <CheckBoxFillter
            label={label}
            options={options}
            checkedItems={checkedItems}
            onCheckboxChange={handleCheckboxChange}
            titel="Select Your City"
          />
        );
      case "cityCheckBox":
        return (
          <CheckBoxFillter
            label={label}
            options={options}
            checkedItems={selectedCities}
            onCheckboxChange={handleCityChange}
            titel="Select Your City"
          />
        );

      case "builderCheckBox":
        return (
          <CheckBoxFillter
            label={label}
            options={options}
            checkedItems={selectedBuilders}
            onCheckboxChange={handleBuilderSelection}
            titel="Select Your builder"
          />
        );
      case "searchTerm":
        return (
          <FillterInput
            handelsearch={handelsearchTermChange}
            searchTerm={searchTerm}
          />
        );
      case "circleCheckBox":
        return (
          <ButtonCheckBox
            label={label}
            options={options}
            checkedItems={checkedItems}
            onCheckboxChange={handleCheckboxChange}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className={styles.mainConatiner}>
      <FillterHeader
        headercloseIconBox="header_closeIconBox"
        headertitleBox="header_title"
        headerRightSide="headerRight_side"
      />
      <div className={styles.fillterTab_container}>
        <div className={styles.tab_wrapper}>
          {tabOptions.map((el) => {
            return (
              <div
                className={styles.tab_option}
                onClick={() => setActiveTab(el.render)}
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
