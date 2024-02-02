import React, { useContext, useEffect } from "react";
import styles from "./css/dekstopFillterDrawer.module.css";
import FillterHeader from "./FillterHeader";
import { dekstopFillterOptions } from "../../JsonData/fillterFileds";
import PriceSlider from "../../Utils/data-fillter/price/PriceSlider";
import { useFillterUrlUpdater } from "../../custome-hooks/useFillterUrlUpdater";
import CheckBoxFillter from "../../Utils/data-fillter/checkBox/CheckBoxFillter";
import { CityContext } from "../../ContextApi/CityContextApi";
import { BuilderContext } from "../../ContextApi/BuilderContextApi";

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
    handleUnitTypeChange,
    selectedunitTypes,
    handleProjectStatusChange,
    slectedprojectStatus,
  } = useFillterUrlUpdater();
  const { allCites, handelAllCites } = useContext(CityContext);
  const { allBuilders, handelAllBuilder } = useContext(BuilderContext);

  useEffect(() => {
    handelAllCites();
    handelAllBuilder();
  }, []);

  console.log(allBuilders);

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
        const cityOptions = allCites.map((cityData) => cityData.city);
        return (
          <div>
            <CheckBoxFillter
              options={cityOptions}
              checkedItems={selectedCities}
              onCheckboxChange={handleCityChange}
              titel="Select Your City"
            />
          </div>
        );

      case "builderCheckBox":
        const builderOptions = allBuilders.map(
          (builderData) => builderData.builderName
        );
        return (
          <div>
            <CheckBoxFillter
              options={builderOptions}
              checkedItems={selectedBuilders}
              onCheckboxChange={handleBuilderSelection}
              titel="Select Your Builder"
            />
          </div>
        );

      case "projectStatusCheckBox":
        return (
          <div>
            <CheckBoxFillter
              options={data.options}
              checkedItems={slectedprojectStatus}
              onCheckboxChange={handleProjectStatusChange}
              titel="Project Status"
            />
          </div>
        );

      case "circleCheckBox":
        return (
          <div>
            <CheckBoxFillter
              options={data.options}
              checkedItems={selectedunitTypes}
              onCheckboxChange={handleUnitTypeChange}
              titel="Unit Types"
            />
          </div>
        );

      case "projectTypeCheckBox":
        return (
          <div>
            <CheckBoxFillter
              options={data.options}
              checkedItems={selectedCities}
              onCheckboxChange={handleCityChange}
              titel="Unit Types"
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
