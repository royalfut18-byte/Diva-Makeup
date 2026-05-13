import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, Search, Filter, ArrowLeft } from 'lucide-react'
import { getEnquiries, updateEnquiryStatus, type Enquiry } from '../lib/supabase'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'demo123'

const statusOptions = ['New', 'Contacted', 'Booked', 'Closed']
const statusColors: Record<string, string> = {
  New: 'bg-blue-100 text-blue-700',
  Contacted: 'bg-yellow-100 text-yellow-700',
  Booked: 'bg-green-100 text-green-700',
  Closed: 'bg-gray-100 text-gray-600',
}

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterService, setFilterService] = useState('')

  useEffect(() => {
    if (authenticated) loadEnquiries()
  }, [authenticated])

  async function loadEnquiries() {
    const data = await getEnquiries()
    setEnquiries(data)
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  async function handleStatusChange(id: string, status: string) {
    await updateEnquiryStatus(id, status)
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    )
  }

  const filtered = enquiries.filter((e) => {
    if (filterStatus && e.status !== filterStatus) return false
    if (filterService && e.event_type !== filterService) return false
    if (search) {
      const q = search.toLowerCase()
      return (
        e.full_name.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        (e.suburb || '').toLowerCase().includes(q) ||
        (e.phone || '').includes(q)
      )
    }
    return true
  })

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ivory to-champagne/30 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-8 max-w-sm w-full"
        >
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-full bg-warm-gold/10 flex items-center justify-center mx-auto mb-4">
              <Lock size={24} className="text-warm-gold" />
            </div>
            <h1 className="font-serif text-2xl font-semibold text-espresso">Admin Access</h1>
            <p className="text-sm text-espresso/50 mt-2">Enter password to view enquiries</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 mb-4"
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>
          <a href="/" className="flex items-center justify-center gap-2 mt-4 text-sm text-espresso/50 hover:text-warm-gold transition-colors">
            <ArrowLeft size={14} /> Back to website
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory to-champagne/20 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-espresso">Enquiries Dashboard</h1>
            <p className="text-sm text-espresso/50 mt-1">{enquiries.length} total enquiries</p>
          </div>
          <div className="flex gap-3">
            <a href="/" className="btn-secondary text-sm py-2 px-4">
              <ArrowLeft size={14} className="mr-2" /> Website
            </a>
            <button onClick={loadEnquiries} className="btn-primary text-sm py-2 px-4">
              Refresh
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card rounded-2xl p-4 mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-espresso/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, phone, suburb..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 text-sm"
            />
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-espresso/30" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-9 pr-4 py-2.5 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 text-sm appearance-none"
              >
                <option value="">All Status</option>
                {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 text-sm appearance-none"
            >
              <option value="">All Services</option>
              <option value="Bridal">Bridal</option>
              <option value="Formal">Formal</option>
              <option value="Special Occasion">Special Occasion</option>
              <option value="Hair Styling">Hair Styling</option>
              <option value="Lash Extensions">Lash Extensions</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Enquiries list */}
        {filtered.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <p className="text-espresso/50">No enquiries found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((enquiry) => (
              <motion.div
                key={enquiry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-espresso/40 mb-0.5">Name</p>
                      <p className="font-medium text-espresso">{enquiry.full_name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-espresso/40 mb-0.5">Event</p>
                      <p className="text-sm text-espresso/70">{enquiry.event_type || '—'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-espresso/40 mb-0.5">Date</p>
                      <p className="text-sm text-espresso/70">{enquiry.preferred_date || '—'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-espresso/40 mb-0.5">Contact</p>
                      <p className="text-sm text-espresso/70">{enquiry.phone || enquiry.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[enquiry.status || 'New']}`}>
                      {enquiry.status || 'New'}
                    </span>
                    <select
                      value={enquiry.status || 'New'}
                      onChange={(e) => handleStatusChange(enquiry.id!, e.target.value)}
                      className="text-xs px-2 py-1.5 rounded-lg border border-warm-gold/20 bg-white/60 focus:outline-none"
                    >
                      {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                {(enquiry.suburb || enquiry.message) && (
                  <div className="mt-3 pt-3 border-t border-warm-gold/10 grid sm:grid-cols-2 gap-3">
                    {enquiry.suburb && (
                      <div>
                        <p className="text-xs text-espresso/40">Suburb</p>
                        <p className="text-sm text-espresso/60">{enquiry.suburb}</p>
                      </div>
                    )}
                    {enquiry.message && (
                      <div>
                        <p className="text-xs text-espresso/40">Message</p>
                        <p className="text-sm text-espresso/60">{enquiry.message}</p>
                      </div>
                    )}
                  </div>
                )}
                <p className="text-xs text-espresso/30 mt-2">
                  {enquiry.created_at ? new Date(enquiry.created_at).toLocaleDateString('en-AU', { dateStyle: 'medium' }) : ''}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
