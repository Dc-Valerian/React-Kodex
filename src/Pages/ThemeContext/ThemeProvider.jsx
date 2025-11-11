// src/context/ThemeContext.jsx
import React, { createContext, useState } from "react";

// 1️⃣ Create a context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 2️⃣ Keep track of current theme
  const [theme, setTheme] = useState("light");

  // 3️⃣ Function to toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 4️⃣ Wrap children with provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Apply background color based on theme */}
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#111",
          color: theme === "light" ? "#111" : "#fff",
          minHeight: "100vh",
          transition: "0.4s ease-in-out",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// src/context/ThemeContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// // 1️⃣ Create a context
// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // 2️⃣ Load saved theme from localStorage OR default to light
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme ? savedTheme : "light";
//   });

//   // 3️⃣ Update localStorage whenever theme changes
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // 4️⃣ Function to toggle between light and dark
//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   // 5️⃣ Return Provider and apply background styles
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div
//         style={{
//           backgroundColor: theme === "light" ? "#fff" : "#111",
//           color: theme === "light" ? "#111" : "#fff",
//           minHeight: "100vh",
//           transition: "0.4s ease-in-out",
//         }}
//       >
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };
