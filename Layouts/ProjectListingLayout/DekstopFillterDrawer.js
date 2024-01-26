import React from "react";
import styles from "./css/dekstopFillterDrawer.module.css";
import FillterHeader from "./FillterHeader";
import { dekstopFillterOptions } from "../../JsonData/fillterFileds";
import PriceSlider from "../../Utils/data-fillter/price/PriceSlider";
import { useFillterUrlUpdater } from "../../custome-hooks/useFillterUrlUpdater";
import CheckBoxFillter from "../../Utils/data-fillter/checkBox/CheckBoxFillter";

export default function DekstopFillterDrawer() {
  const {
    checkedItems,
    handleCityChange,
    selectedCities,
    handleBuilderSelection,
    selectedBuilders,
    handleSliderChange,
    normalizedPrice,
    handelsearchTermChange,
    searchTerm,
    handleReset,
  } = useFillterUrlUpdater();
  const renderOptions = (data) => {
    switch (data.render) {
      case "minPriceRange":
        return (
          <div>
            <PriceSlider
              handleSliderChange={handleSliderChange}
              normalizedPrice={normalizedPrice}
              titel="Choose Your Price"
            />
          </div>
        );
      case "cityCheckBox":
        return (
          <div>
            <CheckBoxFillter
              options={data.options}
              checkedItems={selectedCities}
              onCheckboxChange={handleCityChange}
              titel="Select Your City"
            />
          </div>
        );

      case "builderCheckBox":
        return (
          <div>
            <CheckBoxFillter
              options={data.options}
              checkedItems={selectedBuilders}
              onCheckboxChange={handleBuilderSelection}
              titel="Select Your Builder"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.main_container}>
      <FillterHeader
        headertitleBox="dekstop_header_title"
        headerRightSide="dekstop_headerRight_side"
        resethandle={handleReset}
      />
      <div className={styles.fillter_container}>
        <div className={styles.fiilter_option_wrapper}>
          {dekstopFillterOptions.map((el, i) => {
            return renderOptions(el);
          })}
        </div>
      </div>
    </div>
  );
}
