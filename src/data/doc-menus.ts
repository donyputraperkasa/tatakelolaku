import { Upload, FileText, Building2, Users, ClipboardCheck } from 'lucide-react'
import type { SchoolItem } from '../types'
import type { SchoolDocMenu } from '../types'

export function getSchoolDocMenus(school: SchoolItem): SchoolDocMenu[] {
  return [
    {
      id: 'kurikulum',
      label: 'Kurikulum',
      description: 'Dokumen & berkas kurikulum sekolah',
      link: school.kurikulumLink,
      icon: Upload,
      btnClass: 'btn-kurikulum',
    },
    {
      id: 'pime',
      label: 'PIME',
      description: 'Perencanaan, Implementasi, Monitoring & Evaluasi',
      link: school.pimeLink,
      icon: FileText,
      btnClass: 'btn-pime',
    },
    {
      id: 'aset',
      label: 'Aset Sekolah',
      description: 'Inventaris dan data aset unit sekolah',
      link: school.asetLink,
      icon: Building2,
      btnClass: 'btn-aset',
    },
    {
      id: 'pegawai',
      label: 'Data Pegawai',
      description: 'Data kepegawaian (PSDM) sekolah',
      link: school.pegawaiLink,
      icon: Users,
      btnClass: 'btn-pegawai',
    },
    {
      id: 'supev',
      label: 'Supervisi & Evaluasi Kinerja',
      description: 'Dokumen supervisi dan evaluasi kinerja guru & pegawai di unit sekolah',
      link: school.supEvLink,
      icon: ClipboardCheck,
      btnClass: 'btn-supev',
    },
  ]
}

