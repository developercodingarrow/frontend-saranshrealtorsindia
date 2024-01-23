import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

// API for CREATE NEW USER
export const createNewBlog = async (requestData) => {
  const url =
    "http://localhost:8000/api/v1/saranshrealtorsindia/blog/create-blog";
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const getBlogByID = async (projectId) => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/blog/single-blogs/${projectId}`;
  return performGetAPIAction(url);
};

export const allBlog = async () => {
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/blog/all-blogs`;
  return performGetAPIAction(url);
};

export const updateBlog = async (requestData, projectId) => {
  console.log(requestData);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/blog/update-blog/${projectId}`;
  const method = "patch";
  return performAPIAction(method, url, requestData);
};

export const blogUploadThumblin = async (formData, projectId) => {
  console.log(projectId);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/blog/update-blog-thumblin/${projectId}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData);
};

export const blogUploadCover = async (formData, projectId) => {
  console.log(projectId);
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/blog/update-blog-cover-image/${projectId}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData);
};

export const deleteBlogThumblinImages = async (id, projectId) => {
  console.log(id);
  const data = {};
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/blog/delete-blog-thumblin/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data);
};

export const deleteBlogCoverImages = async (id, projectId) => {
  console.log(id);
  const data = {};
  const url = `http://localhost:8000/api/v1/saranshrealtorsindia/blog/delete-blog-cover-image/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data);
};
