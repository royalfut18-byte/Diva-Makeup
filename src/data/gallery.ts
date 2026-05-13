export type GalleryCategory = 'bridal' | 'hair' | 'formal' | 'lashes'

export interface GalleryItem {
  id: string
  src: string
  category: GalleryCategory
  title: string
  alt: string
  featured: boolean
}

/**
 * MANUAL MAPPING — edit category, title, alt, or featured as needed.
 * src paths reference files in public/portfolio/.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'img-01',
    src: '/portfolio/elegant-updo-brunette.png',
    category: 'hair',
    title: 'Elegant Updo',
    alt: 'Elegant brunette updo with soft face-framing tendrils',
    featured: true,
  },
  {
    id: 'img-02',
    src: '/portfolio/soft-glam-eyes-closed.png',
    category: 'formal',
    title: 'Soft Glam',
    alt: 'Soft glam makeup look with shimmery lids and natural lip',
    featured: true,
  },
  {
    id: 'img-03',
    src: '/portfolio/artist-bridal-styling.png',
    category: 'bridal',
    title: 'Bridal Styling',
    alt: 'Artist styling bridal hair with decorative accessory',
    featured: true,
  },
  {
    id: 'img-04',
    src: '/portfolio/bridal-updo-lace-accessory.png',
    category: 'bridal',
    title: 'Lace & Pearl Updo',
    alt: 'Blonde bridal updo with lace and pearl hair accessory',
    featured: true,
  },
  {
    id: 'img-05',
    src: '/portfolio/bridal-updo-gold-accessory.png',
    category: 'bridal',
    title: 'Gold Leaf Updo',
    alt: 'Bridal updo with gold leaf crystal hair accessory',
    featured: false,
  },
  {
    id: 'img-06',
    src: '/portfolio/bridal-morning-prep.png',
    category: 'bridal',
    title: 'Bridal Morning',
    alt: 'Behind the scenes bridal morning makeup preparation',
    featured: false,
  },
  {
    id: 'img-07',
    src: '/portfolio/smokey-glam-portrait.png',
    category: 'formal',
    title: 'Smokey Glam',
    alt: 'Dramatic smokey eye glamour portrait with Hollywood curls',
    featured: true,
  },
  {
    id: 'img-08',
    src: '/portfolio/before-after-transformation.png',
    category: 'formal',
    title: 'Transformation',
    alt: 'Before and after makeup transformation with bold red lip',
    featured: false,
  },
  {
    id: 'img-09',
    src: '/portfolio/glam-straight-hair.png',
    category: 'formal',
    title: 'Evening Glam',
    alt: 'Evening glam look with sleek straight black hair',
    featured: true,
  },
  {
    id: 'img-10',
    src: '/portfolio/hollywood-waves-blonde.png',
    category: 'hair',
    title: 'Hollywood Waves',
    alt: 'Blonde Hollywood waves with soft bronze makeup',
    featured: true,
  },
  {
    id: 'img-11',
    src: '/portfolio/lashes-soft-glam.png',
    category: 'lashes',
    title: 'Lash Perfection',
    alt: 'Close-up soft glam with voluminous lash extensions',
    featured: true,
  },
  {
    id: 'img-12',
    src: '/portfolio/evening-glam-portrait.png',
    category: 'formal',
    title: 'Night Out Ready',
    alt: 'Evening glam portrait with flawless skin and sleek hair',
    featured: false,
  },
  {
    id: 'img-13',
    src: '/portfolio/hollywood-waves-back.png',
    category: 'hair',
    title: 'Balayage Waves',
    alt: 'Beautiful balayage Hollywood waves from behind',
    featured: true,
  },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'hair', label: 'Hair' },
  { id: 'formal', label: 'Formal' },
  { id: 'lashes', label: 'Lashes & Brows' },
] as const

export const heroImages = galleryItems.filter((item) => item.featured).slice(0, 5)
export const bridalImages = galleryItems.filter((item) => item.category === 'bridal')
export const hairImages = galleryItems.filter((item) => item.category === 'hair')
export const formalImages = galleryItems.filter((item) => item.category === 'formal')
export const lashImages = galleryItems.filter((item) => item.category === 'lashes')
