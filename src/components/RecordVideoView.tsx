import React from 'react'
import { ExternalLink, AlertCircle } from 'lucide-react'
import type { RecordingSession } from '../types'

interface RecordVideoViewProps {
  session: RecordingSession
}

export function getEmbedUrl(url?: string): string | null {
  if (!url || url.trim() === '') return null
  const trimmed = url.trim()

  const driveFileMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (driveFileMatch && driveFileMatch[1]) {
    return `https://drive.google.com/file/d/${driveFileMatch[1]}/preview`
  }

  const driveIdMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (driveIdMatch && driveIdMatch[1]) {
    return `https://drive.google.com/file/d/${driveIdMatch[1]}/preview`
  }

  const ytMatch = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  )
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`
  }

  if (trimmed.includes('/preview') || trimmed.includes('/embed')) {
    return trimmed
  }

  return trimmed
}

export const RecordVideoView: React.FC<RecordVideoViewProps> = ({ session }) => {
  const embedUrl = getEmbedUrl(session.link)

  return (
    <div className="modal-body modal-body-video">
      {embedUrl ? (
        <div className="record-player-container">
          <iframe
            src={embedUrl}
            title={session.title}
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
        {session.description && <p className="record-video-desc">{session.description}</p>}
        <a
          href={session.link}
          target="_blank"
          rel="noopener noreferrer"
          className="record-open-drive-btn"
        >
          <ExternalLink size={14} />
          Buka di Google Drive
        </a>
      </div>
    </div>
  )
}

export default RecordVideoView

