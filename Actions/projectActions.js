import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

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

export const ProjectUploadThumblin = async (formData, id) => {
  console.log(id);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/update-project-thumblin/${id}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData);
};

export const ProjectUploadCoverImages = async (formData, id) => {
  console.log(id);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/update-project-cover-images/${id}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData);
};

export const deleteProjectCoverImages = async (id, projectId) => {
  console.log(id);
  const data = {
    id: id,
  };
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/delete-cover-image/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data);
};
