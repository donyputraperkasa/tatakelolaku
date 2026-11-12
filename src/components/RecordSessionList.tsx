import React from 'react'
import { Video, Play, AlertCircle } from 'lucide-react'
import type { RecordSessionListProps } from '../types'


export const RecordSessionList: React.FC<RecordSessionListProps> = ({
  sessions,
  onSelectSession,
}) => {
  return (
    <div className="modal-body">
      <div className="record-session-list">
        {sessions.map((session) => {
          const hasLink = Boolean(session.link && session.link.trim() !== '')
          return (
            <button
              key={session.id}
              type="button"
              className="record-session-btn"
              onClick={() => onSelectSession(session)}
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
  )
}

export default RecordSessionList

