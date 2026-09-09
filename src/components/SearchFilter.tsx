import React from 'react'
import { Search, X } from 'lucide-react'

interface SearchFilterProps {
  search: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  counts: {
    total: number
    tk: number
    sd: number
    smp: number
    smak: number
  }
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  counts,
}) => {
  const categories = [
    { key: '', label: 'Semua', count: counts.total },
    { key: 'SMA/K', label: 'SMA/K', count: counts.smak },
    { key: 'SMP', label: 'SMP', count: counts.smp },
    { key: 'SD', label: 'SD', count: counts.sd },
    { key: 'TK', label: 'TK', count: counts.tk },
  ]

  return (
    <section className="search-filter-card">
      <div className="search-input-wrapper">
        <div className="search-icon-box">
          <Search size={20} color="#2563eb" />
        </div>
        <input
          type="text"
          placeholder="Cari nama sekolah..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
          aria-label="Cari nama sekolah"
        />
        {search && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="search-clear-btn"
            title="Hapus pencarian"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="filter-chips-wrapper" role="group" aria-label="Filter kategori jenjang">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => onCategoryChange(cat.key)}
              className={`filter-chip ${isActive ? 'filter-chip-active' : ''}`}
            >
              <span>{cat.label}</span>
              <span className="filter-chip-count">{cat.count}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default SearchFilter
