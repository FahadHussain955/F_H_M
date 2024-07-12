import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import {
  fetchService,
  createService,
  updateService,
  deleteService,
} from "../../service/serviceService";

const initialState = {
  services: [],
};

export const getAllServices = createAsyncThunk(
  "services/getAllservices",
  async () => {
    const response = await fetchService();
    return response.data;
  }
);

export const addServices = createAsyncThunk(
  "services/addservices",
  async (serviceData) => {
    const response = await createService(serviceData);
    return response.data;
  }
);

export const update_Services = createAsyncThunk(
  "service/updateServices",
  async (serviceData) => {
    const response = await updateService(serviceData);
    return response.data;
  }
);

export const delete_ClientRequest = createAsyncThunk(
  "ClientRequest/deleteClientRequest",
  async (serviceId) => {
    await deleteService(serviceId);
    return serviceId;
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(addServices.fulfilled, (state, action) => {
        state.services.push(action.payload);
      })
      .addCase(update_Services.fulfilled, (state, action) => {
        const updatedService = action.payload;
        const index = state.services.findIndex(
          (services) => services.id === updatedService.id
        );
        state.services[index] = updatedService;
      })
      .addCase(delete_ClientRequest.fulfilled, (state, action) => {
        const serviceId = action.payload;
        state.services = state.services.filter(
          (services) => services.id !== serviceId
        );
      });
  },
});

export default serviceSlice.reducer;
