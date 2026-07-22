import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "React öğren", done: false },
    { id: 2, text: "Proje yap", done: false },
  ]);

  // Ekleme
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, done: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // Silme
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Güncelleme (done toggle)
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", gap: 10 }}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => addTodo(inputValue)}>Ekle</button>
      </div>

      <ul style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              gap: 50,
            }}
          >
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none", cursor: "pointer" }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
