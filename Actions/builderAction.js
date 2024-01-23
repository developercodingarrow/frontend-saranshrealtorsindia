import { performAPIAction, performGetAPIAction } from "./performAPIAction";

// API for CREATE NEW USER
export const createNewBuilder = async (requestData) => {
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/builder/create-builder";
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const allBuilder = async () => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/builder/all-builders`;
  return performGetAPIAction(url);
};
