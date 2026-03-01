import {
  FaArrowRight,
  FaCalendarAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaMicrophoneAlt,
  FaPlay,
  FaStore,
  FaUsers,
  FaUtensils,
} from 'react-icons/fa'
import { posts } from '../components/siteData'

const featuredSponsors = [
  {
    title: 'KCB Bank',
    image: '/images/sponsors/kcb-bank.png',
    href: 'https://ke.kcbgroup.com/',
    logoClassName: 'bg-white dark:bg-slate-300',
  },
  {
    title: 'Kenya Airways',
    image: '/images/sponsors/kenya-airways.png',
    href: 'https://www.kenya-airways.com/',
    logoClassName: 'bg-white dark:bg-slate-300',
  },
  {
    title: 'NCBA',
    image: '/images/sponsors/ncba-bank.png',
    href: 'https://ke.ncbagroup.com/',
    logoClassName: 'bg-white dark:bg-slate-300',
  },
  {
    title: 'Kings Developers Limited',
    image: '/images/sponsors/kings-developers.png',
    href: 'https://kenyainthepark.com/?p=3727',
    logoClassName: 'bg-white dark:bg-slate-300',
  },
  {
    title: 'Tsavo',
    image: '/images/sponsors/tsavo.png',
    href: 'https://tsavo.ke/',
    logoClassName: 'bg-white dark:bg-slate-300',
  },
  {
    title: 'Mi Vida',
    image: '/images/sponsors/Mi-Vida.webp',
    href: 'https://mividahomes.com/',
    logoClassName: 'bg-white dark:bg-slate-300',
  },
  {
    title: 'Omega TV UK',
    image: '/images/sponsors/omegatv.png',
    href: 'https://www.omegatv.uk/',
    logoClassName: 'bg-white dark:bg-slate-300',
  },
  {
    title: 'LemFi',
    image: '/images/sponsors/lemfi.png',
    href: 'https://www.lemfi.com/',
    logoClassName: 'bg-[#0c1b2a] dark:bg-slate-800',
  },
]

const homeStats = [
  {
    label: 'Community energy',
    value: '11th',
    note: 'anniversary edition',
    icon: <FaUsers />,
  },
  {
    label: 'Location',
    value: 'London',
    note: 'culture meets celebration',
    icon: <FaMapMarkerAlt />,
  },
  {
    label: 'Partners',
    value: 'Sponsors',
    note: 'brands and supporters featured',
    icon: <FaHandshake />,
  },
]

const eventPulseHighlights = [
  {
    title: 'Stage program',
    detail: 'Live music, dance sets, MC moments, and headline performances across the day.',
    icon: <FaMicrophoneAlt />,
  },
  {
    title: 'Exhibitor row',
    detail: 'Diaspora businesses, cultural makers, and sponsor activations in one social marketplace.',
    icon: <FaStore />,
  },
  {
    title: 'Food and gathering',
    detail: 'Shared meals, family hangouts, and relaxed spaces that keep people on site longer.',
    icon: <FaUtensils />,
  },
]

