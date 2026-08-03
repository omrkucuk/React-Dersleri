import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ items, onToggle, onDelete }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="text-3xl mb-2">🛒</p>
        <p className="text-sm">Liste boş. Ürün ekle!</p>
      </div>
    );
  }

  return (
    <ul className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {items.map((item) => (
        <ShoppingItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ShoppingList;
