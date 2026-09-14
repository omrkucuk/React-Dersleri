import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../lib/axios";
import { useEffect } from "react";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (category, { rejeWithValue }) => {
    try {
      const { data } = await api.get("/products", { params: { category } });
      return data; // fulfilled action'ının payload'ı olur
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        ((state.loading = false), (state.error = null), (state.items = action.payload));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectProducts = (state) => state.products.items;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;

export default productSlice.reducer;

// Component Kullanımı

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
}
