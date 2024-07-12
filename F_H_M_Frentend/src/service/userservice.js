import axios from "../config/Axios";

export const fetchUsers = () => {
  return axios.get("http://localhost:3000/user");
};

export const fetchUser = (id) => {
  return axios.get(`/user/${id}`);
};

export const createUser = async (userData) => {
  return await axios.post("http://localhost:3000/register", userData);
};

export const createCustomer = async (userData) => {
  return await axios.post("http://localhost:3000/customer", userData);
};

export const loginUser = ({ email, password }) => {
  return axios.post("/login", { email, password });
};

export const updateUser = ({ id, userData }) => {
  return axios.put(`/user/${id}`, userData);
};

export const updateCustomer = ({ id, userData }) => {
  return axios.put(`/customer/${id}`, userData);
};

export const deleteUser = (id) => {
  return axios.delete(`/user/${id}`);
};

export const deleteCustomer = (id) => {
  return axios.delete(`/user/${id}`);
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
