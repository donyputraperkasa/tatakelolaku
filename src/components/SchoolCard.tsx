import React from 'react'
import { Upload, FileText, HelpCircle, School } from 'lucide-react'
import type { SchoolItem } from '../data/data'

interface SchoolCardProps {
  item: SchoolItem
  onMissingLink?: (schoolName: string, docType: string) => void
}

export const SchoolCard: React.FC<SchoolCardProps> = ({ item, onMissingLink }) => {
  const handleDocClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string, type: string) => {
    if (!link || link.trim() === '') {
      e.preventDefault()
      if (onMissingLink) {
        onMissingLink(item.school, type)
      } else {
        alert(`Link upload ${type} untuk ${item.school} belum tersedia. Coba tanya masdon.`)
      }
    }
  }

  const defaultWa = '628112645659'
  const waTarget = item.pengampu && item.pengampu.trim() !== ''
    ? item.pengampu.replace(/\D/g, '')
    : defaultWa
  const formattedWa = waTarget.startsWith('0') ? `62${waTarget.slice(1)}` : waTarget
  const waMessage = encodeURIComponent(
    `Halo, saya dari *${item.school}* membutuhkan bantuan terkait upload dokumen kurikulum / PIME.`
  )
  const helpUrl = `https://wa.me/${formattedWa}?text=${waMessage}`

  return (
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
          <a
            href={item.kurikulumLink || '#'}
            target={item.kurikulumLink ? '_blank' : undefined}
            rel="noopener noreferrer"
            onClick={(e) => handleDocClick(e, item.kurikulumLink, 'Kurikulum')}
            className="card-btn btn-kurikulum"
            title={item.kurikulumLink ? 'Buka link upload kurikulum' : 'Link upload belum diisi'}
          >
            <Upload size={18} className="btn-icon" />
            <span>Kurikulum</span>
          </a>

          <a
            href={item.pimeLink || '#'}
            target={item.pimeLink ? '_blank' : undefined}
            rel="noopener noreferrer"
            onClick={(e) => handleDocClick(e, item.pimeLink, 'PIME')}
            className="card-btn btn-pime"
            title={item.pimeLink ? 'Buka link upload PIME' : 'Link upload belum diisi'}
          >
            <FileText size={18} className="btn-icon" />
            <span>PIME</span>
          </a>
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
            <span>hubungi kami</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SchoolCard
