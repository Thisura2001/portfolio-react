import { Hero } from "./Component/Hero";
import { NavBar } from "./Component/NavBar"
import { useEffect, useState } from "react";
import {About} from "./Component/About.tsx";
import {TechStack} from "./Component/TechStack.tsx";
import {Projects} from "./Component/Project.tsx";
import {Contact} from "./Component/Contact.tsx";

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
        <TechStack/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App
