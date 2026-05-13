export interface Enquiry {
  id?: string
  full_name: string
  phone: string
  email: string
  event_type: string
  preferred_date: string
  suburb: string
  people_count: number
  message: string
  status?: string
  created_at?: string
  updated_at?: string
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const isConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY)

async function supabaseFetch(path: string, options: RequestInit = {}) {
  if (!isConfigured) return null
  const res = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    ...options,
    headers: {
      'apikey': SUPABASE_KEY!,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': options.method === 'POST' ? 'return=representation' : 'return=minimal',
      ...options.headers,
    },
  })
  if (!res.ok) return null
  const text = await res.text()
  return text ? JSON.parse(text) : null
}

export async function submitEnquiry(enquiry: Omit<Enquiry, 'id' | 'status' | 'created_at' | 'updated_at'>): Promise<boolean> {
  if (!isConfigured) {
    const stored = getLocalEnquiries()
    const newEnquiry: Enquiry = {
      ...enquiry,
      id: crypto.randomUUID(),
      status: 'New',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    stored.push(newEnquiry)
    localStorage.setItem('diva_enquiries', JSON.stringify(stored))
    return true
  }

  const result = await supabaseFetch('/enquiries', {
    method: 'POST',
    body: JSON.stringify(enquiry),
  })
  return result !== null
}

export async function getEnquiries(): Promise<Enquiry[]> {
  if (!isConfigured) {
    return getLocalEnquiries()
  }

  const result = await supabaseFetch('/enquiries?order=created_at.desc')
  return result || getLocalEnquiries()
}

export async function updateEnquiryStatus(id: string, status: string): Promise<boolean> {
  if (!isConfigured) {
    const stored = getLocalEnquiries()
    const idx = stored.findIndex(e => e.id === id)
    if (idx !== -1) {
      stored[idx].status = status
      stored[idx].updated_at = new Date().toISOString()
      localStorage.setItem('diva_enquiries', JSON.stringify(stored))
    }
    return true
  }

  const result = await supabaseFetch(`/enquiries?id=eq.${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ status, updated_at: new Date().toISOString() }),
  })
  return result !== null
}

function getLocalEnquiries(): Enquiry[] {
  try {
    const stored = localStorage.getItem('diva_enquiries')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}
