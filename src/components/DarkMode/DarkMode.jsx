import { useState, useEffect } from "react";
import "./DarkMode.css";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => document.documentElement.classList.contains("dark-mode")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <button className="theme" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <FaSun />        
      ) : (
        <FaMoon />
      )}
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
