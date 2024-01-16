import { performAPIAction, performGetAPIAction } from "./performAPIAction";

// API for CREATE NEW USER
export const createNewProject = async (requestData) => {
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/project/create-project";
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// API FOR OTP VERIFICATION
export const getProjectByID = async (id) => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/get-single-project/${id}`;
  return performGetAPIAction(url);
};