export function HomePage() {
  const featuredPosts = posts.slice(0, 6)

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.2),_transparent_32%),linear-gradient(to_bottom,_#fff7ed,_#ffffff_35%,_#fff1f2)] px-4  dark:bg-[radial-gradient(circle_at_top_left,_rgba(51,65,85,0.28),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(30,41,59,0.22),_transparent_28%),linear-gradient(to_bottom,_#020617,_#0f172a_35%,_#020617)]">
      <div className="container mx-auto space-y-10">
        <section className="relative overflow-hidden p-6 md:p-8 lg:p-10">
          <div className="absolute inset-0 " />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-700 dark:bg-slate-800 dark:text-slate-200">
                <FaCalendarAlt />
                Kenya and Friends in the Park 2026
              </div>

              <div className="relative lg:hidden">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 shadow-2xl dark:border-slate-800">
                  <img
                    src="/images/upcoming-event-whatsapp-2026.jpeg"
                    alt="Kenya in the Park 2026 flyer"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="uppercase max-w-xl text-xl lg:text-3xl font-poppins font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
                  Celebrate culture, business, music, and community in one vibrant summer gathering.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Kenya in the Park brings together families, creatives, businesses, performers, and supporters for a day
                  that feels festive, connected, and unmistakably alive.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#latest-posts"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Explore Updates
                  <FaArrowRight className="text-xs" />
                </a>
                <a
                  href="https://kenyainthepark.com/?p=3748"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-red-600 hover:text-red-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:text-slate-200"
                >
                  Sponsor Spotlight
                  <FaPlay className="text-xs" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {homeStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(155deg,_rgba(255,255,255,0.96),_rgba(255,237,213,0.82))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(220,38,38,0.16)] dark:border-slate-800 dark:bg-[linear-gradient(155deg,_rgba(15,23,42,0.92),_rgba(30,41,59,0.72))]"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-70 dark:via-slate-500" />
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-200/40 blur-2xl transition duration-300 group-hover:bg-red-300/50 dark:bg-slate-400/10 dark:group-hover:bg-slate-400/20" />
                    <div className='flex flex-row gap-2'>
                      <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_10px_25px_rgba(15,23,42,0.22)] dark:bg-white dark:text-slate-950">
                        {stat.icon}
                      </div>
                      <div>
                       <p className="relative text-xl font-black tracking-tight text-slate-900 dark:text-white">{stat.value}</p>
                        <p className="relative mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-200">{stat.label}</p>

                      </div>
                     </div>
                    <p className="relative mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{stat.note}</p>
                  </div>
                ))}
              </div>
              
            </div>

            <div className="relative hidden lg:block">
              <div className="flex justify-end overflow-hidden rounded-[2rem] border=border-slate-200/80=shadow-2xl dark:border-slate-800">
                <img
                  src="/images/upcoming-event-whatsapp-2026.jpeg"
                  alt="Kenya in the Park 2026 flyer"
                  className="h-full w-[80%] object-cover "
                />
              </div>

              <div className="absolute bottom-60 -left-12 hidden max-w-xs rounded-[1.5rem] border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur md:block dark:border-slate-800 dark:bg-slate-900/90">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-slate-300">Featured</p>
                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">A modern diaspora experience</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Expect live entertainment, exhibitors, sponsor visibility, and community storytelling across the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/75 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-slate-300">Event Pulse</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
              Built for families, creators, exhibitors, and brands that want to be seen.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 p-[1px]">
                <div className="rounded-2xl bg-white p-5 dark:bg-slate-950">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Live performances</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Music, dance, and stage presence that keep the event lively from arrival to close.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-red-500 p-[1px]">
                <div className="rounded-2xl bg-white p-5 dark:bg-slate-950">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Sponsor visibility</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Prominent space for brands, businesses, and supporters to connect with a high-energy audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,_rgba(255,255,255,0.96),_rgba(255,237,213,0.9))] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-[linear-gradient(145deg,_rgba(15,23,42,0.94),_rgba(30,41,59,0.7))]">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-slate-300">At A Glance</p>
                <h3 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">What people actually come for</h3>
              </div>
              <div className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm dark:bg-slate-950/70 dark:text-slate-200">
                Summer 2026
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {eventPulseHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/45"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-slate-800 dark:text-slate-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 md:p-8">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-slate-300">Sponsors</p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">Brands and partners powering the experience.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSponsors.map((sponsor, index) => {
              const cardClassName = `group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-red-50/70 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 ${
                index === 1 || index === 5 ? 'xl:-translate-y-4' : ''
              }`

              const cardContent = (
                <>
                  <div className={`flex h-48 items-center justify-center overflow-hidden p-6 ${sponsor.logoClassName ?? 'bg-white dark:bg-slate-300'}`}>
                    <img
                      src={sponsor.image}
                      alt={sponsor.title}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-slate-300">Featured partner</p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{sponsor.title}</h3>
                  </div>
                </>
              )

              return sponsor.href ? (
                <a
                  key={sponsor.title}
                  href={sponsor.href}
                  target={sponsor.href.startsWith('http') ? '_blank' : undefined}
                  rel={sponsor.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              ) : (
                <div key={sponsor.title} className={cardClassName}>
                  {cardContent}
                </div>
              )
            })}
          </div>
        </section>

        <section id="latest-posts" aria-label="Posts list" className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-slate-300">Latest Posts</p>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white md:text-4xl">Stories, announcements, and highlights.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              A curated set of updates from the wider Kenya in the Park archive, restyled to feel more editorial and less like a plain feed.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900"
              >
                {post.image && (
                  <a href={post.href} target="_blank" rel="noreferrer" className="block overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </a>
                )}
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="rounded-full bg-red-50 px-3 py-1 font-medium text-red-700 dark:bg-slate-800 dark:text-slate-200">
                      {post.category}
                    </span>
                    <span>{post.age}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white">
                      <a href={post.href} target="_blank" rel="noreferrer" className="transition hover:text-red-700 dark:hover:text-slate-200">
                        {post.title}
                      </a>
                    </h3>
                    {post.excerpt && (
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    Read more
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
