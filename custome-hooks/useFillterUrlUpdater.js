import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import debounce from "lodash/debounce";

export const useFillterUrlUpdater = () => {
  const router = useRouter();

  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedBuilders, setSelectedBuilders] = useState([]);
  const [normalizedPrice, setNormalizedPrice] = useState(0);
  const [searchTerm, setsearchTerm] = useState("");

  const handleSliderChange = (e) => {
    const newNormalizedPrice = Math.round(parseFloat(e.target.value));
    setNormalizedPrice(newNormalizedPrice);
  };

  useEffect(() => {
    let updateUrlTimeout;

    const updateUrl = () => {
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
    };

    if (updateUrlTimeout) {
      clearTimeout(updateUrlTimeout);
    }

    updateUrlTimeout = setTimeout(updateUrl, 300);

    return () => {
      clearTimeout(updateUrlTimeout);
    };
  }, [normalizedPrice]);

  // other functions
  useEffect(() => {
    const queryParams = new URLSearchParams(router.query);

    if (selectedCities.length > 0) {
      queryParams.set("city", selectedCities.join(","));
    } else {
      queryParams.delete("city");
    }

    if (selectedBuilders.length > 0) {
      queryParams.set("builder", selectedBuilders.join(","));
    } else {
      queryParams.delete("builder");
    }

    if (searchTerm) {
      queryParams.set("searchTerm", searchTerm);
    } else {
      queryParams.delete("searchTerm");
    }

    // Prevent infinite loop by checking if query parameters changed
    const newQueryString = queryParams.toString();
    if (newQueryString !== router.query.toString()) {
      router.replace({
        pathname: router.pathname,
        query: newQueryString,
      });
    }
  }, [selectedCities, selectedBuilders, searchTerm]);

  const handelsearchTermChange = (e) => {
    setsearchTerm(e.target.value);
  };

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
        return [...prevSelectedBuilders, builder];
      } else {
        return prevSelectedBuilders.filter(
          (selectedBuilder) => selectedBuilder !== builder
        );
      }
    });
  };

  const handleReset = () => {
    setSelectedCities([]);
    setSelectedBuilders([]);
    setNormalizedPrice(0);
    setsearchTerm("");
    // Clear query parameters by replacing the URL
    router.replace(router.pathname);
  };

  return {
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
