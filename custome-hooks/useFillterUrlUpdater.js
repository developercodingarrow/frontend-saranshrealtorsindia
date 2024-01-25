import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useFillterUrlUpdater = () => {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedBuilders, setSelectedBuilders] = useState([]);
  const [normalizedPrice, setNormalizedPrice] = useState(0);
  const [searchTerm, setsearchTerm] = useState("");

  console.log(searchTerm);
  const handelsearchTermChange = (e) => {
    setsearchTerm(e.target.value);
  };

  const handleSliderChange = (e) => {
    const newNormalizedPrice = Math.round(parseFloat(e.target.value));
    setNormalizedPrice(newNormalizedPrice);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(router.query);

    if (searchTerm) {
      queryParams.set("searchTerm", searchTerm);
    } else {
      queryParams.delete("searchTerm");
    }

    router.push({
      pathname: router.pathname,
      query: queryParams.toString(),
    });
  }, [searchTerm]);

  useEffect(() => {
    const queryParams = new URLSearchParams(router.query);

    if (normalizedPrice) {
      queryParams.set("minPrice", normalizedPrice);
    } else {
      queryParams.delete("minPrice");
    }

    router.push({
      pathname: router.pathname,
      query: queryParams.toString(),
    });
  }, [normalizedPrice]);

  useEffect(() => {
    const queryParams = new URLSearchParams(router.query);
    queryParams.set("city", selectedCities.join(","));

    router.push({
      pathname: router.pathname,
      query: queryParams.toString(),
    });
  }, [selectedCities]);

  useEffect(() => {
    const queryParams = new URLSearchParams(router.query);
    queryParams.set("builder", selectedBuilders.join(","));

    router.push({
      pathname: router.pathname,
      query: queryParams.toString(),
    });
  }, [selectedBuilders]);

  const handleCityChange = (city, isChecked) => {
    setSelectedCities((prevSelectedCities) => {
      if (isChecked) {
        return [...prevSelectedCities, city];
      } else {
        return prevSelectedCities.filter(
          (selectedCity) => selectedCity !== city
        );
      }
    });
  };

  const handleBuilderSelection = (builder, isSelected) => {
    setSelectedBuilders((prevSelectedBuilders) => {
      if (isSelected) {
        // Add the builder to the list of selected builders
        return [...prevSelectedBuilders, builder];
      } else {
        // Remove the builder from the list of selected builders
        return prevSelectedBuilders.filter(
          (selectedBuilder) => selectedBuilder !== builder
        );
      }
    });
  };

  const handleCheckboxChange = (option, isChecked) => {
    setCheckedItems((prevCheckedItems) => {
      if (isChecked) {
        // Add the option to the list of checked items
        return [...prevCheckedItems, option];
      } else {
        // Remove the option from the list of checked items
        return prevCheckedItems.filter((item) => item !== option);
      }
    });
  };

  const handleReset = () => {
    setCheckedItems([]);
    setSelectedCities([]);
    setSelectedBuilders([]);
    setNormalizedPrice(0);
    setsearchTerm("");
    // Clear query parameters by replacing the URL
    router.replace(router.pathname);
  };

  return {
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
  };
};
