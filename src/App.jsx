import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    // reducedMotion="user": no fade-ins for visitors who turned animations off.
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container footer-inner">
            <p>© {new Date().getFullYear()} Nathan Kyryk</p>
            <div className="footer-social">
              <a
                href="https://github.com/nathankyryk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nathan-kyryk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
