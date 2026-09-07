import React from 'react'
import { School } from 'lucide-react'
import { SchoolCard } from './SchoolCard'
import type { SchoolItem } from '../data/data'

interface SchoolListProps {
  schools: SchoolItem[]
  search: string
  selectedCategory: string
  onMissingLink: (schoolName: string, docType: string) => void
}

export const SchoolList: React.FC<SchoolListProps> = ({
  schools,
  search,
  selectedCategory,
  onMissingLink,
}) => {
  if (schools.length === 0) {
    return (
      <div className="empty-state">
        <School size={48} color="#94a3b8" />
        <h3>Sekolah tidak ditemukan</h3>
        <p>
          Tidak ditemukan sekolah dengan kata kunci "{search}"
          {selectedCategory ? ` pada kategori ${selectedCategory}` : ''}.
        </p>
      </div>
    )
  }

  return (
    <div className="schools-grid">
      {schools.map((school) => (
        <SchoolCard
          key={school.id}
          item={school}
          onMissingLink={onMissingLink}
        />
      ))}
    </div>
  )
}

export default SchoolList
