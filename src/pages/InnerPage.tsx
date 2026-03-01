import { galleryImages, pageContent } from '../components/siteData'

type InnerPageProps = {
  currentPath: string
}

export function InnerPage({ currentPath }: InnerPageProps) {
  const page = pageContent[currentPath]

  if (!page) {
    return (
      <main className="container mx-auto px-4 py-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Page not found</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">This page is not available yet.</p>
        </section>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
        <header>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{page.title}</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{page.subtitle}</p>
          {page.hero && (
            <img src={page.hero} alt={page.title} className="mt-4 h-72 w-full rounded-2xl border border-slate-200 object-cover dark:border-slate-700" />
          )}
        </header>

        {currentPath === '/photo-gallery' && (
          <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Photo gallery preview">
            {galleryImages.map((image) => (
              <img key={image} src={image} alt="Kenya in the Park gallery" className="h-40 w-full rounded-xl border border-slate-200 object-cover dark:border-slate-700" />
            ))}
          </section>
        )}

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.cards.map((card) => (
            <article key={card.heading} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.heading}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{card.text}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}
