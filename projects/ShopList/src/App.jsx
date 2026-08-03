import { Toaster } from "react-hot-toast";
import AddItemForm from "./components/AddItemForm";
import { useState } from "react";
import Summary from "./components/Summary";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Ekmek", quantity: 2, completed: false },
    { id: 2, name: "Süt", quantity: 1, completed: false },
  ]);

  const addItem = (name, quantity) => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), name, quantity: Number(quantity), completed: false },
    ]);
  };

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)),
    );
  };

  const deleteItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id));

  const clearCompleted = () => {
    setItems((prev) => prev.filter((item) => !item.completed));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-lg mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Alışveriş Listesi</h1>
        <Summary items={items} onClearCompleted={clearCompleted} />
        <AddItemForm onAdd={addItem} />
        <ShoppingList items={items} onDelete={deleteItem} onToggle={toggleItem} />
      </div>
    </div>
  );
};

export default App;
