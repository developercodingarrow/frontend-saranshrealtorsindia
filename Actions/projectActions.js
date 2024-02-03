import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies } from "./authAction";

const loginToken = getLoginCookies();

// API for CREATE NEW USER
export const createNewProject = async (requestData) => {
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/project/create-project";
  const method = "post";
  return performAPIAction(method, url, requestData, loginToken);
};

export const getProjectByID = async (id) => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/get-single-project/${id}`;
  return performGetAPIAction(url, loginToken);
};

export const getAllProjetcs = async () => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/get-all-projects`;
  return performGetAPIAction(url, loginToken);
};

export const fillterdProjetcs = async (queryObj) => {
  const query = new URLSearchParams(queryObj);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/fillter-projects?${query}`;
  return performGetAPIAction(url);
};

export const uiProjectByID = async (slug) => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/get-project/${slug}`;
  return performGetAPIAction(url);
};

export const deleteProject = async (requestData) => {
  const data = {
    id: requestData,
  };
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/project/delete-project";
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const updateFeatureProject = async (projectId) => {
  const data = {};
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/update-feature-project/${projectId}`;
  const method = "patch";
  return performAPIAction(method, url, data, loginToken);
};

export const isActiveProject = async (projectId) => {
  const data = {};
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/update-is-active/${projectId}`;
  const method = "patch";
  return performAPIAction(method, url, data, loginToken);
};

export const ProjectUploadThumblin = async (formData, id) => {
  console.log(id);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/update-project-thumblin/${id}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, loginToken);
};

export const ProjectUploadCoverImages = async (formData, id) => {
  console.log(id);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/update-project-cover-images/${id}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, loginToken);
};

export const ProjectFloorPlanImages = async (formData, id) => {
  console.log(id);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/update-project-floor-plan-images/${id}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, loginToken);
};

export const deleteProjectCoverImages = async (id, projectId) => {
  console.log(id);
  const data = {
    imageId: id,
  };
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/delete-cover-image/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const deleteProjectFloorPlanImages = async (id, projectId) => {
  console.log(id);
  const data = {
    imageId: id,
  };
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/delete-floor-plan-image/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const deleteProjectThumblinImages = async (id, projectId) => {
  console.log(id);
  const data = {};
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/delete-project-thumblin/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const UpdateProjectDeatils = async (requestData, projectId) => {
  console.log(requestData);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/project/update-project/${projectId}`;
  const method = "patch";
  return performAPIAction(method, url, requestData, loginToken);
};
