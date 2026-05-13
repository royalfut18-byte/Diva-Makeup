export interface GalleryItem {
  id: string
  category: 'bridal' | 'hair' | 'formal' | 'lashes'
  alt: string
  placeholder: string
}

export const galleryItems: GalleryItem[] = [
  { id: '1', category: 'bridal', alt: 'Bridal makeup look', placeholder: 'Bridal Glam' },
  { id: '2', category: 'bridal', alt: 'Wedding day soft glam', placeholder: 'Soft Bridal' },
  { id: '3', category: 'bridal', alt: 'Bridal party makeup', placeholder: 'Bridal Party' },
  { id: '4', category: 'bridal', alt: 'Classic bridal beauty', placeholder: 'Classic Beauty' },
  { id: '5', category: 'hair', alt: 'Hollywood waves hairstyle', placeholder: 'Hollywood Waves' },
  { id: '6', category: 'hair', alt: 'Elegant bridal updo', placeholder: 'Elegant Updo' },
  { id: '7', category: 'hair', alt: 'Half up half down', placeholder: 'Half Up Style' },
  { id: '8', category: 'hair', alt: 'Soft romantic curls', placeholder: 'Romantic Curls' },
  { id: '9', category: 'formal', alt: 'Formal event glam', placeholder: 'Formal Glam' },
  { id: '10', category: 'formal', alt: 'Graduation makeup', placeholder: 'Graduation' },
  { id: '11', category: 'formal', alt: 'Evening event makeup', placeholder: 'Evening Look' },
  { id: '12', category: 'lashes', alt: 'Russian volume lashes', placeholder: 'Volume Lashes' },
  { id: '13', category: 'lashes', alt: 'Classic lash extensions', placeholder: 'Classic Set' },
  { id: '14', category: 'lashes', alt: 'Brow lamination', placeholder: 'Brow Lamination' },
  { id: '15', category: 'formal', alt: 'Special occasion look', placeholder: 'Special Occasion' },
  { id: '16', category: 'bridal', alt: 'Dewy bridal finish', placeholder: 'Dewy Finish' },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'hair', label: 'Hair' },
  { id: 'formal', label: 'Formal' },
  { id: 'lashes', label: 'Lashes & Brows' },
] as const
