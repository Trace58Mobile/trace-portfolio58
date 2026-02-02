/**
 * Creative logo: smartphone + code brackets = Mobile Developer.
 */
export default function Logo({ className = "h-8", showText = true }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-2.5 text-text hover:text-accent transition-colors group ${className}`}
      aria-label="Trace Dev - Mobile Developer"
    >
      {/* SVG: Phone with </> inside = Mobile Developer */}
      <svg
        viewBox="0 0 40 40"
        className="w-9 h-9 shrink-0 text-accent"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Rounded phone body */}
        <rect
          x="6"
          y="2"
          width="28"
          height="36"
          rx="5"
          ry="5"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text group-hover:text-accent transition-colors"
        />
        {/* Screen area */}
        <rect
          x="9"
          y="5"
          width="22"
          height="28"
          rx="3"
          className="fill-primary stroke-border group-hover:stroke-accent/40 stroke transition-colors"
        />
        {/* Code brackets </> */}
        <text
          x="20"
          y="22"
          textAnchor="middle"
          fill="currentColor"
          style={{ fontSize: 9, fontFamily: "ui-monospace, monospace", fontWeight: 700 }}
        >
          {"</>"}
        </text>
        {/* Home indicator (mobile detail) */}
        <rect
          x="17"
          y="34"
          width="6"
          height="2"
          rx="1"
          className="fill-current opacity-50"
        />
      </svg>
      {showText && (
        <span className="flex flex-col items-start leading-tight">
          <span className="text-sm sm:text-base font-bold tracking-tight">Trace</span>
          <span className="text-[10px] font-medium text-accent uppercase tracking-widest">Mobile Dev</span>
        </span>
      )}
    </a>
  );
}
