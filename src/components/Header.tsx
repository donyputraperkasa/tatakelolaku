import React from 'react'
import logoYayasan from '../assets/logo-yayasan.png'

export const Header: React.FC = () => {
  return (
    <header className="header-section">
      <img
        src={logoYayasan}
        alt="Logo Yayasan BOPKRI"
        className="header-logo"
      />
      <h1 className="header-title">
        Portal Upload Dokumen Sekolah
      </h1>
      <p className="header-subtitle">
        Yayasan BOPKRI Yogyakarta • Tahun Ajaran 2025/2026
      </p>
    </header>
  )
}

export default Header
