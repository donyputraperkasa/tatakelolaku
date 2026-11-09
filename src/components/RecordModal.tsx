import React, { useEffect, useState } from 'react'
import { X, Video, ArrowLeft } from 'lucide-react'
import { recordingSessions } from '../data/record'
import type { RecordingSession } from '../types'
import { RecordVideoView } from './RecordVideoView'
import { RecordSessionList } from './RecordSessionList'

interface RecordModalProps {
  isOpen: boolean
  onClose: () => void
  onMissingLink?: (title: string) => void
}

export const RecordModal: React.FC<RecordModalProps> = ({ isOpen, onClose, onMissingLink }) => {
  const [selectedSession, setSelectedSession] = useState<RecordingSession | null>(null)

  useEffect(() => {
    if (!isOpen) setSelectedSession(null)
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedSession) setSelectedSession(null)
        else onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, selectedSession])

  if (!isOpen) return null

  const handleSessionClick = (session: RecordingSession) => {
    if (session.link && session.link.trim() !== '') setSelectedSession(session)
    else if (onMissingLink) onMissingLink(session.title)
    else alert(`Link Google Drive untuk ${session.title} belum tersedia.`)
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`modal-container ${selectedSession ? 'video-mode' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          {selectedSession ? (
            <>
              <button type="button" className="record-back-btn" onClick={() => setSelectedSession(null)}>
                <ArrowLeft size={16} />
                <span>Daftar Sesi</span>
              </button>
              <div className="modal-header-text">
                <div className="record-session-title-wrap">
                  <h3 className="modal-title">{selectedSession.title}</h3>
                  {selectedSession.jenjang && (
                    <span className="record-session-badge">{selectedSession.jenjang}</span>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="modal-header-icon">
                <Video size={22} color="#e11d48" />
              </div>
              <div className="modal-header-text">
                <h3 className="modal-title">Rekaman 14 september 2026</h3>
                <p className="modal-subtitle">Pilih rekaman breakout sesuai jenjang</p>
              </div>
            </>
          )}
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Tutup">
            <X size={20} />
          </button>
        </div>

        {selectedSession ? (
          <RecordVideoView session={selectedSession} />
        ) : (
          <RecordSessionList sessions={recordingSessions} onSelectSession={handleSessionClick} />
        )}

        <div className="modal-footer">
          {selectedSession ? (
            <>
              <button type="button" className="modal-footer-close-btn" onClick={() => setSelectedSession(null)}>
                ← Ganti Sesi Rekaman
              </button>
              <button type="button" className="modal-footer-close-btn primary" onClick={onClose}>
                Selesai Menonton
              </button>
            </>
          ) : (
            <button type="button" className="modal-footer-close-btn" onClick={onClose} style={{ marginLeft: 'auto' }}>
              Tutup
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecordModal
