import { Hero } from "./Component/Hero";
import { NavBar } from "./Component/NavBar"
import { useEffect, useState } from "react";
import {About} from "./Component/About.tsx";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero/>
      <About/>
    </div>
  )
}

export default App
