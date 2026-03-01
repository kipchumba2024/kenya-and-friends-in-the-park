const hotels = [
  { name: 'Hotel Xandu W5 5DF', href: 'https://www.hotelxanadu.com/' },
  { name: 'Ibis Styles Ealing W5 2BS', href: 'https://www.booking.com/hotel/gb/ibis-styles-london-ealing.en-gb.html' },
  { name: 'Premier Inn Ealing W5 2RJ', href: 'https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-ealing.html?cid=GLBC_LONEAL' },
  { name: 'Travelodge Ealing W5 5ST', href: 'https://www.travelodge.co.uk/hotels/500/London-Ealing-hotel?WT_tsrc=GHA_Organic&utm_campaign=GHA_London_Ealing&utm_medium=GHA_Organic&utm_source=google' },
  { name: 'Clayton Hotel Chiswick W4 5RY', href: 'https://www.claytonhotelchiswick.com/' },
  { name: 'DoubleTree by Hilton Ealing W5 3HN', href: 'https://www.hilton.com/en/hotels/lonecdi-doubletree-london-ealing/?SEO_id=GMB-EMEA-DI-LONECDI' },
  { name: 'Hampton by Hilton Park Royal W5 3BQ', href: 'https://www.hilton.com/en/hotels/lonprhx-hampton-london-park-royal/?SEO_id=GMB-EMEA-HX-LONPRHX' },
  { name: 'Holiday Inn Express Park Royal W3 6UP', href: 'https://www.ihg.com/holidayinnexpress/hotels/gb/en/london/lonah/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-GB-_-LONAH' },
  { name: 'Park Plaza Park Royal W3 0TA', href: 'https://www.radissonhotels.com/en-us/hotels/park-plaza-london-park-royal' },
  { name: 'The Drayton Court Hotel W13 8PH', href: 'https://www.draytoncourtlondon.co.uk/bedrooms' },
  { name: 'Crowne Plaza London Ealing W5 1HG', href: 'https://www.ihg.com/crowneplaza/hotels/gb/en/london/lonea/hoteldetail?cm_mmc=GoogleMaps-_-CP-_-GB-_-LONEA' },
  { name: 'Holiday Inn London West W3 6RT' },
  { name: 'The King Heads Hotel W3 9NX' },
  { name: "Best Western Northfields Ealing's W5 1HG" },
  { name: 'The Fox and Goose Hotel W5 1DP' },
  { name: 'Grand Bleu London W13 9RR' },
  { name: 'One West Point, Icon Tower W3 6DU' },
  { name: 'London Selwyn Road Studios NW10 8QY' },
  { name: 'Luxury Art Deco W12 9AD' },
  { name: 'Brentford Apartments by Charles Hope TW8 9ET' },
]
import {
  FaPlane,
  FaMapMarkedAlt,
  FaBus,
  FaWalking,
  FaExternalLinkAlt,
  FaFacebookF,
  FaBookOpen,
  FaHandshake,
  FaLandmark,
} from "react-icons/fa"

export function TravelPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-4 sm:py-12 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* HERO */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 px-4 py-1 rounded-full text-sm font-semibold">
            <FaPlane /> Visitor Guide {currentYear}
          </div>

          <h1 className="mt-4 text-xl md:text-3xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Travel & Accommodation
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Everything you need to plan your journey and stay comfortably near the event.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

          {/* MAIN CONTENT */}
          <section className="space-y-12">
            {/* ACCOMMODATION */}
            <div className="space-y-8">
              {/* HOTELS */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-md border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold dark:text-white">
                      Local Hotels
                    </h3>
                    <a
                      href="https://www.airbnb.co.uk/rooms/786205359610603733"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center gap-2 text-red-600 font-medium hover:underline sm:w-auto"
                    >
                      View Airbnb in Greater London
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                </div>
                <img
                  src="/images/crowne-plaza-hanger-lane.jpg"
                  alt="Crowne Plaza"
                  className="rounded-2xl shadow-lg mb-8"
                />

                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  {hotels.map((hotel) => (
                    <div
                      key={hotel.name}
                      className="group bg-red-50 dark:bg-slate-800 rounded-xl p-4 hover:shadow-md transition"
                    >
                      {hotel.href ? (
                        <a
                          href={hotel.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between font-medium group-hover:text-red-600 transition"
                        >
                          {hotel.name}
                          <FaExternalLinkAlt className="text-xs opacity-60" />
                        </a>
                      ) : (
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          {hotel.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </section>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <SidebarCard
              icon={<FaFacebookF />}
              title="Facebook Updates"
              link="https://www.facebook.com/profile.php?id=100091922837193"
              text="Visit our Facebook page"
            />

            <aside className="space-y-8">


  {/* HOW TO GET THERE - MOVED HERE */}
  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-200 dark:border-slate-800">
    <h4 className="flex items-center gap-2 font-bold mb-4">
      <FaMapMarkedAlt className="text-red-600" />
      How To Get There
    </h4>

    <img
      src="/images/travel-how-to-get-there.jpeg"
      alt="Travel route"
      className="rounded-2xl mb-4"
    />

    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
      <p><strong>Ealing Common</strong> – Tube station</p>

      <p className="flex items-center gap-2">
        <FaBus className="text-red-500" />
        Bus 207 (Stop EK) → Stop GN (~2 mins)
      </p>

      <p className="flex items-center gap-2">
        <FaWalking className="text-red-500" />
        4 min walk via Uxbridge Rd/A4020
      </p>
    </div>
  </div>

  {/* MAGAZINE */}
  <SidebarImageCard
    icon={<FaBookOpen />}
    title="Karibu Magazine"
    image="/images/karibu-magazine-2025.png"
    link="https://www.yumpu.com/en/document/view/70657694/karibu-magazine-18thjuly-2025"
  />

  {/* SPONSORS */}
  <SidebarImageCard
    icon={<FaHandshake />}
    title="Sponsors"
    image="/images/kings-sponsor.jpg"
    link="https://kingsdevelopers.com/diaspora-investment/"
  />

  {/* EMBASSY */}
  <SidebarImageCard
    icon={<FaLandmark />}
    title="Embassy – London"
    image="/images/embassy-2023.jpg"
    link="https://www.kenyahighcom.org.uk/"
  />

</aside>

            <SidebarImageCard
              icon={<FaBookOpen />}
              title="Karibu Magazine"
              image="/images/karibu-magazine-2025.png"
              link="https://www.yumpu.com/en/document/view/70657694/karibu-magazine-18thjuly-2025"
            />

            <SidebarImageCard
              icon={<FaHandshake />}
              title="Sponsors"
              image="/images/kings-sponsor.jpg"
              link="https://kingsdevelopers.com/diaspora-investment/"
            />

            <SidebarImageCard
              icon={<FaLandmark />}
              title="Embassy – London"
              image="/images/embassy-2023.jpg"
              link="https://www.kenyahighcom.org.uk/"
            />

          </aside>
        </div>
      </div>
    </main>
  )
}

function SidebarCard({ icon, title, link, text }: any) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-200 dark:border-slate-800">
      <h4 className="flex items-center gap-2 font-bold mb-3">
        {icon} {title}
      </h4>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-red-600 hover:underline"
      >
        {text}
      </a>
    </div>
  )
}

function SidebarImageCard({ icon, title, image, link }: any) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-200 dark:border-slate-800">
      <h4 className="flex items-center gap-2 font-bold mb-4">
        {icon} {title}
      </h4>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt={title}
          className="rounded-2xl hover:scale-105 transition"
        />
      </a>
    </div>
  )
}
