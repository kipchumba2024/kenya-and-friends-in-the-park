import {
  FaCar,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaTicketAlt,
  FaMotorcycle,
  FaMoon,
  FaCalendarAlt,
  FaShareAlt,
  FaExternalLinkAlt,
} from "react-icons/fa"


const relatedPosts = [
  { title: 'Sponsor videos and offers 2024', href: 'https://kenyainthepark.com/?p=3831', category: 'Uncategorized' },
  { title: 'Karibu Magazine online', href: 'https://kenyainthepark.com/?p=3769', category: 'Uncategorized' },
  { title: 'Sponsor videos and offers 2023', href: 'https://kenyainthepark.com/?p=3755', category: 'Uncategorized' },
  { title: 'Sponsors and supporters', href: 'https://kenyainthepark.com/?p=3731', category: 'Uncategorized' },
]

const tariffs = [
  '0-1 hour: £1.00',
  '1-2 hours: £2.00',
  '2-3 hours: £3.00',
  '3-4 hours: £4.00',
  '4-5 hours: £5.00',
  '5-6 hours: £6.00',
  'Over 6 hours and up to 24 hours: £12.00',
]
export function ParkingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 px-4 py-8 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:py-12">
      <div className="container mx-auto max-w-7xl">

        {/* HERO */}
        <header className="mb-10 text-center md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600 dark:bg-red-900/40 dark:text-red-400">
            <FaCar /> Visitor Information
          </div>

          <h1 className="mt-4 text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Parking Information
          </h1>

          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> June 9, 2023
            </span>
            <span>Status: Active</span>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

          {/* MAIN CONTENT */}
          <section className="space-y-10">

            {/* LOCATION CARD */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-6 md:p-8">
              <h2 className="flex flex-wrap items-center gap-3 text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
                <FaMapMarkerAlt className="text-red-600" />
                Car Park Location
              </h2>

              <img
                src="/images/route-to-park.png"
                alt="Route to the park"
                className="mt-6 w-full max-w-md rounded-2xl shadow-lg"
              />

              <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                Ealing Broadway offers 600+ spaces on weekdays and 800+ on weekends.
                Open daily from <strong>6am – Midnight</strong>.
                Access via Grove Road through St Mary’s Road (opposite Ealing Green).
              </p>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Postcode: <strong>W5 5BL</strong>
              </p>
            </div>

            {/* TARIFFS */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-6 md:p-8">
              <h3 className="mb-6 flex flex-wrap items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
                <FaMoneyBillWave className="text-red-600" />
                Tariffs (Mon – Sun)
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {tariffs.map((tariff) => (
                  <div
                    key={tariff}
                    className="rounded-xl bg-red-50 p-4 text-sm font-medium text-slate-800 shadow-sm dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tariff}
                  </div>
                ))}
              </div>
            </div>

            {/* EXTRA INFO GRID */}
            <div className="grid gap-6 sm:grid-cols-2">

              <InfoCard
                icon={<FaTicketAlt />}
                title="Lost Ticket"
                text="Lost ticket charge: £12.00."
              />

              <InfoCard
                icon={<FaMoon />}
                title="Overnight Parking"
                text="Overnight parking permitted. Closed Midnight–6am. No vehicle access during closure."
              />

              <InfoCard
                icon={<FaMotorcycle />}
                title="Motorbikes"
                text="Dedicated motorbike parking available under Grove Road entrance ramp."
              />

              <InfoCard
                icon={<FaClock />}
                title="Bank Holidays"
                text="Bank holidays follow standard weekday tariffs."
              />

            </div>

          </section>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* SHARE */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-6">
              <h4 className="flex items-center gap-2 font-bold mb-4">
                <FaShareAlt /> Share
              </h4>

              <div className="space-y-3 text-sm">
                <a className="block hover:text-red-600 transition">Facebook</a>
                <a className="block hover:text-red-600 transition">X / Twitter</a>
                <a className="block hover:text-red-600 transition">Pinterest</a>
                <a className="block hover:text-red-600 transition">Email</a>
              </div>
            </div>

            {/* RELATED POSTS */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-6">
              <h4 className="font-bold mb-4">More Posts</h4>

              <ul className="space-y-4">
                {relatedPosts.map((post) => (
                  <li key={post.title}>
                    <p className="text-xs text-slate-500">{post.category}</p>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-medium hover:text-red-600 transition"
                    >
                      {post.title}
                      <FaExternalLinkAlt className="text-xs opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </main>
  )
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div className="mb-3 flex items-center gap-3 text-red-600">
        {icon}
        <h5 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h5>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {text}
      </p>
    </div>
  )
}
