import { create } from "zustand";

// create() - store oluşturur ve bir hook döner
// set - state güncelleme fonksiyonu
// get - mevcut state'i okuma fonksiyonu
const useCartStore = create((set, get) => ({
  // --- STATE ---
  items: [],
  isOpen: false,

  // --- ACTION'LAR ---
  // set() içinde state'in yeni halini döndürürsün
  // Redux'taki gibi action type yazmak gerekmez

  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  incrementQuantity: (id) =>
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    })),

  decrementQuantity: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        (i.id === id ? { ...i, quantity: i.quantity - 1 } : i).filter((i) => i.quantity > 0),
      ),
    })),

  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  // get() ile mevcut state'e erişilir

  getCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
  getSubtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  isInCart: (id) => get().items.some((i) => i.id === id),
}));

export default useCartStore;

// Kullanımı - Provider yok, direkt hook çağrısı
// Sadece ihtiyaç duyulan slice seçilir - gereksiz render önlenir

function CartIcon() {
  const count = useCartStore((state) => state.getCount());
  const openCart = useCartStore((state) => state.openCart());

  return <button onClick={openCart}>{count}</button>;
}

function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const inCart = useCartStore((state) => state.isInCart(product.id));

  const handleAdd = () => {
    addItem(product);
    openCart();
  };

  return <button onClick={handleAdd}>{inCart ? "Sepette" : "Sepete Ekle"}</button>;
}
