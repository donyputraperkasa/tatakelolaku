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
        Dokumen Sekolah Unit Yayasan BOPKRI
      </h1>
      <p className="header-subtitle">
        Yayasan BOPKRI Yogyakarta • Tahun Ajaran 2026/2027
      </p>
    </header>
  )
}

export default Header
