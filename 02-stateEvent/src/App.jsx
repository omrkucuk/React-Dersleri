import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ToggleBox from "./components/ToggleBox";
import NameDisplay from "./components/NameDisplay";
import UserForm from "./components/UserForm";
import TodoList from "./components/TodoList";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SaveButton from "./components/SaveButton";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      {/* <Counter/> */}
      {/* <ToggleBox/> */}
      {/* <NameDisplay /> */}
      {/* <UserForm /> */}
      {/* <TodoList /> */}
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      <SaveButton />
    </>
  );
}

export default App;
