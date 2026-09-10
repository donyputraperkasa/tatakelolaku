import { Headset, FileCheck2, Info } from 'lucide-react'

export const Announcement: React.FC = () => {
  return (
    <>
      <section className="quick-links-wrap">
        {/* <a
          href="https://wa.me/628112645659?text=Halo,%20saya%20ingin%20bertanya%20terkait%20portal%20upload%20dokumen%20sekolah."
          target="_blank"
          rel="noreferrer"
          className="quick-link-btn quick-link-wa"
        >
          <Headset size={18} />
          Ada Kendala? Hubungi Kami
        </a> */}

        <a
          href="https://docs.google.com/spreadsheets/d/1bmgj960GwqQ5YUDZa8NXpA1eOACAM5JZ/edit?gid=1555423969#gid=1555423969"
          target="_blank"
          rel="noopener noreferrer"
          className="quick-link-btn quick-link-template"
        >
          <FileCheck2 size={18} />
          Lihat Template File
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
            <strong>Hubungi Kami</strong>.
          </p>
        </div>
      </aside>
    </>
  )
}

export default Announcement
