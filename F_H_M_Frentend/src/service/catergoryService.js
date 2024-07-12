import axios from "../config/Axios";

export const fetchCategories = (pagination) => {
  return axios.get("/category/getAllCategory", { params: pagination });
};

export const fetchCategoryId = (pagination) => {
  return axios.get("/category/getAllParentId", { params: pagination });
};

export const createParentCategory = (categoryData) => {
  return axios.post("/category/parent", categoryData);
};
export const createChildCategory = (categoryData) => {
  return axios.post("/category/child", categoryData);
};

export const updateCategory = (id, categoryData) => {
  return axios.put(`/category/${id}`, categoryData);
};

export const deleteCategory = (id) => {
  return axios.delete(`/category/${id}`);
};

export const searchCategories = (params) => {
  return axios.get(`/category/search`, { params });
};

export const searchActiveServices = (params) => {
  return axios.get(`/categories/active-services`, { params });
};
