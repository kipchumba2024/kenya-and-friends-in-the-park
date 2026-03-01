import {
  FaArrowRight,
  FaCalendarAlt,
  FaTag,
  FaClock,
  FaFire,
} from "react-icons/fa"

type EventPost = {
  title: string
  href: string
  category: string
  age: string
  excerpt: string
  image?: string
}

type CalendarEvent = {
  title: string
  location: string
  date: string
}

const calendarEvents: CalendarEvent[] = [
  {
    title: 'MULEMBE EXTRAVAGANZA',
    location: '',
    date: 'July 11, 2026',
  },
]

const eventPosts: EventPost[] = [
  {
    title: 'Sponsors and supporters 2024',
    href: '/events/sponsors-and-supporters-2024',
    category: 'Business',
    age: '2 years ago',
    excerpt: '[Best_Wordpress_Gallery id="5" gal_title="sponsors2024"]',
  },
  {
    title: 'Performing artists 2023',
    href: '/events/performing-artists-2023',
    category: 'Entertainment',
    age: '3 years ago',
    excerpt: '[Best_Wordpress_Gallery id="4" gal_title="Artists performing 2023"]',
  },
  {
    title: 'What to wear in London?',
    href: '/events/what-to-wear-in-london',
    category: 'Events',
    age: '3 years ago',
    image: '/images/memory-lane19.jpg',
    excerpt:
      'Summer (June, July, and August) weather in London is sunny and hot to stormy and humid.',
  },
  {
    title: 'Sponsors and supporters 2023',
    href: '/events/sponsors-and-supporters-2023',
    category: 'Business',
    age: '3 years ago',
    excerpt: '[Best_Wordpress_Gallery id="2" gal_title="sponsors2023"]',
  },
  {
    title: '2022',
    href: '/events/kenya-in-the-park-2022',
    category: 'Events',
    age: '4 years ago',
    image: '/images/flyer-2022.jpg',
    excerpt:
      'Bringing all Kenyans and friends together in one platform, set up by Malaika Dance Unique and Maasai World.',
  },
  {
    title: 'Them Mushrooms',
    href: '/events/them-mushrooms',
    category: 'Events',
    age: '4 years ago',
    image: '/images/flyer2-2022.jpg',
    excerpt:
      'Them Mushrooms is a musical band from Kenya, playing mostly Chakacha, some Benga and reggae.',
  },
  {
    title: 'Kenya in the park 2018',
    href: '/events/kenya-in-the-park-2018',
    category: 'Events',
    age: '6 years ago',
    excerpt:
      'Kenya in the park is a project set up by Malaika Dance Unique, Maasai World Market and supported by Kenyans.',
  },
  {
    title: 'Kenya in The Park 2016',
    href: '/events/kenya-in-the-park-2016',
    category: 'Events',
    age: '6 years ago',
    excerpt:
      'Date of event: 29th July 2016. Theme: Celebrating Kenyan Culture, Pride and Networking.',
  },
]

export function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-4 sm:py-12 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* HERO */}
        <section className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 px-4 py-1 rounded-full text-sm font-semibold">
            <FaFire /> Celebrating Culture & Community
          </div>

          <h1 className="mt-4 text-xl md:text-3xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Kenya In The Park Events
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Explore our vibrant past events, sponsors, performing artists and
            unforgettable community moments.
          </p>
        </section>

        <div className="grid gap-10 lg:grid-cols-[2.2fr_1fr]">

          {/* EVENTS GRID */}
          <section className="grid gap-8 md:grid-cols-2">
            {eventPosts.map((post) => (
              <article
                key={post.title}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800"
              >
                {/* IMAGE */}
                {post.image && (
                  <div className="relative overflow-hidden">
                    <a href={post.href}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}

                <div className="p-6 space-y-4">

                  {/* CATEGORY + AGE */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full font-semibold">
                      <FaTag /> {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                      <FaClock /> {post.age}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition">
                    <a
                      href={post.href}
                      className="flex items-center gap-2"
                    >
                      {post.title}
                      <FaArrowRight className="text-sm opacity-70" />
                    </a>
                  </h3>

                  {/* EXCERPT */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </section>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-md border border-slate-200 dark:border-slate-800">
              <h4 className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                <FaCalendarAlt /> Events Calendar
              </h4>

              <div className="space-y-4">
                {calendarEvents.map((event) => (
                  <div
                    key={`${event.title}-${event.date}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600 dark:text-slate-300">
                      {event.date}
                    </p>
                    <h5 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                      {event.title}
                    </h5>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE EVENTS */}
            <SidebarCard
              badge="Live Events"
              image="/images/live-events-2022.jpeg"
              link="https://www.eventbrite.co.uk/e/kenya-and-friends-in-the-park-2022-tickets-167993425859"
            />

            {/* LONDON - KENYA */}
            <SidebarCard
              badge="London – Kenya"
              image="/images/embassy-2022.jpg"
              link="https://www.ethiopianairlines.com/"
            />

            {/* SPONSORS */}
            <SidebarCard
              badge="Sponsors & Supporters"
              image="/images/supporters-banner.png"
              link="https://kenyainthepark.com/?p=3668"
            />

          </aside>
        </div>
      </div>
    </main>
  )
}

function SidebarCard({
  badge,
  image,
  link,
}: {
  badge: string
  image: string
  link: string
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-xl transition">
      <h4 className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
        <FaCalendarAlt /> {badge}
      </h4>

      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt={badge}
          className="w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
        />
      </a>
    </div>
  )
}
