import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme} className="min-h-screen bg-primary text-text transition-colors duration-300">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
