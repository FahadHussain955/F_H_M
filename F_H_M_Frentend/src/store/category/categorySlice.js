import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  searchCategories,
  searchActiveServices,
  createParentCategory,
  fetchCategoryId,
  createChildCategory,
} from "../../service/catergoryService";

const initialState = {
  category: [],
};

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async (pagination) => {
    try {
      const response = await fetchCategories(pagination);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const getAllParentId = createAsyncThunk(
  "category/getAllParentId",
  async (pagination) => {
    try {
      const response = await fetchCategoryId(pagination);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const search_Categories = createAsyncThunk(
  "category/search",
  async ({ names }) => {
    const response = await searchCategories({ names });
    if (response.data.Name == names) {
      return response.data;
    }
  }
);

export const getActiveServices = createAsyncThunk(
  "services/getActiveServices",
  async ({ query }) => {
    const response = await searchActiveServices({ query });
    return response?.data?.data;
  }
);

export const addParentCategory = createAsyncThunk(
  "users/addcategory",
  async (categoryData) => {
    try {
      const response = await createParentCategory(categoryData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
export const addChildCategory = createAsyncThunk(
  "users/addcategory",
  async (categoryData) => {
    try {
      const response = await createChildCategory(categoryData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const update_Category = createAsyncThunk(
  "users/updateCategory",
  async ({ id, ...categoryData }) => {
    try {
      const response = await updateCategory(id, categoryData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const delete_Category = createAsyncThunk(
  "users/deleteCategory",
  async (categoryId) => {
    await deleteCategory(categoryId);
    return categoryId;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(search_Categories.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(getActiveServices.fulfilled, (state, action) => {
        state.activeService = action.payload;
      });

    // .addCase(addCategory.fulfilled, (state, action) => {
    //   state.category.push(action.payload);
    // })
    // .addCase(update_Category.fulfilled, (state, action) => {
    //   const updatedCategory = action.payload;
    //   const index = state.category.findIndex(
    //     (category) => category.id === updatedCategory.id
    //   );
    //   state.category[index] = updatedCategory;
    // });
    // .addCase(delete_Category.fulfilled, (state, action) => {
    //   const categoryId = action.payload;
    //   state.category = state.category.filter(
    //     (category) => category.id !== categoryId
    //   );
    // });
  },
});

export default categorySlice.reducer;
