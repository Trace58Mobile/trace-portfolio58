import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        rounded-full p-2.5 transition-all duration-300 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        border-2
        ${isLight
          ? "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100 hover:border-amber-300 focus:ring-offset-[#fafaf9]"
          : "bg-surface border-border text-muted hover:text-text hover:bg-white/10 focus:ring-offset-primary"
        }
      `}
    >
      {theme === "dark" ? (
        /* Sun icon – click to switch to light */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        /* Moon icon – click to switch to dark */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162 1.035l-.518.698a.75.75 0 11-.894-1.32l.518-.698a.75.75 0 011.035-.162zM6.75 6.75a.75.75 0 010 1.06l-.696.697a.75.75 0 11-1.06-1.06l.697-.697a.75.75 0 011.06 0zm2.25 0a.75.75 0 011.06 0l.697.697a.75.75 0 11-1.06 1.06l-.697-.697a.75.75 0 010-1.06zM4.5 12a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zm15 0a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zm-12 7.5a.75.75 0 01.162-1.035l.518-.698a.75.75 0 11.894 1.32l-.518.698a.75.75 0 01-1.035.162zm10.44-10.44a.75.75 0 010 1.06l-.697.696a.75.75 0 11-1.06-1.06l.697-.697a.75.75 0 011.06 0zm-1.06 8.132l.697.697a.75.75 0 11-1.06 1.06l-.697-.697a.75.75 0 011.06-1.06zM12 4.5a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zm0 15a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
