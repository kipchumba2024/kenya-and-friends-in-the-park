import {
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
  FaStore,
  FaHandsHelping,
  FaFacebookF,
  FaExternalLinkAlt,
  FaClock,
  FaTag,
} from "react-icons/fa"

const popularPosts = [
  {
    category: "Business",
    age: "2 years ago",
    title: "Sponsors and supporters 2024",
    href: "https://kenyainthepark.com/?p=3748",
  },
  {
    category: "Uncategorized",
    age: "2 years ago",
    title: "Sponsor videos and offers 2024",
    href: "https://kenyainthepark.com/?p=3831",
  },
  {
    category: "Uncategorized",
    age: "3 years ago",
    title: "Karibu Magazine online",
    href: "https://kenyainthepark.com/?p=3769",
  },
  {
    category: "Entertainment",
    age: "3 years ago",
    title: "Performing artists 2023",
    href: "https://kenyainthepark.com/?p=3762",
  },
]

const videos = [
  {
    category: "Photo Gallery",
    age: "9 years ago",
    title: "2019 faces",
    href: "https://kenyainthepark.com/?p=90",
  },
  {
    category: "Entertainment",
    age: "9 years ago",
    title: "Event archives",
    href: "https://kenyainthepark.com/?p=144",
  },
]

export function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 min-h-screen py-4 sm:py-12 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Let’s Connect 🤝
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We are friendly, approachable and always happy to hear from you.
            Whether you're a sponsor, volunteer, or supporter — we’d love to talk.
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-[2fr_1fr]">

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            {/* CONTACT CARDS */}
            <div className="grid gap-6 sm:grid-cols-2">
              <ContactCard
                icon={<FaUsers />}
                title="Main Organizer"
                detail="+44 785 320 7075 (Lydia Olet)"
              />
              <ContactCard
                icon={<FaPhoneAlt />}
                title="General Info"
                detail="+44 747 620 9900 (Ruth Dube)"
              />
              <ContactCard
                icon={<FaStore />}
                title="Stalls"
                detail="+44 741 494 4464"
              />
              <ContactCard
                icon={<FaHandsHelping />}
                title="Volunteers"
                detail="+44 744 608 2958"
              />
            </div>

            {/* CTA SECTION */}
            <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-bold dark:text-white">
                Reach Us Directly
              </h3>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kenyainthepark@gmail.com"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
                >
                  <FaEnvelope />
                  Send Email
                </a>

                <a
                  href="tel:+447856207075"
                  className="flex items-center justify-center gap-2 border border-red-500 text-red-600 dark:text-red-400 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 dark:hover:bg-slate-700 transition"
                >
                  <FaPhoneAlt />
                  Call Organizer
                </a>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* FACEBOOK */}
            <SidebarCard title="Facebook Updates">
              <a
                href="https://www.facebook.com/profile.php?id=100091922837193"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-red-600 font-semibold hover:underline"
              >
                <FaFacebookF />
                Visit Facebook Page
              </a>
            </SidebarCard>

            {/* POPULAR POSTS */}
            <SidebarCard title="Popular">
              <ul className="space-y-4">
                {popularPosts.map((post) => (
                  <li key={post.title} className="group">
                    <p className="text-xs text-slate-500 flex items-center gap-2">
                      <FaTag className="text-red-400" />
                      {post.category}
                      <FaClock className="ml-2 text-slate-400" />
                      {post.age}
                    </p>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300 group-hover:text-red-600 transition"
                    >
                      {post.title}
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </li>
                ))}
              </ul>
            </SidebarCard>

            {/* VIDEOS */}
            <SidebarCard title="Videos">
              <ul className="space-y-4">
                {videos.map((video) => (
                  <li key={video.title}>
                    <p className="text-xs text-slate-500">
                      {video.category} • {video.age}
                    </p>
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 transition"
                    >
                      {video.title}
                    </a>
                  </li>
                ))}
              </ul>
            </SidebarCard>

          </aside>
        </section>
      </div>
    </main>
  )
}

function ContactCard({ icon, title, detail }: any) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
      <div className="text-red-500 text-2xl mb-4 group-hover:scale-110 transition">
        {icon}
      </div>
      <h4 className="font-semibold text-lg dark:text-white">
        {title}
      </h4>
      <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
        {detail}
      </p>
    </div>
  )
}

function SidebarCard({ title, children }: any) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-800">
      <h4 className="font-bold mb-4 uppercase text-sm tracking-wide dark:text-white">
        {title}
      </h4>
      {children}
    </div>
  )
}