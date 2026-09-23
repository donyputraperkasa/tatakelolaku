import { data as schoolsData, type SchoolItem } from './data';

// ============================================================================
// 1. Tautan Rekaman Google Drive Utama
// ============================================================================

// Tautan Rekaman Sesi Pleno / Zoom Awal (Berlaku untuk semua sekolah)
export const generalLink = 'https://drive.google.com/file/d/1zqbi4Qo3_nSpNpUiFRZz-XPc_kLPK7Bx/view?usp=sharing';

// Tautan Rekaman Breakout Room per Jenjang
export const breakoutLinks: Record<'TK' | 'SD' | 'SMP' | 'SMA' | 'SMK', string> = {
  TK: 'https://drive.google.com/file/d/1UPABmgw46Mp0POLolfN5-Uq9-UinX6nC/view?usp=sharing',
  SD: 'https://drive.google.com/file/d/1IB6684JsVmu5oVXYA1Iq-4qe4fTX92Zj/view?usp=sharing',
  SMP: 'https://drive.google.com/file/d/1fw5ffh0hL7x760yjlxsvK72dP6UCILrG/view?usp=sharing',
  SMA: 'https://drive.google.com/file/d/1Vj3Dc1MlKwq6R9JiWar8FI2489_lUdsG/view?usp=sharing',
  SMK: 'https://drive.google.com/file/d/1Vj3Dc1MlKwq6R9JiWar8FI2489_lUdsG/view?usp=sharing',
};

// ============================================================================
// 2. Daftar Sekolah Lengkap dengan Auto-Mapping Link Rekaman
// ============================================================================

export interface SchoolRecord extends SchoolItem {
  generalLink: string;
  unitLink: string;
}

// Otomatis menggabungkan data sekolah dari data.ts dengan link rekaman masing-masing jenjang
export const schoolRecords: SchoolRecord[] = schoolsData.map((item) => ({
  ...item,
  generalLink,
  unitLink: breakoutLinks[item.jenjang] || '',
}));

// Alias untuk kompatibilitas
export const record = schoolRecords;

// ============================================================================
// 3. Format Sesi Rekaman untuk Popup Modal (RecordModal.tsx)
// ============================================================================

export interface RecordingSession {
  id: string;
  title: string;
  jenjang?: string;
  link: string;
  description?: string;
}

export const recordingSessions: RecordingSession[] = [
  {
    id: 'awal',
    title: 'Record Awal',
    link: generalLink,
    description: 'Sesi pembukaan dan materi umum',
  },
  {
    id: 'tk',
    title: 'Breakout Room TK',
    jenjang: 'TK',
    link: breakoutLinks.TK,
    description: 'Rekaman pembahasan ruang diskusi jenjang TK',
  },
  {
    id: 'sd',
    title: 'Breakout Room SD',
    jenjang: 'SD',
    link: breakoutLinks.SD,
    description: 'Rekaman pembahasan ruang diskusi jenjang SD',
  },
  {
    id: 'smp',
    title: 'Breakout Room SMP',
    jenjang: 'SMP',
    link: breakoutLinks.SMP,
    description: 'Rekaman pembahasan ruang diskusi jenjang SMP',
  },
  {
    id: 'smak',
    title: 'Breakout Room SMA/K',
    jenjang: 'SMA/K',
    link: breakoutLinks.SMA || breakoutLinks.SMK,
    description: 'Rekaman pembahasan ruang diskusi jenjang SMA & SMK',
  },
];

export default schoolRecords;