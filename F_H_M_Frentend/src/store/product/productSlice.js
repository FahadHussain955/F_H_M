import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import {
  updateUser,
  deleteUser,
  forgetPassword,
  resetPassword,
} from "../../service/userservice";
import { createProduct, deleteProduct, fetchAllPRoductId, updateProduct } from "../../service/productservice";
import axios from "axios";

const initialState = {
  users: [],
  user: null,
};


export const addProduct = createAsyncThunk("product", async (userData) => {
  try {
    const response = await createProduct(userData);
    return response.data;
  } catch (error) {
    console.error("Error adding customer:", error.message);
    throw error.response.data.message;
  }
});

export const getAllProductId = createAsyncThunk(
  "category/getAllParentId",
  async () => {
    try {
      const response = await fetchAllPRoductId();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const update_User = createAsyncThunk(
  "/user/update",
  async ({ id, ...userData }) => {
    try {
      const response = await updateUser({ id, userData });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const update_Product = createAsyncThunk(
  "/product/update",
  async ({ id, ...userData }) => {
    try {
      const response = await updateProduct({ id, userData });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const delete_User = createAsyncThunk("/user", async (userId) => {
  await deleteUser(userId);
  return userId;
});

export const delete_Product = createAsyncThunk("/product", async (userId) => {
  await deleteProduct(userId);
  return userId;
});

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const response = await axios.get(`http://localhost:3000/product`);
    localStorage.setItem("ProductData", JSON.stringify(response.data));
    return response.data;
  }
);

export const forgotPassowrd = createAsyncThunk(
  "users/forgot-Password",
  async (email) => {
    try {
      const response = await forgetPassword(email);
      return response.data;
    } catch (error) {
      console.error("Error forget password:", error.message);
      throw error;
    }
  }
);
export const reset_Passowrd = createAsyncThunk(
  "users/resetPassword",
  async (userData) => {
    try {
      const response = await resetPassword(userData);
      return response;
    } catch (error) {
      console.error("Error reset passord : ", error.message);
      throw error;
    }
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
      .addCase(forgotPassowrd.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(reset_Passowrd.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export default userSlice.reducer;
