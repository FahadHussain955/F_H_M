import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import {
  fetchUsers,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  forgetPassword,
  resetPassword,
  fetchUser,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../../service/userservice";

const initialState = {
  users: [],
  user: null,
};

export const getAllUsers = createAsyncThunk("user", async () => {
  const response = await fetchUsers();
  return response.data;
});
export const getUser = createAsyncThunk("user/getUser", async (id) => {
  const response = await fetchUser(id);
  return response.data;
});

export const login = createAsyncThunk(
  "/login",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await loginUser({ email, password });
      const token = response.data.authToken.refreshToken;
      dispatch(storeToken(token));
      return response.data;
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  }
);

export const storeToken = createAction("user/login/storeToken");

export const addUser = createAsyncThunk("register", async (userData) => {
  try {
    const response = await createUser(userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error.message);
    throw error.response.data.message;
  }
});

export const addCustomer = createAsyncThunk("customer", async (userData) => {
  try {
    const response = await createCustomer(userData);
    return response.data;
  } catch (error) {

    console.error("Error adding customer:", error.message);
    throw error.response.data.message;
  }
});

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

export const update_Customer = createAsyncThunk(
  "/customer/update",
  async ({ id, ...userData }) => {
    try {
      const response = await updateCustomer({ id, userData });
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

export const delete_Customer = createAsyncThunk("/user", async (userId) => {
  await deleteCustomer(userId);
  return userId;
});

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
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
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
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(reset_Passowrd.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export default userSlice.reducer;
