import { createContext, useState } from "react";
import Layout from "./components/layout/Layout";

export const ThemeContext = createContext({});

const App = ({ url }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  const value = {
    darkTheme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      <Layout url={url} />
    </ThemeContext.Provider>
  );
};

export default App;
