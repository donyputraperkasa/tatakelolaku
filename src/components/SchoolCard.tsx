import React, { useState } from 'react'
import { FolderOpen, HelpCircle, School } from 'lucide-react'
import type { SchoolItem } from '../types'
import { SchoolDocsModal } from './SchoolDocsModal'

interface SchoolCardProps {
  item: SchoolItem
  onMissingLink?: (schoolName: string, docType: string) => void
}

export const SchoolCard: React.FC<SchoolCardProps> = ({ item, onMissingLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const defaultWa = '628112645659'
  const waTarget = item.pengampu && item.pengampu.trim() !== ''
    ? item.pengampu.replace(/\D/g, '')
    : defaultWa
  const formattedWa = waTarget.startsWith('0') ? `62${waTarget.slice(1)}` : waTarget
  const waMessage = encodeURIComponent(
    `Halo, saya dari *${item.school}* membutuhkan bantuan terkait tata kelola data sekolah (Kurikulum / PIME / Aset / Pegawai / Supervisi & Evaluasi).`
  )
  const helpUrl = `https://wa.me/${formattedWa}?text=${waMessage}`

  return (
    <>
      <div className="school-card">
        <div className="school-card-header">
          <div className="school-title-wrap">
            <div className="school-icon-badge">
              <School size={22} className="school-icon" />
            </div>
            <h3 className="school-name">{item.school}</h3>
          </div>
        </div>

        <div className="school-card-body">
          <div className="buttons-row-two">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="card-btn btn-buka-dokumen"
              title={`Buka daftar dokumen ${item.school}`}
            >
              <FolderOpen size={19} className="btn-icon" />
              <span>Buka Dokumen</span>
            </button>

            <a
              href={helpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn btn-hubungi"
              title="Hubungi admin melalui WhatsApp"
            >
              <HelpCircle size={19} className="btn-icon" />
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </div>

      <SchoolDocsModal
        school={isModalOpen ? item : null}
        onClose={() => setIsModalOpen(false)}
        onMissingLink={onMissingLink}
      />
    </>
  )
}

export default SchoolCard
