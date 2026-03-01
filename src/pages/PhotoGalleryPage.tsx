type GalleryPost = {
  title: string
  category: string
  age: string
  image?: string
  excerpt?: string
}

const galleryPosts: GalleryPost[] = [
  {
    title: 'The colours',
    category: 'Photo Gallery',
    age: '4 years ago',
    image: '/images/memory-lane15.jpg',
  },
  {
    title: 'Banner 2015',
    category: 'Photo Gallery',
    age: '4 years ago',
    image: '/images/memory-lane16.jpg',
  },
  {
    title: 'Memory lane2',
    category: 'Photo Gallery',
    age: '4 years ago',
    image: '/images/memory-lane28.jpg',
  },
  {
    title: 'Memory lane',
    category: 'Entertainment',
    age: '4 years ago',
    image: '/images/memory-lane15.jpg',
  },
  {
    title: 'Memory lane collection',
    category: 'Photo Gallery',
    age: '4 years ago',
    image: '/images/memory-lane19.jpg',
  },
  {
    title: 'Them Mushrooms',
    category: 'Events',
    age: '4 years ago',
    image: '/images/flyer2-2022.jpg',
    excerpt:
      'Them Mushrooms is a musical band from Kenya, playing mostly Chakacha, some Benga and reggae.',
  },
  {
    title: '2019 faces',
    category: 'Sticky Post',
    age: '9 years ago',
    image: '/images/faces-2019.jpg',
    excerpt:
      'Kenya and friends in the park has the potential to uncover moments of joy when you meet home folks.',
  },
  {
    title: '2022 performing artistes',
    category: 'Sticky Post',
    age: '9 years ago',
    image: '/images/flyer2-2022.jpg',
    excerpt:
      'Them Mushrooms is a musical band from Kenya, playing mostly Chakacha, some Benga and reggae.',
  },
]



import { useState, useEffect } from "react"
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaTag,
  FaClock,
} from "react-icons/fa"

export function PhotoGalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setActiveIndex(index)
  }

  const closeModal = () => {
    setActiveIndex(null)
  }

  const nextImage = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % galleryPosts.length)
  }

  const prevImage = () => {
    if (activeIndex === null) return
    setActiveIndex(
      (activeIndex - 1 + galleryPosts.length) % galleryPosts.length
    )
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [activeIndex])

  return (
    <main className="min-h-screen dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-4  sm:py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white ">
            Photo Gallery
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Highlights and memories from Kenya in the Park.
          </p>
        </header>

        {/* GALLERY GRID */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPosts.map((post, index) => (
            <article
              key={post.title}
              onClick={() => openModal(index)}
              className="group cursor-pointer bg-white dark:bg-slate-900 overflow-hidden shadow-md hover:shadow-2xl transition-all border border-slate-200 dark:border-slate-800"
            >
              {post.image && (
                <div className="relative bg-black">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-contain bg-black transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-5 space-y-3">
                <div className="flex justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <FaTag /> {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {post.age}
                  </span>
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* MODAL */}
        {activeIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6">

            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              <FaTimes />
            </button>

            {/* PREVIOUS */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-3xl"
            >
              <FaChevronLeft />
            </button>

            {/* NEXT */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-3xl"
            >
              <FaChevronRight />
            </button>

            {/* IMAGE CONTENT */}
            <div className="max-w-5xl w-full text-center">
              <img
                src={galleryPosts[activeIndex].image}
                alt={galleryPosts[activeIndex].title}
                className="hh-[80vh] w-full mx-auto object-contain"
              />

              <div className="mt-6 text-white">
                <h3 className="text-xl font-semibold">
                  {galleryPosts[activeIndex].title}
                </h3>
                <p className="text-sm opacity-70 mt-1">
                  {activeIndex + 1} / {galleryPosts.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
