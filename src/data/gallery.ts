export interface GalleryItem {
  id: string
  category: 'bridal' | 'hair' | 'formal' | 'lashes'
  alt: string
  placeholder: string
}

export const galleryItems: GalleryItem[] = [
  { id: '1', category: 'bridal', alt: 'Bridal makeup look', placeholder: 'Bridal Glam' },
  { id: '2', category: 'bridal', alt: 'Wedding day makeup', placeholder: 'Wedding Day' },
  { id: '3', category: 'bridal', alt: 'Bridal soft glam', placeholder: 'Soft Bridal' },
  { id: '4', category: 'hair', alt: 'Hollywood waves hairstyle', placeholder: 'Hollywood Waves' },
  { id: '5', category: 'hair', alt: 'Bridal updo', placeholder: 'Elegant Updo' },
  { id: '6', category: 'hair', alt: 'Half up half down style', placeholder: 'Half Up Style' },
  { id: '7', category: 'formal', alt: 'Formal event makeup', placeholder: 'Formal Glam' },
  { id: '8', category: 'formal', alt: 'Graduation makeup look', placeholder: 'Graduation' },
  { id: '9', category: 'formal', alt: 'Special occasion makeup', placeholder: 'Evening Look' },
  { id: '10', category: 'lashes', alt: 'Russian volume lash extensions', placeholder: 'Volume Lashes' },
  { id: '11', category: 'lashes', alt: 'Classic lash extensions', placeholder: 'Classic Lashes' },
  { id: '12', category: 'lashes', alt: 'Brow lamination result', placeholder: 'Brow Lamination' },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'hair', label: 'Hair' },
  { id: 'formal', label: 'Formal' },
  { id: 'lashes', label: 'Lashes & Brows' },
] as const
