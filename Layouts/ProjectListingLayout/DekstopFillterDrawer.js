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
    handleCheckboxChange,
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
            <div>Price Title</div>
            <div>
              <PriceSlider
                handleSliderChange={handleSliderChange}
                normalizedPrice={normalizedPrice}
              />
            </div>
          </div>
        );
      case "projectStatusCheckBox":
        return (
          <div>
            <div>Project status</div>
            <div>
              <CheckBoxFillter
                options={data.options}
                checkedItems={checkedItems}
                onCheckboxChange={handleCheckboxChange}
              />
            </div>
          </div>
        );
      case "cityCheckBox":
        return (
          <div>
            <div>City</div>
            <div>
              <CheckBoxFillter
                options={data.options}
                checkedItems={checkedItems}
                onCheckboxChange={handleCheckboxChange}
              />
            </div>
          </div>
        );

      case "builderCheckBox":
        return (
          <div>
            <div>Builder</div>
            <div>
              <CheckBoxFillter
                options={data.options}
                checkedItems={selectedBuilders}
                onCheckboxChange={handleBuilderSelection}
              />
            </div>
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
