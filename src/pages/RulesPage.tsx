import {
  FaShieldAlt,
  FaUserFriends,
  FaBan,
  FaLock,
  FaWineGlassAlt,
  FaCamera,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa"

export function RulesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-4 sm:py-12 px-4">
      <div className="container mx-auto max-w-5xl">

        {/* HERO HEADER */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 px-4 py-1 rounded-full text-sm font-semibold">
            <FaShieldAlt /> Rules & Regulations
          </div>

          <h1 className="mt-4 text-xl md:text-3xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Event Guidelines
          </h1>

          <div className="mt-4 flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> Jan 8, 2026
            </span>
            <span className="flex items-center gap-2">
              <FaUser /> mouldme
            </span>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <img
          src="/images/rules-memory-lane24.jpg"
          alt="Rules and regulations"
          className="mb-12 nh-72 w-full rounded-3xl object-cover shadow-lg"
        />

        {/* RULES GRID */}
        <section className="grid gap-8 md:grid-cols-2">

          <RuleCard
            icon={<FaShieldAlt />}
            title="Security"
            content={
              <>
                <p>
                  SIA Approved security staff will be on-site. Metal detectors
                  and body searches may be in operation.
                </p>
                <p className="mt-2">
                  You may be searched at the entrance or during the event.
                  Rights of admission are reserved to ensure everyone’s safety.
                </p>
              </>
            }
          />

          <RuleCard
            icon={<FaUserFriends />}
            title="Age Restrictions"
            content={
              <p>
                Children under the age of 10 <strong>must be accompanied by an adult</strong>.
              </p>
            }
          />

          <RuleCard
            icon={<FaBan />}
            title="Drugs Policy"
            content={
              <p>
                Strict anti-drugs policy enforced. Anyone found with illegal
                substances or weapons will be handed over to the police.
              </p>
            }
          />

          <RuleCard
            icon={<FaLock />}
            title="Belongings & Safety"
            content={
              <p>
                Keep your belongings secure. Do not leave bags unattended and
                ensure your phone and valuables remain safe at all times.
              </p>
            }
          />

          <RuleCard
            icon={<FaWineGlassAlt />}
            title="Alcohol Policy"
            content={
              <>
                <p>
                  Fully licensed bars will operate on-site. Alcohol brought in
                  from outside is not permitted.
                </p>
                <p className="mt-2">
                  No glass or bottles allowed. Drink responsibly — service may
                  be refused if necessary.
                </p>
              </>
            }
          />

          <RuleCard
            icon={<FaCamera />}
            title="Photography & Media"
            content={
              <p>
                Images and videos captured during the event may be used for
                publicity and promotional purposes.
              </p>
            }
          />

        </section>

        {/* FOOTER NOTE */}
        <div className="mt-14 text-center bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Thank You for Being Part of the Community ❤️
          </h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            These guidelines help ensure a safe, enjoyable and culturally vibrant
            experience for everyone attending Kenya in the Park.
          </p>
        </div>

      </div>
    </main>
  )
}

function RuleCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
}) {
  return (
    <article className="group bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-red-600 dark:text-red-400 text-2xl group-hover:scale-110 transition">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        {content}
      </div>
    </article>
  )
}