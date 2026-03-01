import type { MenuItem, PageData, Post } from './types'

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    path: '/',
    children: [
      {
        label: '11th Anniversary Kenya and Friends in the Park 2026',
        path: '/11th-anniversary-kenya-and-friends-in-the-park-2026',
      },
    ],
  },
  { label: 'Photo Gallery', path: '/photo-gallery' },
  { label: 'Travel and accommodation 2024', path: '/travel-and-accommodation-2024' },
  { label: 'Rules & regulations', path: '/rules-and-regulations' },
  { label: 'Events', path: '/events' },
  { label: 'Contact us', path: '/contact-us' },
  { label: 'Parking', path: '/parking' },
]

export const posts: Post[] = [
  {
    title: 'AILTV',
    href: 'https://kenyainthepark.com/?p=393',
    image: '/images/ailtv-2017.jpg',
    category: 'Sticky Post',
    age: '9 years ago',
    excerpt:
      "AILTV is a video production and online TV company focused on people of African origin.",
  },
  {
    title: '2019 faces',
    href: 'https://kenyainthepark.com/?p=90',
    image: '/images/faces-2019.jpg',
    category: 'Sticky Post',
    age: '9 years ago',
    excerpt:
      'Kenya and friends in the park has the potential to uncover moments of joy when you meet your home folks.',
  },
  {
    title: '2022 performing artistes',
    href: 'https://kenyainthepark.com/?p=81',
    image: '/images/flyer2-2022.jpg',
    category: 'Sticky Post',
    age: '9 years ago',
    excerpt:
      'Them Mushrooms is a musical band from Kenya, playing mostly Chakacha, some Benga and reggae.',
  },
  {
    title: '2018 BARKING PARK LONG BRIDGE ROAD IG11',
    href: 'https://kenyainthepark.com/?p=154',
    image: '/images/kenya-2018-barking.jpg',
    category: 'Sticky Post',
    age: '9 years ago',
    excerpt:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
  },
  {
    title: 'Sponsors and supporters 2024',
    href: 'https://kenyainthepark.com/?p=3748',
    category: 'Business',
    age: '2 years ago',
    excerpt: '[Best_Wordpress_Gallery id="5" gal_title="sponsors2024"]',
  },
  {
    title: 'Sponsor videos and offers 2024',
    href: 'https://kenyainthepark.com/?p=3831',
    image: '/images/sponsor-flyer-2024.jpg',
    category: 'Uncategorized',
    age: '2 years ago',
    excerpt: '',
  },
  {
    title: 'Karibu Magazine online',
    href: 'https://kenyainthepark.com/?p=3769',
    category: 'Uncategorized',
    age: '3 years ago',
    excerpt: '',
  },
  {
    title: 'Performing artists 2023',
    href: 'https://kenyainthepark.com/?p=3762',
    category: 'Entertainment',
    age: '3 years ago',
    excerpt: '[Best_Wordpress_Gallery id="4" gal_title="Artists performing 2023"]',
  },
  {
    title: 'Sponsor videos and offers 2023',
    href: 'https://kenyainthepark.com/?p=3755',
    image: '/images/sponsors-2023.jpg',
    category: 'Uncategorized',
    age: '3 years ago',
    excerpt: '',
  },
  {
    title: 'What to wear in London?',
    href: 'https://kenyainthepark.com/?p=3743',
    image: '/images/memory-lane19.jpg',
    category: 'Events',
    age: '3 years ago',
    excerpt:
      'Summer weather in London is sunny and hot to stormy and humid. The average summer temperature...',
  },
  {
    title: 'Sponsors and supporters',
    href: 'https://kenyainthepark.com/?p=3731',
    category: 'Uncategorized',
    age: '3 years ago',
    excerpt: '',
  },
  {
    title: 'Kings Developers Limited',
    href: 'https://kenyainthepark.com/?p=3727',
    image: '/images/kings-sponsor.jpg',
    category: 'Uncategorized',
    age: '3 years ago',
    excerpt:
      'Kings Developers Limited (KDL) is a real estate company founded as part of the Royal Group Companies.',
  },
  {
    title: 'Sponsors and supporters 2023',
    href: 'https://kenyainthepark.com/?p=3668',
    category: 'Business',
    age: '3 years ago',
    excerpt: '[Best_Wordpress_Gallery id="2" gal_title="sponsors2023"]',
  },
  {
    title: 'Parking',
    href: 'https://kenyainthepark.com/?p=3651',
    category: 'Uncategorized',
    age: '3 years ago',
    excerpt:
      'Car Parks Ealing Broadway has spaces for over 600 cars from Monday to Friday and over 800 cars every weekend.',
  },
]

