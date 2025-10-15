'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Modern Web App',
      description:
        'A performant, accessible web app built with Next.js and Tailwind CSS.',
      tech: ['Next.js', 'Tailwind', 'Vercel'],
      href: '#',
    },
    {
      id: 2,
      title: 'Design System',
      description:
        'Component-driven design system with tokens and accessible components.',
      tech: ['React', 'Storybook', 'TypeScript'],
      href: '#',
    },
    {
      id: 3,
      title: 'E‑commerce UI',
      description: 'Fast checkout flows and delightful micro-interactions.',
      tech: ['Stripe', 'React Query'],
      href: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-surface text-foreground antialiased">
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
          <nav aria-label="Huvudnavigation">
            <ul className="flex gap-4 items-center text-sm">
              <li>
                <a className="nav-link" href="https://www.google.com/">
                  Projekt
                </a>
              </li>
              <li>
                <a className="nav-link" href="https://www.google.com/">
                  Om
                </a>
              </li>
              <li>
                <a className="nav-link" href="https://www.google.com/">
                  Kontakt
                </a>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="max-w-6xl mx-auto px-6 pt-12 sm:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-accent">
              Hej, jag är
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
              Ditt Namn —{' '}
              <span className="text-gradient">
                byggare av snabba upplevelser
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-xl">
              Jag designar och utvecklar moderna webbapplikationer med fokus på
              prestanda, tillgänglighet och skalbarhet. Jag använder senaste
              Next.js och moderna verktyg för att leverera produktionklar kod.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="btn-outline px-4 py-2 rounded-md">
                Se projekt
              </a>
              <a href="/cv.pdf" className="btn-primary px-4 py-2 rounded-md">
                Ladda ner CV
              </a>
            </div>
          </div>

          <aside aria-hidden className="hidden lg:flex justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5 transform-gpu hover:scale-[1.02] transition">
              <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-20"
                >
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#g)" />
                </svg>
                <div className="absolute text-white text-center p-6">
                  <p className="text-sm font-medium">Featured project</p>
                  <h3 className="mt-2 font-bold text-2xl">Pixel-perfect UI</h3>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold">Utvalda projekt</h2>
          <p className="text-muted mt-2 max-w-2xl">
            Några projekt jag är stolt över — med fokus på resultat och teknisk
            kvalitet.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.id} className="project-card group">
                <div className="card-media" aria-hidden>
                  {/* Replace with <Image src="/path" ... /> for optimized images */}
                  <div className="h-40 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-md flex items-center justify-center">
                    <span className="text-sm text-muted">Preview</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">
                    <a href={p.href} className="link-focus">
                      {p.title}
                    </a>
                  </h3>
                  <p className="text-sm text-muted mt-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold">Om mig</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="w-full aspect-square rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
                {/* placeholder for portrait */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-sky-300 flex items-center justify-center">
                  {' '}
                  <span className="text-white font-medium">Portrait</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 text-muted">
              <p>
                Jag är en frontendutvecklare som föredrar pragmatism och tydliga
                designprinciper. Jag tycker om att konvertera design till
                tillgängliga, testbara komponenter och optimera prestanda.
              </p>

              <h3 className="mt-6 font-medium">Teknologistack</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                <li>Next.js (latest)</li>
                <li>React</li>
                <li>TypeScript (valfritt)</li>
                <li>Tailwind CSS</li>
                <li>Storybook</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold">Kontakt</h2>
          <p className="text-muted mt-2">
            Vill du arbeta tillsammans eller bara säga hej? Skicka ett
            meddelande.
          </p>

          <form
            className="mt-6 grid grid-cols-1 gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Skickat — ersätt med verklig hantering')
            }}
          >
            <label className="sr-only" htmlFor="name">
              Namn
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Ditt namn"
              className="input"
            />

            <label className="sr-only" htmlFor="email">
              E-post
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="din@email.se"
              className="input"
            />

            <label className="sr-only" htmlFor="message">
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Skriv ditt meddelande här..."
              className="input resize-y"
            />

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="btn-primary px-5 py-2 rounded-md"
              >
                Skicka
              </button>
              <p className="text-xs text-muted">
                Eller maila:{' '}
                <a href="mailto:hello@exempel.se" className="link-focus">
                  hello@exempel.se
                </a>
              </p>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200/50 dark:border-slate-800/50 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted">
          <p>© {new Date().getFullYear()} Ditt Namn — Byggd med Next.js</p>
          <nav aria-label="footer links" className="mt-3 sm:mt-0">
            <ul className="flex gap-3">
              <li>
                <a className="nav-link" href="#privacy">
                  Integritet
                </a>
              </li>
              <li>
                <a className="nav-link" href="#terms">
                  Villkor
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --bg: #0f172a;
        }
        /* Design tokens + small helpers to complement Tailwind */
        .text-gradient {
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .text-muted {
          color: rgba(100, 100, 120, 0.9);
        }
        .text-accent {
          color: #7c3aed;
        }
        .bg-surface {
          background-color: white;
        }
        .foreground {
          color: #0f172a;
        }

        .btn-primary {
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          color: white;
          padding: 0.5rem 1rem;
          box-shadow: 0 6px 18px rgba(99, 102, 241, 0.12);
        }
        .btn-outline {
          border: 1px solid rgba(15, 23, 42, 0.06);
          padding: 0.45rem 0.9rem;
        }

        .nav-link {
          color: inherit;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
        }
        .nav-link:hover {
          background: rgba(0, 0, 0, 0.03);
        }

        .project-card {
          background: transparent;
          padding: 0.75rem;
          border-radius: 0.75rem;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
        }

        .chip {
          background: rgba(15, 23, 42, 0.04);
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
        }

        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(15, 23, 42, 0.06);
          background: white;
        }
        .input:focus {
          outline: 3px solid rgba(99, 102, 241, 0.12);
        }

        .link-focus {
          position: relative;
        }
        .link-focus:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.12);
        }

        @media (prefers-color-scheme: dark) {
          :global(body) {
            background: #071024;
          }
          .bg-surface {
            background: #071025;
          }
          .text-muted {
            color: rgba(180, 190, 210, 0.7);
          }
          .btn-outline {
            border-color: rgba(255, 255, 255, 0.04);
          }
        }
      `}</style>
    </div>
  )
}
