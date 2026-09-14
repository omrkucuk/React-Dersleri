import { createContext, useState } from "react";

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <ThemeContext.Provider value={{ theme, user, cart }}>
      <App />
    </ThemeContext.Provider>
  );
};

export default App;
