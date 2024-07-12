import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/Axios";

const initialState = {
  clients: [],
};

export const getAllClients = createAsyncThunk(
  "customer/getAllClients",
  async () => {
    const response = await axios.get(`/customer`);
    return response.data;
  }
);

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllClients.fulfilled, (state, action) => {
      state.clients = action.payload;
    });
  },
});

export default clientsSlice.reducer;
