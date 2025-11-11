import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#222" : "#fff",
        color: theme === "light" ? "#fff" : "#222",
        borderRadius: "8px",
        border: "none",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode 🌗
    </button>
  );
}

export default ThemeButton;
