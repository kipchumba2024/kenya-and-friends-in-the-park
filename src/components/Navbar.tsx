import { useState } from 'react'
import { FaBars, FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTimes, FaYoutube } from 'react-icons/fa'

type NavItem = {
  label: string
  path: string
  children?: NavItem[]
}

type NavbarProps = {
  menuItems: NavItem[]
  currentPath: string
  onNavigate: (path: string) => void
  isDark: boolean
  onToggleTheme: () => void
}

export function Navbar({ menuItems, currentPath, onNavigate, isDark, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const facebookHref = 'https://www.facebook.com/profile.php?id=100091922837193'
  const emailHref = 'mailto:kenyainthepark@gmail.com'
  const phoneHref = 'tel:+447476209900'

  const isActive = (path: string) => currentPath === path

  const handleNavigate = (path: string) => {
    onNavigate(path)
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 font-poppins backdrop-blur transition-colors dark:bg-slate-950/95">
      <div className="bg-red-50/80 dark:bg-slate-900/80">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-2 text-sm">
          <div className="flex min-w-0 items-center gap-3 text-slate-700 dark:text-slate-200 sm:gap-5">
            <a
              href={emailHref}
              className="hidden items-center gap-2 transition hover:text-red-600 dark:hover:text-red-400 sm:inline-flex"
            >
              <FaEnvelope className="h-3.5 w-3.5 text-red-600" />
              <span>kenyainthepark@gmail.com</span>
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium shadow-sm transition hover:text-red-600 dark:bg-slate-950/40 dark:hover:text-red-400 sm:gap-2 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm sm:shadow-none"
            >
              <FaPhoneAlt className="h-3.5 w-3.5 text-red-600" />
              <span>+44 747 620 9900</span>
            </a>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2">
            <a
              href={facebookHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-red-200 text-red-600 transition hover:border-red-700 hover:bg-red-700 hover:text-white dark:border-slate-700 dark:text-slate-100 dark:hover:border-red-700 dark:hover:bg-red-700"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF className="h-3.5 w-3.5" />
            </a>
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-red-200 text-red-600 dark:border-slate-700 dark:text-slate-100"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </span>
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-red-200 text-red-600 dark:border-slate-700 dark:text-slate-100"
              aria-label="YouTube"
              title="YouTube"
            >
              <FaYoutube className="h-4 w-4" />
            </span>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-red-200 text-red-600 transition hover:border-red-700 hover:bg-red-700 hover:text-white dark:border-slate-700 dark:text-slate-100 dark:hover:border-red-700 dark:hover:bg-red-700"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
            >
              {isDark ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M21.75 15.5A9.75 9.75 0 0 1 8.5 2.25a.75.75 0 0 0-.83.98A8.25 8.25 0 1 0 20.77 16.33a.75.75 0 0 0 .98-.83Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex items-center gap-3"
            onClick={(event) => {
              event.preventDefault()
              handleNavigate('/')
            }}
          >
            <img src="/images/kenya-logo.png" alt="Kenya in the Park" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Kenya in the Park</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Culture, Community, Celebration</p>
            </div>
          </a>

          <nav className="hidden flex-1 justify-center lg:flex" aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.label} className="relative group">
                  <a
                    href={item.path}
                    onClick={(event) => {
                      event.preventDefault()
                      handleNavigate(item.path)
                    }}
                    className={`rounded-md px-3 py-2 text-sm transition ${
                      isActive(item.path)
                        ? 'bg-red-600 text-white'
                        : 'text-slate-700 hover:bg-red-700 hover:text-white dark:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="invisible absolute left-0 top-full z-20 mt-2 w-80 rounded-xl border border-red-100 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.path}
                            onClick={(event) => {
                              event.preventDefault()
                              handleNavigate(child.path)
                            }}
                            className={`block rounded-md px-3 py-2 text-sm transition ${
                              isActive(child.path)
                                ? 'bg-red-600 text-white'
                                : 'text-slate-700 hover:bg-red-700 hover:text-white dark:text-slate-200'
                            }`}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-200 text-red-600 transition hover:border-red-700 hover:bg-red-700 hover:text-white dark:border-slate-700 dark:text-slate-100 dark:hover:border-red-700 dark:hover:bg-red-700 lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              type="button"
            >
              {mobileOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            className="mt-4 rounded-xl border border-red-100 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    onClick={(event) => {
                      event.preventDefault()
                      handleNavigate(item.path)
                    }}
                    className={`block rounded-md px-3 py-2 text-sm ${
                      isActive(item.path)
                        ? 'bg-red-600 text-white'
                        : 'text-slate-700 hover:bg-red-700 hover:text-white dark:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="ml-3 mt-1 space-y-1 border-l border-red-100 pl-3 dark:border-slate-700">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.path}
                            onClick={(event) => {
                              event.preventDefault()
                              handleNavigate(child.path)
                            }}
                            className={`block rounded-md px-3 py-2 text-sm ${
                              isActive(child.path)
                                ? 'bg-red-600 text-white'
                                : 'text-slate-600 hover:bg-red-700 hover:text-white dark:text-slate-300'
                            }`}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
