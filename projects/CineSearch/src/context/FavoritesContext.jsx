import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // localStorage'den başlangıç değerini oku
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });

  // favorites değişince localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item) => setFavorites((prev) => [...prev, item]);

  const removeFavorite = (id) => setFavorites((prev) => prev.filter((f) => f.id !== id));

  const isFavorite = (id) => favorites.some((f) => f.id === id);

  const toggleFavorite = (item) =>
    isFavorite(item.id) ? removeFavorite(item.id) : addFavorite(item);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites FavoritesProvider içinde kullanılmalı");
  return ctx;
}
