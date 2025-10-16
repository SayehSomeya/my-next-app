export default function Header() {
  return (
    <header className="backdrop-blur sticky top-0 z-40 bg-white/60 dark:bg-slate-900/60 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            Ditt Namn
          </a>
          <span className="hidden md:inline text-sm text-muted">
            Frontend • UX • Next.js
          </span>
        </div>
        <nav aria-label="Header" />
      </div>{' '}
    </header>
  )
}
