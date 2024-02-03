import { performAPIAction, performGetAPIAction } from "./performAPIAction";
import { getLoginCookies } from "./authAction";

const loginToken = getLoginCookies();

// API for CREATE NEW USER
export const createNewEnquirey = async (requestData) => {
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/enquiry/create-enquire";
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const allEnquire = async () => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/enquiry/all-enquirey`;
  return performGetAPIAction(url);
};
