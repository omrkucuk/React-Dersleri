import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addItem(state, action) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    incrementQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decrementQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        } else {
          item.quantity -= 1;
        }
      }
    },

    clearCart(state) {
      state.items = [];
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  openCart,
  closeCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectIsCartOpen = (state) => state.cart.isOpen;
export const selectIsInCart = (id) => (state) => state.cart.items.some((i) => i.id === id);

const selectItems = (state) => state.cart.items;

export const selectCartCount = createSelector([selectItems], (items) =>
  items.reduce((sum, i) => sum + i.quantity, 0),
);

export const selectCartSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, i) => sum + i.price * i.quantity, 0),
);

export default cartSlice.reducer;
