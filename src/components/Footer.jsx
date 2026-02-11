import { HiOutlineHeart } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-border bg-dark-light">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="font-display text-lg font-bold tracking-tight hoverable">
          <span className="text-accent-light">T</span>race
          <span className="text-text-muted">.</span>
        </a>

        {/* Center text */}
        <p className="text-sm text-text-muted flex items-center gap-1.5">
          Crafted with{' '}
          <HiOutlineHeart className="text-accent-light" size={14} /> by Trace
          Nobles
        </p>

        {/* Year */}
        <p className="text-sm text-text-muted font-mono">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
