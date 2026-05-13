export interface Review {
  id: string
  name: string
  text: string
  rating: number
  source: 'google' | 'facebook'
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Christine El-Debs',
    text: 'I received so many compliments and truly felt a million dollars. Diva Makeup made my special day absolutely perfect with flawless makeup that lasted all night.',
    rating: 5,
    source: 'google',
  },
  {
    id: '2',
    name: 'Erica Parcio-Cooke',
    text: 'Thank you also for doing my youngest daughter\'s graduation make up. She looked absolutely stunning and felt so confident. Highly recommend!',
    rating: 5,
    source: 'google',
  },
  {
    id: '3',
    name: 'Client Review',
    text: 'Absolutely amazing work! My bridal makeup was flawless and lasted the entire day. The trial was perfect and I felt so beautiful on my wedding day.',
    rating: 5,
    source: 'facebook',
  },
  {
    id: '4',
    name: 'Client Review',
    text: 'The best makeup artist in Liverpool! Professional, talented, and so lovely to work with. My lash extensions look incredible every time.',
    rating: 5,
    source: 'google',
  },
]
