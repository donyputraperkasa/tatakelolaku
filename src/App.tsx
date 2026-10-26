import { useState, useMemo, useRef } from 'react'
import './App.css'
import { docs as initialSchools } from './data/docs'
import { Header } from './components/Header'
import { DashboardStats } from './components/DashboardStats'
import { SearchFilter } from './components/SearchFilter'
import { Announcement } from './components/Announcement'
import { SchoolList } from './components/SchoolList'
import CreateByMe from './components/CreateByMe'
import FloatingContact from './components/floating-contact'
import { AlertCircle, X } from 'lucide-react'

export function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const toastTimeoutRef = useRef<number | null>(null)

  // Categorize counts for filter chips
  const counts = useMemo(() => {
    let tk = 0
    let sd = 0
    let smp = 0
    let smak = 0
    for (const item of initialSchools) {
      if (item.jenjang === 'TK') tk++
      else if (item.jenjang === 'SD') sd++
      else if (item.jenjang === 'SMP') smp++
      else if (item.jenjang === 'SMA' || item.jenjang === 'SMK') smak++
    }
    return { total: initialSchools.length, tk, sd, smp, smak }
  }, [])

  // Filter schools based on search text and selected category
  const filteredSchools = useMemo(() => {
    const query = search.toLowerCase().trim()
    return initialSchools.filter((item) => {
      const matchSchool = item.school.toLowerCase().includes(query)
      let matchCategory = true
      if (selectedCategory === 'TK') {
        matchCategory = item.jenjang === 'TK'
      } else if (selectedCategory === 'SD') {
        matchCategory = item.jenjang === 'SD'
      } else if (selectedCategory === 'SMP') {
        matchCategory = item.jenjang === 'SMP'
      } else if (selectedCategory === 'SMA/K') {
        matchCategory = item.jenjang === 'SMA' || item.jenjang === 'SMK'
      }
      return matchSchool && matchCategory
    })
  }, [search, selectedCategory])

  const showToast = (message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current)
    }
    setToastMessage(message)
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  const handleMissingLink = (schoolName: string, docType: string) => {
    showToast(`Link ${docType} untuk ${schoolName} belum tersedia. Coba tanyakan masdon.`)
  }

  const handleMissingRecordLink = (title: string) => {
    showToast(`Link rekaman untuk "${title}" belum tersedia di Google Drive. Coba tanyakan masdon.`)
  }

  return (
    <div className="app-container">
      {/* Centered Toast / Alert Notification */}
      {toastMessage && (
        <div
          className="toast-backdrop"
          onClick={() => setToastMessage(null)}
          role="presentation"
        >
          <div
            className="toast-notice"
            role="alert"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="toast-icon-wrap">
              <AlertCircle size={22} className="toast-icon" />
            </div>
            <div className="toast-text-wrap">
              <span className="toast-text">{toastMessage}</span>
            </div>
            <button
              type="button"
              className="toast-close-btn"
              onClick={() => setToastMessage(null)}
              aria-label="Tutup notifikasi"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <Header />

      {/* Dashboard Stats */}
      <DashboardStats
        totalSchools={initialSchools.length}
        totalJenjang={5}
        displayedCount={filteredSchools.length}
      />

      {/* Search & Direct Click Jenjang Filter Chips */}
      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        counts={counts}
      />

      {/* Quick Links & Announcement */}
      <Announcement onMissingRecordLink={handleMissingRecordLink} />

      {/* School Cards List */}
      <main>
        <SchoolList
          schools={filteredSchools}
          search={search}
          selectedCategory={selectedCategory}
          onMissingLink={handleMissingLink}
        />
      </main>

      {/* Floating WhatsApp Contact */}
      <FloatingContact />

      {/* Footer */}
      <footer>
        <CreateByMe />
      </footer>
    </div>
  )
}

export default App
