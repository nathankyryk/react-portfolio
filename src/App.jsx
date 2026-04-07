import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Interests } from "./components/Interests";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <Projects />
      <Interests />
      <Contact />

      <footer className="footer">
        <p className="footer-legal">© {new Date().getFullYear()} Nathan Kyryk. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;