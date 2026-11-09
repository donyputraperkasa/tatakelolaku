import React, { useState } from 'react'
import { FileCheck2, Info, Video, FileSpreadsheet } from 'lucide-react'
import { RecordModal } from './RecordModal'

interface AnnouncementProps {
  onMissingRecordLink?: (title: string) => void
}

export const Announcement: React.FC<AnnouncementProps> = ({ onMissingRecordLink }) => {
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false)

  return (
    <>
      <section className="quick-links-wrap">
        <a
          href="/template.xlsx"
          download="template.xlsx"
          className="quick-link-btn quick-link-template"
        >
          <FileCheck2 size={18} />
          Unduh Template File
        </a>

        <button
          type="button"
          onClick={() => setIsRecordModalOpen(true)}
          className="quick-link-btn quick-link-record"
        >
          <Video size={18} />
          Record
        </button>

        <a
          href="/template-aset.xlsx"
          download="template-aset.xlsx"
          className="quick-link-btn quick-link-aset"
        >
          <FileSpreadsheet size={18} />
          Unduh Template Inventaris
        </a>
      </section>

      <RecordModal
        isOpen={isRecordModalOpen}
        onClose={() => setIsRecordModalOpen(false)}
        onMissingLink={onMissingRecordLink}
      />

      <aside className="announcement-box" id="panduan">
        <div className="announcement-icon-box">
          <Info size={24} color="#d97706" />
        </div>

        <div>
          <p className="announcement-tag">Informasi Pengunggahan</p>
          <h2 className="announcement-title">
            Pengumpulan Berkas Tata Kelola Sekolah
          </h2>
          <p className="announcement-text">
            Bapak/Ibu perwakilan sekolah dipersilakan memilih kartu unit sekolah masing-masing,
            kemudian klik tombol <strong>Buka Dokumen</strong> untuk memilih menu{' '}
            <strong>Kurikulum</strong>, <strong>PIME</strong>, <strong>Aset Sekolah</strong>,{' '}
            <strong>Data Pegawai</strong>, atau <strong>Supervisi & Evaluasi</strong>. Jika belum
            ada tautan atau membutuhkan bantuan, silakan klik tombol <strong>Hubungi Kami</strong>.
          </p>
        </div>
      </aside>
    </>
  )
}

export default Announcement
