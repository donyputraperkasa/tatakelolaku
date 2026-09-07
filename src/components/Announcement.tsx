import React from 'react'
import { Headset, FileCheck2, Info } from 'lucide-react'

export const Announcement: React.FC = () => {
  const handlePetunjukClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    alert(
      'Panduan Dokumen:\n1. Pastikan dokumen sudah dalam format PDF atau Google Docs/Drive.\n2. Klik tombol "upload dokumen kurikulum" untuk dokumen kurikulum.\n3. Klik "upload dokumen pime" untuk dokumen PIME.\n4. Gunakan tombol "bingung ?? hubungi kami" jika butuh bantuan pengunggahan.'
    )
  }

  return (
    <>
      <section className="quick-links-wrap">
        <a
          href="https://wa.me/628112645659?text=Halo%20Mas%20Don,%20saya%20ingin%20bertanya%20terkait%20portal%20upload%20dokumen%20sekolah."
          target="_blank"
          rel="noreferrer"
          className="quick-link-btn"
          style={{ background: '#f59e0b' }}
        >
          <Headset size={18} />
          Ada Kendala? Hubungi Kami
        </a>

        <a
          href="#panduan"
          onClick={handlePetunjukClick}
          className="quick-link-btn"
          style={{ background: '#10b981' }}
        >
          <FileCheck2 size={18} />
          Download Template File
        </a>
      </section>

      <aside className="announcement-box" id="panduan">
        <div className="announcement-icon-box">
          <Info size={24} color="#d97706" />
        </div>

        <div>
          <p className="announcement-tag">Informasi Pengunggahan</p>
          <h2 className="announcement-title">
            Pengumpulan Berkas Kurikulum & PIME Sekolah
          </h2>
          <p className="announcement-text">
            Bapak/Ibu perwakilan sekolah dipersilakan memilih kartu unit sekolah masing-masing,
            kemudian klik tombol <strong>Upload Dokumen Kurikulum</strong> atau{' '}
            <strong>Upload Dokumen PIME</strong> untuk membuka tautan formulir/drive
            pengumpulan. Jika belum ada tautan atau membutuhkan bantuan, silakan klik tombol{' '}
            <strong>Bingung ?? Hubungi Kami</strong>.
          </p>
        </div>
      </aside>
    </>
  )
}

export default Announcement
