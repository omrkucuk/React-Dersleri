import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartSlice = createSlice({
  name: "cart", // action type prefix olur: "cart/addItem", "cart/removeItem"
  initialState: {
    items: [], // {id, title, price, image, quantity}
    isOpen: false,
  },
  reducers: {
    // dispatch(addItem(product)) -> {type: "cart/addItem", payload: product}
    addItem(state, action) {
      const existing = state.items.find((i) => i.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem(state, action) {
      // action.payload - silinecek ürünün id'si
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

// Action creator'ları export et - componentlerde dispatch ile kullanılır
export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  openCart,
  closeCart,
} = cartSlice.actions;

// Selector'lar - store'dan veri okumak için
// Component'de: const items = useSelector(selectCartItems)
export const selectCartItems = (state) => state.cart.items;
export const selectIsCartOpen = (state) => state.cart.isOpen;

// Hesaplanmış selector'lar - her seferinde component içinde hesaplama yapma
export const selectCartCount = (state) => state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectCartSubtotal = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

// Parametre alan selector - belirli ürünün sepette olup olmadığını kontrol eder
// Component'de: useSelector(selectIsInCart(id))
export const selectIsInCart = (id) => (state) => state.cart.items.some((i) => i.id === id);

// Memoized Selector
//#region Memoized Selector

const selecItems = (state) => state.cart.items;

export const selectCartSummary = createSelector([selecItems], (items) => ({
  count: items.reduce((sum, i) => sum + i.quantity, 0),
  subTotal: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  isEmpty: items.length === 0,
}));

// Kullanım
function CartSummary() {
  const { count, subTotal, isEmpty } = useSelector(selectCartSummary);
}

//#endregion

export default cartSlice.reducer;
