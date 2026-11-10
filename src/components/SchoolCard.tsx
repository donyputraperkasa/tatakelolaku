import React, { useState } from 'react'
import { FolderOpen, HelpCircle, School, Video } from 'lucide-react'
import type { SchoolCardProps } from '../types'
import { SchoolDocsModal } from './DocsModal'
import { ZoomModal } from './ZoomModal'

export const SchoolCard: React.FC<SchoolCardProps> = ({ item, onMissingLink }) => {
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false)
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false)

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
              onClick={() => setIsDocsModalOpen(true)}
              className="card-btn btn-buka-dokumen"
              title={`Buka daftar dokumen ${item.school}`}
            >
              <FolderOpen size={19} className="btn-icon" />
              <span>Buka Dokumen</span>
            </button>

            <button
              type="button"
              onClick={() => setIsZoomModalOpen(true)}
              className="card-btn btn-buka-zoom"
              title={`Buka jadwal Zoom ${item.school}`}
            >
              <Video size={19} className="btn-icon" />
              <span>Buka Zoom</span>
            </button>
          </div>

          <div className="buttons-row-one">
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
        school={isDocsModalOpen ? item : null}
        onClose={() => setIsDocsModalOpen(false)}
        onMissingLink={onMissingLink}
      />

      <ZoomModal
        school={isZoomModalOpen ? item : null}
        onClose={() => setIsZoomModalOpen(false)}
      />
    </>
  )
}

export default SchoolCard
