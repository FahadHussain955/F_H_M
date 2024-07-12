import axios from "../config/Axios";

export const fetchService = () => {
  return axios.get("/services");
};

export const createService = (serviceData) => {
  return axios.post("/services", serviceData);
};

export const updateService = (id, serviceData) => {
  return axios.put(`/services/${id}`, serviceData);
};

export const deleteService = (id) => {
  return axios.delete(`/services/${id}`);
};
