import React from 'react'
import { School, Layers, SearchCheck } from 'lucide-react'

interface DashboardStatsProps {
  totalSchools: number
  totalJenjang: number
  displayedCount: number
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  totalSchools,
  totalJenjang,
  displayedCount,
}) => {
  return (
    <section className="dashboard-grid" aria-label="Statistik Ringkas">
      <div className="dashboard-card">
        <h3 className="dashboard-card-title">
          <School size={22} color="#2563eb" />
          Total Sekolah
        </h3>
        <p className="dashboard-card-value">{totalSchools}</p>
      </div>

      <div className="dashboard-card">
        <h3 className="dashboard-card-title">
          <Layers size={22} color="#2563eb" />
          Kategori Jenjang
        </h3>
        <p className="dashboard-card-value">
          {totalJenjang}{' '}
          <span style={{ fontSize: '16px', fontWeight: 500, color: '#64748b' }}>
            Jenjang
          </span>
        </p>
      </div>

      <div className="dashboard-card">
        <h3 className="dashboard-card-title">
          <SearchCheck size={22} color="#2563eb" />
          Hasil Ditampilkan
        </h3>
        <p className="dashboard-card-value">{displayedCount}</p>
      </div>
    </section>
  )
}

export default DashboardStats
