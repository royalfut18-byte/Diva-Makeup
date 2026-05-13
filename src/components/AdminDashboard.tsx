import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, Search, Filter, ArrowLeft, RefreshCw } from 'lucide-react'
import { getEnquiries, updateEnquiryStatus, type Enquiry } from '../lib/supabase'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'demo123'

const statusOptions = ['New', 'Contacted', 'Booked', 'Closed']
const statusColors: Record<string, string> = {
  New: 'bg-blue-50 text-blue-600 border-blue-100',
  Contacted: 'bg-amber-50 text-amber-600 border-amber-100',
  Booked: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  Closed: 'bg-gray-50 text-gray-500 border-gray-100',
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
      <div className="min-h-screen bg-ivory flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card-elevated p-10 max-w-sm w-full"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-5 shadow-luxury">
              <Lock size={22} className="text-white" />
            </div>
            <h1 className="font-display text-2xl font-bold text-espresso">Admin Access</h1>
            <p className="text-sm text-espresso/40 mt-2">Enter password to view enquiries</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 mb-4 text-sm"
            />
            {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>
          <a href="/" className="flex items-center justify-center gap-2 mt-6 text-xs text-espresso/40 hover:text-warm-gold transition-colors">
            <ArrowLeft size={12} /> Back to website
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ivory p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-espresso">Enquiries</h1>
            <p className="text-sm text-espresso/40 mt-1">{enquiries.length} total · {filtered.length} shown</p>
          </div>
          <div className="flex gap-3">
            <a href="/" className="btn-secondary text-xs py-2.5 px-4">
              <ArrowLeft size={13} /> Website
            </a>
            <button onClick={loadEnquiries} className="btn-primary text-xs py-2.5 px-4">
              <RefreshCw size={13} /> Refresh
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card-elevated p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/25" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, phone..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-warm-gold/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/15 text-sm"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Filter size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-espresso/25" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-6 py-3 rounded-xl border border-warm-gold/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/15 text-sm appearance-none"
                >
                  <option value="">All Status</option>
                  {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="px-4 py-3 rounded-xl border border-warm-gold/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/15 text-sm appearance-none"
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
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <div className="glass-card-elevated p-16 text-center">
            <p className="text-espresso/35 text-sm">No enquiries found.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((enquiry) => (
              <motion.div
                key={enquiry.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card-elevated p-6 hover:shadow-luxury transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-[10px] text-espresso/30 uppercase tracking-wider font-semibold">Name</p>
                      <p className="font-semibold text-sm text-espresso mt-0.5">{enquiry.full_name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-espresso/30 uppercase tracking-wider font-semibold">Event</p>
                      <p className="text-sm text-espresso/60 mt-0.5">{enquiry.event_type || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-espresso/30 uppercase tracking-wider font-semibold">Date</p>
                      <p className="text-sm text-espresso/60 mt-0.5">{enquiry.preferred_date || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-espresso/30 uppercase tracking-wider font-semibold">Contact</p>
                      <p className="text-sm text-espresso/60 mt-0.5">{enquiry.phone || enquiry.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${statusColors[enquiry.status || 'New']}`}>
                      {enquiry.status || 'New'}
                    </span>
                    <select
                      value={enquiry.status || 'New'}
                      onChange={(e) => handleStatusChange(enquiry.id!, e.target.value)}
                      className="text-xs px-3 py-1.5 rounded-lg border border-warm-gold/15 bg-white/60 focus:outline-none"
                    >
                      {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                {(enquiry.suburb || enquiry.message) && (
                  <div className="mt-4 pt-4 border-t border-warm-gold/8 grid sm:grid-cols-2 gap-3">
                    {enquiry.suburb && (
                      <div>
                        <p className="text-[10px] text-espresso/30 uppercase tracking-wider font-semibold">Suburb</p>
                        <p className="text-sm text-espresso/50 mt-0.5">{enquiry.suburb}</p>
                      </div>
                    )}
                    {enquiry.message && (
                      <div>
                        <p className="text-[10px] text-espresso/30 uppercase tracking-wider font-semibold">Message</p>
                        <p className="text-sm text-espresso/50 mt-0.5">{enquiry.message}</p>
                      </div>
                    )}
                  </div>
                )}
                <p className="text-[10px] text-espresso/20 mt-3">
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
