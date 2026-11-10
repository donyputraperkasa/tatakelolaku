import { type LucideIcon } from 'lucide-react'
export type Jenjang = 'TK' | 'SD' | 'SMP' | 'SMA' | 'SMK';

export interface SchoolBaseLink {
  id: number;
  jenjang: Jenjang;
  school: string;
  link: string;
}

export type SchoolAset = SchoolBaseLink;
export type SchoolData = SchoolBaseLink;
export type SchoolSupEv = SchoolBaseLink;

export interface SchoolItem {
  id: number;
  jenjang: Jenjang;
  school: string;
  kurikulumLink: string;
  pimeLink: string;
  asetLink?: string;
  pegawaiLink?: string;
  supEvLink?: string;
  zoomDate?: string;
  zoomTime?: string;
  zoomLink?: string;
  zoomDescription?: string;
  pengampu: string;
}

export type DocItem = SchoolItem;

export interface SchoolRecord extends SchoolItem {
  generalLink: string;
  unitLink: string;
}

export interface RecordingSession {
  id: string;
  title: string;
  jenjang?: string;
  link: string;
  description?: string;
}


export interface SchoolDocMenu {
  id: string
  label: string
  description: string
  link?: string
  icon: LucideIcon
  btnClass: string
}

export interface LinkZoom {
  id: number;
  jenjang: Jenjang;
  school: string;
  date: string;
  time: string;
  link: string;
  description?: string;
}

export interface ZoomModalProps {
  school: SchoolItem | null
  onClose: () => void
}

export interface SchoolCardProps {
  item: SchoolItem
  onMissingLink?: (schoolName: string, docType: string) => void
}