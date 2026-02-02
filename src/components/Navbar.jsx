import { useTheme } from "../context/ThemeContext";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { theme } = useTheme();
  return (
    <nav
      data-theme={theme}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-primary/98 backdrop-blur-md shadow-sm [data-theme=light]:bg-white [data-theme=light]:border-stone-200 [data-theme=light]:shadow"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Logo className="h-8" showText={true} />
        <div className="flex items-center gap-4">
          <div className="flex gap-5 text-sm">
            <a href="#about" className="text-muted hover:text-accent transition-colors">About</a>
            <a href="#work" className="text-muted hover:text-accent transition-colors">Work</a>
            <a href="#projects" className="text-muted hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="text-muted hover:text-accent transition-colors">Contact</a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
