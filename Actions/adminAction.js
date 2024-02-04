import { performAPIAction, performGetAPIAction } from "./performAPIAction";
import { getLoginCookies } from "./authAction";

const loginToken = getLoginCookies();

export const createAdmin = async (requestData) => {
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/user/create-admin";
  const method = "post";
  return performAPIAction(method, url, requestData, loginToken);
};

export const verifyOtp = async (requestData, verifyToken) => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/user/verify-otp/${verifyToken}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const allAdmins = async () => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/admins/all-admins`;
  return performGetAPIAction(url, loginToken);
};
