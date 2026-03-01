export type MenuItem = {
  label: string
  path: string
  children?: MenuItem[]
}

export type Post = {
  title: string
  href: string
  image?: string
  category: string
  age: string
  excerpt: string
}

export type PageData = {
  title: string
  subtitle: string
  hero?: string
  cards: Array<{
    heading: string
    text: string
  }>
}
