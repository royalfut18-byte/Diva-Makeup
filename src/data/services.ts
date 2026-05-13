export interface Service {
  id: string
  title: string
  description: string
  icon: string
  category: 'makeup' | 'hair' | 'lashes' | 'brows'
}

export const services: Service[] = [
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup',
    description: 'Flawless, long-lasting bridal makeup tailored to your style. Photo-ready finish that lasts from ceremony to last dance.',
    icon: 'Heart',
    category: 'makeup',
  },
  {
    id: 'formal-makeup',
    title: 'Formal Makeup',
    description: 'Elegant makeup for formals, proms and graduations. Stand out and feel confident on your special night.',
    icon: 'Sparkles',
    category: 'makeup',
  },
  {
    id: 'special-occasion',
    title: 'Special Occasion Makeup',
    description: 'Professional makeup for engagements, birthdays, photoshoots, and videography sessions.',
    icon: 'Star',
    category: 'makeup',
  },
  {
    id: 'bridal-hair',
    title: 'Bridal Hair',
    description: 'Stunning bridal updos, elegant buns, romantic curls, and classic styles to complement your wedding look.',
    icon: 'Crown',
    category: 'hair',
  },
  {
    id: 'hollywood-waves',
    title: 'Hollywood Waves & Styling',
    description: 'Glamorous Hollywood waves, soft curls, sleek ponytails, and half-up half-down styles for any occasion.',
    icon: 'Wind',
    category: 'hair',
  },
  {
    id: 'lash-extensions',
    title: 'Lash Extensions',
    description: 'Classic, natural, Russian volume, and mega volume lash extensions for fuller, dramatic lashes.',
    icon: 'Eye',
    category: 'lashes',
  },
  {
    id: 'lash-lift',
    title: 'Lash Lift & Dye',
    description: 'Natural lash lift and tint for beautifully curled, defined lashes without daily maintenance.',
    icon: 'Wand2',
    category: 'lashes',
  },
  {
    id: 'brow-lamination',
    title: 'Brow Lamination & Tint',
    description: 'Perfectly shaped, fuller-looking brows with lamination and professional tinting for a polished finish.',
    icon: 'Pen',
    category: 'brows',
  },
]

export const eventTypes = [
  'Bridal',
  'Formal',
  'Special Occasion',
  'Hair Styling',
  'Lash Extensions',
  'Lash Lift',
  'Brow Lamination',
  'Other',
]
