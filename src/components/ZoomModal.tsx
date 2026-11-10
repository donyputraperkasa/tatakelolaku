import React, { useEffect } from 'react'
import { X, Video, ExternalLink, CalendarX2, CalendarDays, Clock } from 'lucide-react'
import type { ZoomModalProps } from '../types'

export const ZoomModal: React.FC<ZoomModalProps> = ({ school, onClose }) => {
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

  const hasZoomLink = Boolean(school.zoomLink && school.zoomLink.trim() !== '')
  const hasZoomDate = Boolean(school.zoomDate && school.zoomDate.trim() !== '')
  const hasZoomTime = Boolean(school.zoomTime && school.zoomTime.trim() !== '')
  const hasZoomDesc = Boolean(school.zoomDescription && school.zoomDescription.trim() !== '')
  const hasSchedule = hasZoomDate || hasZoomTime || hasZoomLink

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-icon zoom-modal-icon">
            <Video size={22} color="#0284c7" />
          </div>
          <div className="modal-header-text">
            <h3 className="modal-title">{school.school}</h3>
            <p className="modal-subtitle">Informasi jadwal & ruang pertemuan Zoom</p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Tutup modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {hasSchedule ? (
            <div className="zoom-modal-content">
              {(hasZoomDate || hasZoomTime) && (
                <div className="zoom-schedule-row">
                  {hasZoomDate && (
                    <div className="zoom-modal-date">
                      <CalendarDays size={16} />
                      <span>{school.zoomDate}</span>
                    </div>
                  )}
                  {hasZoomTime && (
                    <div className="zoom-modal-time">
                      <Clock size={16} />
                      <span>{school.zoomTime}</span>
                    </div>
                  )}
                </div>
              )}
              {hasZoomDesc && <p className="zoom-modal-desc">{school.zoomDescription}</p>}
              {hasZoomLink ? (
                <a
                  href={school.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn btn-zoom-start"
                >
                  <Video size={19} className="btn-icon" />
                  <span>Mulai Zoom</span>
                  <ExternalLink size={16} />
                </a>
              ) : (
                <button type="button" disabled className="card-btn btn-zoom-disabled">
                  <Video size={19} className="btn-icon" />
                  <span>Mulai Zoom (Link Menyusul)</span>
                </button>
              )}
            </div>
          ) : (
            <div className="zoom-empty-state">
              <div className="zoom-empty-icon">
                <CalendarX2 size={32} color="#64748b" />
              </div>
              <p className="zoom-empty-title">Belum ada jadwal zoom dengan yayasan</p>
              {hasZoomDesc && <p className="zoom-empty-sub">{school.zoomDescription}</p>}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="modal-footer-close-btn" onClick={onClose} style={{ marginLeft: 'auto' }}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}

export default ZoomModal
