import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectIsLoggedIn = (state) => !!state.user.currentUser;

export default userSlice.reducer;
