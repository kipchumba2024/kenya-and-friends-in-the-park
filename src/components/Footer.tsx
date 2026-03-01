import { FaMoon, FaSun } from 'react-icons/fa'
import type { MenuItem } from './types'

type FooterProps = {
  menuItems: MenuItem[]
  onNavigate: (path: string) => void
  isDark: boolean
  onToggleTheme: () => void
}

export function Footer({ menuItems, onNavigate, isDark, onToggleTheme }: FooterProps) {
  const footerLinks = menuItems.slice(0, 4)
  const year = new Date().getFullYear()

  return (
    <footer className="m-4 mt-12 rounded-2xl border border-gray-100 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="mb-4 flex items-center space-x-3 sm:mb-0"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('/')
            }}
          >
            <img src="/images/kenya-logo.png" className="h-10 w-10 rounded-full object-cover" alt="Kenya in the Park logo" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-slate-900 dark:text-white">Kenya in the Park</span>
          </a>

          <div className="flex flex-col gap-4 sm:items-end">
            <ul className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300 sm:mb-0 md:gap-x-6">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    onClick={(event) => {
                      event.preventDefault()
                      onNavigate(item.path)
                    }}
                    className="transition hover:text-red-700 hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-red-600 hover:text-red-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-red-500 dark:hover:text-red-400"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>

        <hr className="my-6 border-gray-100 dark:border-slate-800 sm:mx-auto lg:my-8" />

        <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 sm:text-center">
          <p>
            General info: +44 747 620 9900 Ruth Dube | Stalls: +44 741 494 4464 | Volunteers: +44 744 608 2958 |
            Email: kenyainthepark@gmail.com
          </p>
          <span className="block">
            © {year}{' '}
            <a
              href="/"
              className="font-medium text-red-600 transition hover:text-red-700 hover:underline"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('/')
              }}
            >
              Kenya in the Park
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
