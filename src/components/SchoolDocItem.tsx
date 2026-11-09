import React from 'react'
import { ExternalLink, AlertCircle } from 'lucide-react'
import type { SchoolDocMenu } from '../types'

interface SchoolDocItemProps {
  menu: SchoolDocMenu
  onDocClick: (e: React.MouseEvent<HTMLAnchorElement>, link?: string, label?: string) => void
}

export const SchoolDocItem: React.FC<SchoolDocItemProps> = ({ menu, onDocClick }) => {
  const IconComponent = menu.icon
  const hasLink = Boolean(menu.link && menu.link.trim() !== '')

  return (
    <a
      href={hasLink ? menu.link : '#'}
      target={hasLink ? '_blank' : undefined}
      rel="noopener noreferrer"
      onClick={(e) => onDocClick(e, menu.link, menu.label)}
      className={`card-btn school-modal-doc-btn ${menu.btnClass}`}
      title={hasLink ? `Buka ${menu.label}` : `Link ${menu.label} belum diisi`}
    >
      <div className="school-modal-doc-left">
        <div className="school-modal-doc-icon">
          <IconComponent size={20} className="btn-icon" />
        </div>
        <div className="school-modal-doc-text">
          <span className="school-modal-doc-title">{menu.label}</span>
          <span className="school-modal-doc-desc">{menu.description}</span>
        </div>
      </div>

      <div className="school-modal-doc-right">
        {hasLink ? (
          <span className="school-modal-badge available">
            <ExternalLink size={13} />
            Buka
          </span>
        ) : (
          <span className="school-modal-badge pending">
            <AlertCircle size={13} />
            Belum ada
          </span>
        )}
      </div>
    </a>
  )
}

export default SchoolDocItem

