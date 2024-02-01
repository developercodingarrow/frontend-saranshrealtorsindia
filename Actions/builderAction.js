import { performAPIAction, performGetAPIAction } from "./performAPIAction";
import { getLoginCookies } from "./authAction";

const loginToken = getLoginCookies();
// API for CREATE NEW USER
export const createNewBuilder = async (requestData) => {
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/builder/create-builder";
  const method = "post";
  return performAPIAction(method, url, requestData, loginToken);
};

export const deleteBuilder = async (requestData) => {
  const data = {
    id: requestData,
  };
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/builder/delete-builder";
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const allBuilder = async () => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/builder/all-builders`;
  return performGetAPIAction(url);
};