export const pageContent: Record<string, PageData> = {
  '/11th-anniversary-kenya-and-friends-in-the-park-2026': {
    title: '11th Anniversary Kenya and Friends in the Park 2026',
    subtitle: 'Special anniversary celebration page for the 2026 event.',
    hero: '/images/leader-banner-2025.jpg',
    cards: [
      {
        heading: 'Anniversary Edition',
        text: 'The 11th anniversary brings expanded entertainment, cultural exhibitions, and international participation.',
      },
      {
        heading: 'Community Impact',
        text: 'The celebration continues to connect diaspora families, businesses, creatives, and volunteers in London.',
      },
      {
        heading: 'Plan Ahead',
        text: 'Follow this page for confirmed venue details, ticket guidance, vendor applications, and travel advice.',
      },
    ],
  },
  '/photo-gallery': {
    title: 'Photo Gallery',
    subtitle: 'Memories and moments from previous editions of Kenya and Friends in the Park.',
    cards: [
      {
        heading: 'Event Memories',
        text: 'Browse visual highlights from stage performances, family activities, and community interactions.',
      },
      {
        heading: 'Artists and Culture',
        text: 'View snapshots of artists, dancers, and cultural presentations from different years.',
      },
      {
        heading: 'Sponsor Visibility',
        text: 'Photo coverage also features sponsors, exhibitors, and community partners who support the event.',
      },
    ],
  },
  '/travel-and-accommodation-2024': {
    title: 'Travel and accommodation 2024',
    subtitle: 'Useful travel and stay planning information for attendees.',
    cards: [
      {
        heading: 'Travel Planning',
        text: 'Use major train, underground, and bus routes to plan arrival times and avoid peak congestion.',
      },
      {
        heading: 'Hotels & Stay',
        text: 'Choose accommodation close to transport links to keep event access simple for families and groups.',
      },
      {
        heading: 'Arrival Tips',
        text: 'Confirm public transport updates and weather before departure to avoid last-minute delays.',
      },
    ],
  },
  '/rules-and-regulations': {
    title: 'Rules & regulations',
    subtitle: 'Guidelines to keep the festival safe, inclusive, and enjoyable for everyone.',
    cards: [
      {
        heading: 'General Conduct',
        text: 'All visitors should follow event staff directions and respect fellow attendees at all times.',
      },
      {
        heading: 'Stalls and Vendors',
        text: 'Vendors must comply with hygiene, setup, and operating requirements issued by organizers.',
      },
      {
        heading: 'Safety First',
        text: 'Emergency routes and safety notices must remain clear and visible throughout the event.',
      },
    ],
  },
  '/events': {
    title: 'Events',
    subtitle: 'Explore featured programming, performers, and event activities.',
    cards: [
      {
        heading: 'Live Performances',
        text: 'Music, dance, and live stage acts represent both heritage and contemporary Kenyan talent.',
      },
      {
        heading: 'Family Activities',
        text: 'Dedicated zones provide family-safe activities and opportunities for children to participate.',
      },
      {
        heading: 'Business & Community',
        text: 'Events include networking, sponsor visibility, and opportunities for community collaboration.',
      },
    ],
  },
  '/contact-us': {
    title: 'Contact us',
    subtitle: 'Get in touch for general information, stalls, volunteers, and partnerships.',
    cards: [
      {
        heading: 'General Information',
        text: '+44 747 620 9900 (Ruth Dube) for general inquiries and event direction.',
      },
      {
        heading: 'Stalls & Exhibitors',
        text: '+44 741 494 4464 for stall booking, vendor application, and exhibition support.',
      },
      {
        heading: 'Volunteers & Email',
        text: '+44 744 608 2958 for volunteer coordination. Email: kenyainthepark@gmail.com',
      },
    ],
  },
  '/parking': {
    title: 'Parking',
    subtitle: 'Parking guidance and arrival logistics for event attendees.',
    cards: [
      {
        heading: 'Available Capacity',
        text: 'Local parking areas offer high weekend capacity, but early arrival is still recommended.',
      },
      {
        heading: 'Drop-off Planning',
        text: 'Coordinate drop-off and pickup points in advance to reduce congestion near entry routes.',
      },
      {
        heading: 'Accessibility',
        text: 'Accessible parking options should be confirmed early, especially for larger group travel.',
      },
    ],
  },
}

export const galleryImages = [
  '/images/memory-lane15.jpg',
  '/images/memory-lane16.jpg',
  '/images/memory-lane28.jpg',
  '/images/sponsors-2023.jpg',
  '/images/sponsor-flyer-2024.jpg',
  '/images/flyer-2022.jpg',
]

export const recentPosts = [
  { title: 'Sponsors and supporters 2024', href: 'https://kenyainthepark.com/?p=3748' },
  { title: 'Sponsor videos and offers 2024', href: 'https://kenyainthepark.com/?p=3831' },
  { title: 'Karibu Magazine online', href: 'https://kenyainthepark.com/?p=3769' },
  { title: 'Performing artists 2023', href: 'https://kenyainthepark.com/?p=3762' },
  { title: 'Sponsor videos and offers 2023', href: 'https://kenyainthepark.com/?p=3755' },
]

export const eventCategories = [
  { title: 'Business', href: 'https://kenyainthepark.com/?cat=2' },
  { title: 'Entertainment', href: 'https://kenyainthepark.com/?cat=3' },
  { title: 'Events', href: 'https://kenyainthepark.com/?cat=177' },
  { title: 'Fashion', href: 'https://kenyainthepark.com/?cat=4' },
  { title: 'Karibu magazine', href: 'https://kenyainthepark.com/?cat=178' },
  { title: 'Media collection', href: 'https://kenyainthepark.com/?cat=369' },
  { title: 'Past Events', href: 'https://kenyainthepark.com/?cat=395' },
  { title: 'Photo Gallery', href: 'https://kenyainthepark.com/?cat=394' },
  { title: 'Politics', href: 'https://kenyainthepark.com/?cat=5' },
  { title: 'Rules & regulations', href: 'https://kenyainthepark.com/?cat=399' },
  { title: 'Sports', href: 'https://kenyainthepark.com/?cat=6' },
  { title: 'Tech', href: 'https://kenyainthepark.com/?cat=7' },
  { title: 'Uncategorized', href: 'https://kenyainthepark.com/?cat=1' },
  { title: 'Videos', href: 'https://kenyainthepark.com/?cat=387' },
  { title: 'Virtual live', href: 'https://kenyainthepark.com/?cat=172' },
]
