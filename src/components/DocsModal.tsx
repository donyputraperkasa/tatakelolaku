import React, { useEffect } from 'react'
import { X, School } from 'lucide-react'
import type { SchoolDocsModalProps } from '../types'
import { getSchoolDocMenus } from '../data/doc-menus'
import { SchoolDocItem } from './SchoolDocItem'

export const SchoolDocsModal: React.FC<SchoolDocsModalProps> = ({
  school,
  onClose,
  onMissingLink,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (school) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [school, onClose])

  if (!school) return null

  const docMenus = getSchoolDocMenus(school)

  const handleDocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link?: string,
    label?: string
  ) => {
    if (!link || link.trim() === '') {
      e.preventDefault()
      if (onMissingLink) {
        onMissingLink(school.school, label || 'Dokumen')
      } else {
        alert(`Link ${label || 'dokumen'} untuk ${school.school} belum tersedia. Coba tanya masdon.`)
      }
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-icon school-modal-icon">
            <School size={22} color="#2563eb" />
          </div>
          <div className="modal-header-text">
            <h3 className="modal-title">{school.school}</h3>
            <p className="modal-subtitle">Pilih dokumen tata kelola yang ingin dibuka</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="school-docs-modal-grid">
            {docMenus.map((menu) => (
              <SchoolDocItem key={menu.id} menu={menu} onDocClick={handleDocClick} />
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="modal-footer-close-btn"
            onClick={onClose}
            style={{ marginLeft: 'auto' }}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}

export default SchoolDocsModal
