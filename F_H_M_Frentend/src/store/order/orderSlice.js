import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import {
  updateUser,
  deleteUser,
  updateCustomer,
} from "../../service/userservice";
import { createOrder, createProduct, deleteOrder, fetchCategories, fetchOrder, updateOrder, updateOrderStatus } from "../../service/orderservice";


const initialState = {
  users: [],
  user: null,
};


export const addOrder = createAsyncThunk("product", async (userData) => {
  try {
    const response = await createOrder(userData);
    return response.data;
  } catch (error) {
    console.error("Error adding customer:", error.message);
    throw error.response.data.message;
  }
});

export const update_User = createAsyncThunk(
  "/user/update",
  async ({ id, ...userData }) => {
    const response = await updateUser({ id, userData });
    return response.data;
  }
);

export const update_Order = createAsyncThunk(
  "/Order/update",
  async ({ id, ...userData }) => {
    const response = await updateOrder({ id, userData });
    return response.data;
  }
);

export const update_OrderStatus = createAsyncThunk(

  "/Order/update",
  async ({ id, ...userData }) => {
    const response = await updateOrderStatus({ id, userData });
    return response.data;
  }
);

export const delete_User = createAsyncThunk("/user", async (userId) => {
  await deleteUser(userId);
  return userId;
});

export const delete_Order = createAsyncThunk("/user", async (userId) => {
  await deleteOrder(userId);
  return userId;
});


export const getAllorder = createAsyncThunk(
  "Order/getAllOrder",
  async () => {
    const response = await fetchOrder();
    localStorage.setItem("Data", JSON.stringify(response.data));

    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(update_User.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.users.findIndex(
          (user) => user.id === updatedUser.id
        );
        state.users[index] = updatedUser;
      })
      .addCase(delete_User.fulfilled, (state, action) => {
        const userId = action.payload;
        state.users = state.users.filter((user) => user.id !== userId);
      })

  },
});

export default userSlice.reducer;
