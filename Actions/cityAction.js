import { performAPIAction, performGetAPIAction } from "./performAPIAction";

// API for CREATE NEW USER
export const createNewCity = async (requestData) => {
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/city/create-city";
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const allCity = async () => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/city/all-cites`;
  return performGetAPIAction(url);
};
