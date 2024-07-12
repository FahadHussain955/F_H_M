import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import {
  updateUser,
  deleteUser,
  updateCustomer,
} from "../../service/userservice";
import { createOrder, createProduct, deleteOrder, fetchCategories, fetchOrder, updateOrder } from "../../service/orderservice";
import { createOrderItem, deleteOrderItem, fetchOrderItem, updateOrderItem } from "../../service/orderItemservice";


const initialState = {
  users: [],
  user: null,
};


export const addOrderItem = createAsyncThunk("product", async (userData) => {
  try {
    const response = await createOrderItem(userData);
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

export const update_OrderItem = createAsyncThunk(
  "/Order/update",
  async ({ id, ...userData }) => {
    const response = await updateOrderItem({ id, userData });
    return response.data;
  }
);

export const delete_User = createAsyncThunk("/user", async (userId) => {
  await deleteUser(userId);
  return userId;
});

export const delete_OrderItem = createAsyncThunk("/user", async (userId) => {
  await deleteOrderItem(userId);
  return userId;
});


export const getAllorderItem = createAsyncThunk(
  "OrderItem/getAllOrderItem",
  async () => {
    const response = await fetchOrderItem();
    localStorage.setItem("ItemData", JSON.stringify(response.data));

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
