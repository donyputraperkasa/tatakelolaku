export type Jenjang = 'TK' | 'SD' | 'SMP' | 'SMA' | 'SMK';

export interface SchoolAset {
  id: number;
  jenjang: Jenjang;
  school: string;
  link: string;
}

const schools: SchoolAset[] = [
  { id: 1, jenjang: "SMA", school: "SMA BOPKRI 1 Yogyakarta", link: "https://drive.google.com/drive/folders/1hrUV-sB3AyPWIPVGEPSq7ZZOJhJOuLS6?usp=sharing" },
  { id: 2, jenjang: "SMA", school: "SMA BOPKRI 2 Yogyakarta", link: "https://drive.google.com/drive/folders/1WEExXm37QXGWPEwJnMEg-RtJK5pkMIRe?usp=sharing" },
  { id: 3, jenjang: "SMK", school: "SMK BOPKRI 1 Yogyakarta", link: "https://drive.google.com/drive/folders/1WEExXm37QXGWPEwJnMEg-RtJK5pkMIRe?usp=sharing" },
  { id: 4, jenjang: "SMK", school: "SMK BOPKRI 2 Yogyakarta", link: "https://drive.google.com/drive/folders/1Jhm2H-bvWOEbAdzO353q9HXvdBn3P11w?usp=sharing" },
  { id: 5, jenjang: "SMP", school: "SMP BOPKRI 1 Yogyakarta", link: "https://drive.google.com/drive/folders/1RAN_bsuDpgXHhP7_BCDM5clxVFisd6AB?usp=sharing" },
  { id: 6, jenjang: "SMP", school: "SMP BOPKRI 2 Yogyakarta", link: "https://drive.google.com/drive/folders/1Xd7ACyQYk4wmFSUb8eTeo-RCWj6AJQLt?usp=sharing" },
  { id: 7, jenjang: "SMP", school: "SMP BOPKRI 3 Yogyakarta", link: "https://drive.google.com/drive/folders/1ZB-B_Q5UL_Vw2Q5J8ibJA0_6tdfz0MzK?usp=sharing" },
  { id: 8, jenjang: "SMP", school: "SMP BOPKRI 5 Yogyakarta", link: "https://drive.google.com/drive/folders/1KTCUupCW5wHDmM4Xgunlur_SkF9KHAcb?usp=sharing" },
  { id: 9, jenjang: "SMP", school: "SMP BOPKRI Godean", link: "https://drive.google.com/drive/folders/1u4NIESRTOqIlxGzEUSWvBe4dS9fvU19B?usp=sharing" },
  { id: 10, jenjang: "SMP", school: "SMP BOPKRI Wonosari", link: "https://drive.google.com/drive/folders/1l2tQ0ajiV9XAPQZRl2urABS2nYq5WCR1?usp=sharing" },
  { id: 11, jenjang: "SMP", school: "SMP BOPKRI 1 Wates", link: "https://drive.google.com/drive/folders/1RH1hJPrR4Yqs4lnqQ7Po3Uh4v69xZjBH?usp=sharing" },
  { id: 12, jenjang: "SD", school: "SD BOPKRI Gondolayu", link: "https://drive.google.com/drive/folders/1_ziafvNaiMyVBQP5FYFxOXPrLxAcOJ89?usp=sharing" },
  { id: 13, jenjang: "SD", school: "SD BOPKRI Wirobrajan", link: "https://drive.google.com/drive/folders/10HmQoYQjDljIQdiFs2i1lddNak4Nqpdw?usp=sharing" },
  { id: 14, jenjang: "SD", school: "SD BOPKRI Sidomulyo 1", link: "https://drive.google.com/drive/folders/1mzp8Qv0mEWh4Fm-4fSIaFNLa-OWbhsSi?usp=sharing" },
  { id: 15, jenjang: "SD", school: "SD BOPKRI Demangan III", link: "https://drive.google.com/drive/folders/1hGXvSUU_DINdgGQti_NvuX0jxwGvyYi_?usp=sharing" },
  { id: 16, jenjang: "SD", school: "SD BOPKRI Bintaran", link: "https://drive.google.com/drive/folders/1kPIrOCFDhCty7D6icY7DngaBjAtYuP8n?usp=sharing" },
  { id: 17, jenjang: "SD", school: "SD BOPKRI Sidomulyo 2", link: "https://drive.google.com/drive/folders/1ktRvg9-Y5iP5ThVznnkBLFYmqClFR0V2?usp=sharing" },
  { id: 18, jenjang: "SD", school: "SD BOPKRI Planjan", link: "https://drive.google.com/drive/folders/1HDcYrOouB6sfXqSaY_JHtTYGhnhGkeaY?usp=sharing" },
  { id: 19, jenjang: "SD", school: "SD BOPKRI Palihan", link: "https://drive.google.com/drive/folders/1nfAIsoOte8Lv6ZmgA5nzOeJgoDTvHlgX?usp=sharing" },
  { id: 20, jenjang: "SD", school: "SD BOPKRI Wonosari II", link: "https://drive.google.com/drive/folders/14V-Pfu8PPptBd4QSv6mD9_5rLKhwAh5f?usp=sharing" },
  { id: 21, jenjang: "SD", school: "SD BOPKRI Wates 1", link: "https://drive.google.com/drive/folders/1sfWq1v_4xTE4mwikw_w8LOBg0mVGvtd0?usp=sharing" },
  { id: 22, jenjang: "SD", school: "SD BOPKRI Temon", link: "https://drive.google.com/drive/folders/1DJJWSHcFj1l5-FvOUjWSQe05Ez4IblLC?usp=sharing" },
  { id: 23, jenjang: "SD", school: "SD BOPKRI Turen", link: "https://drive.google.com/drive/folders/1mXCg_l5Rf4S3UWB_QFZ42S-dFdG0XR-1?usp=sharing" },
  { id: 24, jenjang: "SD", school: "SD BOPKRI Minggir", link: "https://drive.google.com/drive/folders/1neo-fy5r_vtsPxNlZlvVisg9HbTKI98G?usp=sharing" },
  { id: 25, jenjang: "SD", school: "SD BOPKRI Gunung Ijo", link: "https://drive.google.com/drive/folders/1_LT7GJfLu-eHcAeZm0e1oATMDoa_M3C4?usp=sharing" },
  { id: 26, jenjang: "SD", school: "SD BOPKRI Karangwaru", link: "https://drive.google.com/drive/folders/1Yx0_HqCEItL1X6JhvnMPNZZyxRRDpoiE?usp=sharing" },
  { id: 27, jenjang: "TK", school: "KB-TK Kalyca Montessori School", link: "https://drive.google.com/drive/folders/1ohDVxinsCzJ74usu5XQeavUhCxd5KzsW?usp=sharing" },
  { id: 28, jenjang: "TK", school: "TK BOPKRI Gondokusuman", link: "https://drive.google.com/drive/folders/1y4i83Pc9S1uw8Sz3p3Fe4JbCkWlkGsUI?usp=sharing" },
  { id: 29, jenjang: "TK", school: "TK BOPKRI Jatimulyo", link: "https://drive.google.com/drive/folders/1lU6yi4LVk54QTkoWO01Yg4cOGCj5zZ4K?usp=sharing" },
  { id: 30, jenjang: "TK", school: "TK BOPKRI Wirobrajan", link: "https://drive.google.com/drive/folders/1EazB_x0o72sw61UKgnBYXuzwTb-e1IZk?usp=sharing" },
  { id: 31, jenjang: "TK", school: "TK BOPKRI Rewulu", link: "https://drive.google.com/drive/folders/1Y6yEiloB_ZWSrK6QAJWShH7BayqjRWHw?usp=sharing" },
  { id: 32, jenjang: "TK", school: "TK BOPKRI Minggir", link: "https://drive.google.com/drive/folders/1NaEujlZfUtUoFxUBNLlBp-spbT5TEKRE?usp=sharing" },
  { id: 33, jenjang: "TK", school: "TK BOPKRI Wates", link: "https://drive.google.com/drive/folders/1ZnJ1ol8hiY-8ADQ-u_se0PGRbHc66OT1?usp=sharing" },
  { id: 34, jenjang: "TK", school: "KB-TK BOPKRI Pelangi", link: "https://drive.google.com/drive/folders/1WJAi81cKBw3-2XnKnkzaLK_QBZy_fCfa?usp=sharing" },
  { id: 35, jenjang: "TK", school: "TK BOPKRI Gondolayu", link: "https://drive.google.com/drive/folders/1y4i83Pc9S1uw8Sz3p3Fe4JbCkWlkGsUI?usp=sharing" },
  { id: 36, jenjang: "TK", school: "TK BOPKRI Karanggumuk", link: "https://drive.google.com/drive/folders/179ufHRzw-CsJHkCJ1Q-tt9GZkF1Imxai?usp=sharing" },
  { id: 37, jenjang: "TK", school: "TK BOPKRI Gunung Ijo", link: "https://drive.google.com/drive/folders/11E6LyscAXSDgA4OLFBPZCA5-xxBY1wEL?usp=sharing" },
];

export default schools;