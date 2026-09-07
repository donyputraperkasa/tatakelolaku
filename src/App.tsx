import { useState, useMemo } from 'react'
import './App.css'
import { data as initialSchools } from './data/data'
import { Header } from './components/Header'
import { DashboardStats } from './components/DashboardStats'
import { SearchFilter } from './components/SearchFilter'
import { Announcement } from './components/Announcement'
import { SchoolList } from './components/SchoolList'
import CreateByMe from './components/CreateByMe'
import FloatingContact from './components/floating-contact'
import { AlertCircle } from 'lucide-react'

export function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

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

  const handleMissingLink = (schoolName: string, docType: string) => {
    setToastMessage(`⚠️ Link upload ${docType} untuk ${schoolName} belum tersedia. Coba tanyakan masdon.`)
    setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="alert">
          <AlertCircle size={20} color="#facc15" />
          <span>{toastMessage}</span>
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
      <Announcement />

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
