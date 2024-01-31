import React from "react";

const usePriceFormatter = () => {
  function formatPrice(price) {
    const priceString = price.toString();

    // Remove leading zeros from the integer part
    // Remove leading zeros
    // const formattedPrice = priceString.replace(/^0*(\d+)/, "$1");
    const formattedPrice = priceString.replace(/^0*(\d+)/, "$1");
    console.log(formattedPrice);

    // Split the formatted price by the decimal point
    const parts = formattedPrice.split(".");

    // If there is no fractional part, return the integer part as is
    if (parts.length === 1) {
      return parts[0];
    }

    // Remove trailing zeros from the fractional part
    const fractionalPart = parts[1].replace(/0+$/, " ");

    // If there are no digits left in the fractional part, return only the integer part
    if (fractionalPart === "") {
      return parts[0];
    }

    // Join the integer part and the modified fractional part with a decimal point
    return parts[0] + "." + fractionalPart;
  }

  return { formatPrice };
};

export default usePriceFormatter;
