import { FaArrowLeft, FaTag, FaClock } from 'react-icons/fa'
import { eventDetails } from '../components/eventDetails'

type EventDetailPageProps = {
  currentPath: string
}

export function EventDetailPage({ currentPath }: EventDetailPageProps) {
  const event = eventDetails[currentPath]

  if (!event) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 px-4 py-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:py-12">
      <div className="container mx-auto max-w-5xl">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/85">
          {event.hero && (
            <img
              src={event.hero}
              alt={event.title}
              className="h-72 w-full object-cover sm:h-96"
            />
          )}

          <div className="p-6 md:p-8">
            <a
              href="/events"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-100"
            >
              <FaArrowLeft className="text-xs" />
              Back to events
            </a>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 font-semibold text-red-600 dark:bg-slate-800 dark:text-slate-200">
                <FaTag />
                {event.category}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <FaClock />
                {event.age}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
              {event.title}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
              {event.subtitle}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {event.sections.map((section) => (
                <article
                  key={section.heading}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/60"
                >
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {section.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
