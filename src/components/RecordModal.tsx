import React, { useEffect, useState } from 'react'
import { X, Video, ExternalLink, AlertCircle, ArrowLeft, Play } from 'lucide-react'
import { recordingSessions, type RecordingSession } from '../data/record'

interface RecordModalProps {
  isOpen: boolean
  onClose: () => void
  onMissingLink?: (title: string) => void
}

/**
 * Mengubah URL Google Drive biasa (/view, /open?id=, dll)
 * menjadi URL embed (/preview) agar dapat diputar langsung di dalam <iframe>.
 * Juga mendukung video YouTube jika disediakan link YouTube.
 */
function getEmbedUrl(url?: string): string | null {
  if (!url || url.trim() === '') return null
  const trimmed = url.trim()

  // Google Drive: https://drive.google.com/file/d/FILE_ID/view...
  const driveFileMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (driveFileMatch && driveFileMatch[1]) {
    return `https://drive.google.com/file/d/${driveFileMatch[1]}/preview`
  }

  // Google Drive: https://drive.google.com/open?id=FILE_ID
  const driveIdMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (driveIdMatch && driveIdMatch[1]) {
    return `https://drive.google.com/file/d/${driveIdMatch[1]}/preview`
  }

  // YouTube
  const ytMatch = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`
  }

  // Jika link sudah berakhiran /preview atau /embed
  if (trimmed.includes('/preview') || trimmed.includes('/embed')) {
    return trimmed
  }

  return trimmed
}

export const RecordModal: React.FC<RecordModalProps> = ({
  isOpen,
  onClose,
  onMissingLink,
}) => {
  const [selectedSession, setSelectedSession] = useState<RecordingSession | null>(null)

  // Reset pilihan sesi saat modal dibuka atau ditutup
  useEffect(() => {
    if (!isOpen) {
      setSelectedSession(null)
    }
  }, [isOpen])

  // Menutup modal dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedSession) {
          // Jika sedang memutar video, tombol Escape kembali ke daftar sesi
          setSelectedSession(null)
        } else {
          onClose()
        }
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
    if (session.link && session.link.trim() !== '') {
      setSelectedSession(session)
    } else {
      if (onMissingLink) {
        onMissingLink(session.title)
      } else {
        alert(`Link Google Drive untuk ${session.title} belum tersedia.`)
      }
    }
  }

  const embedUrl = selectedSession ? getEmbedUrl(selectedSession.link) : null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`modal-container ${selectedSession ? 'video-mode' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        {selectedSession ? (
          <div className="modal-header">
            <button
              type="button"
              className="record-back-btn"
              onClick={() => setSelectedSession(null)}
              aria-label="Kembali ke daftar sesi"
            >
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
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Tutup modal"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="modal-header">
            <div className="modal-header-icon">
              <Video size={22} color="#e11d48" />
            </div>
            <div className="modal-header-text">
              <h3 className="modal-title">Rekaman 14 september 2026</h3>
              <p className="modal-subtitle">Pilih rekaman breakout sesuai jenjang</p>
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
        )}

        {/* Modal Body */}
        {selectedSession ? (
          <div className="modal-body modal-body-video">
            {embedUrl ? (
              <div className="record-player-container">
                <iframe
                  src={embedUrl}
                  title={selectedSession.title}
                  className="record-player-iframe"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="record-player-fallback">
                <AlertCircle size={32} color="#f59e0b" />
                <p>Tautan tidak dapat diputar langsung di dalam aplikasi.</p>
              </div>
            )}

            <div className="record-video-footer-info">
              {selectedSession.description && (
                <p className="record-video-desc">{selectedSession.description}</p>
              )}
              <a
                href={selectedSession.link}
                target="_blank"
                rel="noopener noreferrer"
                className="record-open-drive-btn"
              >
                <ExternalLink size={14} />
                Buka di Google Drive
              </a>
            </div>
          </div>
        ) : (
          <div className="modal-body">
            <div className="record-session-list">
              {recordingSessions.map((session) => {
                const hasLink = Boolean(session.link && session.link.trim() !== '')
                return (
                  <button
                    key={session.id}
                    type="button"
                    className="record-session-btn"
                    onClick={() => handleSessionClick(session)}
                  >
                    <div className="record-session-left">
                      <div className="record-session-icon">
                        <Video size={20} />
                      </div>
                      <div className="record-session-info">
                        <div className="record-session-title-wrap">
                          <span className="record-session-title">{session.title}</span>
                          {session.jenjang && (
                            <span className="record-session-badge">{session.jenjang}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="record-session-right">
                      {hasLink ? (
                        <span className="record-link-status available">
                          <Play size={12} fill="currentColor" />
                          Putar Video
                        </span>
                      ) : (
                        <span className="record-link-status pending">
                          <AlertCircle size={14} />
                          Belum ada link
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="modal-footer">
          {selectedSession ? (
            <>
              <button
                type="button"
                className="modal-footer-close-btn"
                onClick={() => setSelectedSession(null)}
              >
                ← Ganti Sesi Rekaman
              </button>
              <button
                type="button"
                className="modal-footer-close-btn primary"
                onClick={onClose}
              >
                Selesai Menonton
              </button>
            </>
          ) : (
            <button
              type="button"
              className="modal-footer-close-btn"
              onClick={onClose}
              style={{ marginLeft: 'auto' }}
            >
              Tutup
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecordModal
