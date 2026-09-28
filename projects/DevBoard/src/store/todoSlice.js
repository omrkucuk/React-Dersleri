import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    filter: "all",
    search: "",
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setFilter, setSearch } = todoSlice.actions;
export default todoSlice.reducer;
