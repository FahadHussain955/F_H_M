import axios from "../config/Axios";

export const createProduct = async (userData) => {
  return await axios.post("http://localhost:3000/product", userData);
};

export const updateProduct = ({ id, userData }) => {
  return axios.put(`/product/${id}`, userData);
};

export const fetchAllPRoductId = (pagination) => {
  return axios.get("/category/getAllId", { params: pagination });
};

export const deleteUser = (id) => {
  return axios.delete(`/user/${id}`);
};

export const deleteProduct = (id) => {
  return axios.delete(`/product/${id}`);
};



export const forgetPassword = (email) => {
  return axios.post("/user/forgot-password", { email });
};

export const resetPassword = (userData) => {
  return axios.post("/users/reset-password", userData);
};

export const createAdminUser = async (adminData) => {
  const { data } = await axios.post("/users/admin/create", adminData);
  return data?.data;
};

export const deleteAdminUser = async (userId) => {
  const { data } = await axios.delete(`users/admin/${userId}`);
  return data?.data;
};

export const getAdminUsers = async () => {
  const { data } = await axios.get("/users/admin/all");
  return data;
};

export const updateAdminUser = async ({ id, ...updateData }) => {
  const { data } = await axios.put(`/users/admin/${id}`, updateData);
  return data;
};

export const updatePermission = async ({ userId, permissions }) => {
  const { data } = await axios.patch(
    `/users/update-permission/${userId}`,
    permissions
  );
  return data;
};
