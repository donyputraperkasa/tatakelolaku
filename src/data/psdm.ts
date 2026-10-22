export type Jenjang = 'TK' | 'SD' | 'SMP' | 'SMA' | 'SMK';

export interface SchoolData {
  id: number;
  jenjang: Jenjang;
  school: string;
  link: string;
}

const schools: SchoolData[] = [
  { id: 1, jenjang: "SMA", school: "SMA BOPKRI 1 Yogyakarta", link: "https://docs.google.com/spreadsheets/d/1nLE6qh2aPBsWZy9ZbPWxCDpfL5L-1bj0/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 2, jenjang: "SMA", school: "SMA BOPKRI 2 Yogyakarta", link: "https://docs.google.com/spreadsheets/d/1iz4hvJFTc7toVMaFLNd3FO95q4IWwPkN/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 3, jenjang: "SMK", school: "SMK BOPKRI 1 Yogyakarta", link: "https://docs.google.com/spreadsheets/d/1vbpTGwJY1rrtA6A9gDPHXOkdHbixEyZa/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 4, jenjang: "SMK", school: "SMK BOPKRI 2 Yogyakarta", link: "https://docs.google.com/spreadsheets/d/1GBPA9BLaPbeecmxxOyVvyKX3tOvApS8o/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 5, jenjang: "SMP", school: "SMP BOPKRI 1 Yogyakarta", link: "https://docs.google.com/spreadsheets/d/1a-vN4z2P3_6NXX_lGnECQ9Fxh026Gocb/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 6, jenjang: "SMP", school: "SMP BOPKRI 2 Yogyakarta", link: "https://docs.google.com/spreadsheets/d/17Un63ZjxPAdcjPwcpj0P85gpPJLjR01s/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 7, jenjang: "SMP", school: "SMP BOPKRI 3 Yogyakarta", link: "https://docs.google.com/spreadsheets/d/1SWAPgrjZvVD3yfB7Q1PHmMrqzv8Mvexn/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 8, jenjang: "SMP", school: "SMP BOPKRI 5 Yogyakarta", link: "https://docs.google.com/spreadsheets/d/1JADSgMkYCSe9urEjO937MRSt7vs5qnWn/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 9, jenjang: "SMP", school: "SMP BOPKRI Godean", link: "https://docs.google.com/spreadsheets/d/1zX5kY3O4IZF40c7Wt0MxyHD_ifJvcqeW/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 10, jenjang: "SMP", school: "SMP BOPKRI Wonosari", link: "https://docs.google.com/spreadsheets/d/1MRXSUxZbg1DHPMOUuyDeEYZjflLLojgE/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 11, jenjang: "SMP", school: "SMP BOPKRI 1 Wates", link: "https://docs.google.com/spreadsheets/d/1FIpjfEYzBz8LnHwUZiPPnjzgbyyISkGa/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 12, jenjang: "SD", school: "SD BOPKRI Gondolayu", link: "https://docs.google.com/spreadsheets/d/1AniZy6_sbEFAm-dzA70vtnswIG32k0i-/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 13, jenjang: "SD", school: "SD BOPKRI Wirobrajan", link: "https://docs.google.com/spreadsheets/d/1UISfrh0t0dNa6gKa9fPzhxLGXrfy6gU2/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 14, jenjang: "SD", school: "SD BOPKRI Sidomulyo 1", link: "https://docs.google.com/spreadsheets/d/1taa3FxXjblb7cvGw3ZPY8PZBlukdf2Ie/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 15, jenjang: "SD", school: "SD BOPKRI Demangan III", link: "https://docs.google.com/spreadsheets/d/1_iY1v-PIyB5U6kKqZKw2MLOziiX8KPXj/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 16, jenjang: "SD", school: "SD BOPKRI Bintaran", link: "https://docs.google.com/spreadsheets/d/1FiNOR0MRk0lzT9c3MFsj8CWP25vxzbnM/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 17, jenjang: "SD", school: "SD BOPKRI Sidomulyo 2", link: "https://docs.google.com/spreadsheets/d/1pAZy1fDxdYKYMNFDFM4B-6-_PqpCQl8U/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 18, jenjang: "SD", school: "SD BOPKRI Planjan", link: "https://docs.google.com/spreadsheets/d/1wI160XidsVd9Totr47D9FEtRGQDt7AOR/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 19, jenjang: "SD", school: "SD BOPKRI Palihan", link: "https://docs.google.com/spreadsheets/d/1K-JUJ_YXLxsjo4gX2oxzpYSIamhEIYEx/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 20, jenjang: "SD", school: "SD BOPKRI Wonosari II", link: "https://docs.google.com/spreadsheets/d/17XmKrtRzA4CgkVlm2i46p53SwkdwF9qh/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 21, jenjang: "SD", school: "SD BOPKRI Wates 1", link: "https://docs.google.com/spreadsheets/d/1C87wHUGYb62590FevCIT45mdKTEPYOX_/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 22, jenjang: "SD", school: "SD BOPKRI Temon", link: "https://docs.google.com/spreadsheets/d/1Xq4H7V5mrgCM64Q5MTbMV6-e8qd-gdX1/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 23, jenjang: "SD", school: "SD BOPKRI Turen", link: "https://docs.google.com/spreadsheets/d/1rKNgumjuTbk4pUnPLInRGyTJFf_QWk28/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 24, jenjang: "SD", school: "SD BOPKRI Minggir", link: "https://docs.google.com/spreadsheets/d/11WNfPpRrDiS_406iQPyeulEoVnI1LPLU/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 25, jenjang: "SD", school: "SD BOPKRI Gunung Ijo", link: "https://docs.google.com/spreadsheets/d/1p9duS3BBXCutjL1epbTBdtiHcf7m1Doz/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 26, jenjang: "SD", school: "SD BOPKRI Karangwaru", link: "https://docs.google.com/spreadsheets/d/1OA0Cl8UVRMaeB_LDSCy2PLd52UEKglAG/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 27, jenjang: "TK", school: "KB-TK Kalyca Montessori School", link: "https://docs.google.com/spreadsheets/d/1xXoZC2HatqG0KR_QlxQ6p2yGvcktCmMJ/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 28, jenjang: "TK", school: "TK BOPKRI Gondokusuman", link: "https://docs.google.com/spreadsheets/d/17okDCutX2Sb3nXk_ZRPgpEwCGlmNMawH/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 29, jenjang: "TK", school: "TK BOPKRI Jatimulyo", link: "https://docs.google.com/spreadsheets/d/1_G3lzZhq7dfpCowg2AAton8JFVIQkT3e/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 30, jenjang: "TK", school: "TK BOPKRI Wirobrajan", link: "https://docs.google.com/spreadsheets/d/1ZrwAuE-CHK8D3641qSQomI7QYYYqryaJ/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 31, jenjang: "TK", school: "TK BOPKRI Rewulu", link: "https://docs.google.com/spreadsheets/d/1fe9UxZ0yltVSfFLETdBQQt-3bz17oJca/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 32, jenjang: "TK", school: "TK BOPKRI Minggir", link: "https://docs.google.com/spreadsheets/d/1Zce-u-aalxryyvCxpPoPLfeVmzt-iQni/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 33, jenjang: "TK", school: "TK BOPKRI Wates", link: "https://docs.google.com/spreadsheets/d/1oM16GbCnat_pyvHbUuo6f-NFDlhwS2GE/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 34, jenjang: "TK", school: "KB-TK BOPKRI Pelangi", link: "https://docs.google.com/spreadsheets/d/1nvlIEddHmbnKAeEKRk9yp2jiGWS0_w7J/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 35, jenjang: "TK", school: "TK BOPKRI Gondolayu", link: "https://docs.google.com/spreadsheets/d/1x2z6VvatgtYgrKSfzX7CqcwWWxHYHAup/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 36, jenjang: "TK", school: "TK BOPKRI Karanggumuk", link: "https://docs.google.com/spreadsheets/d/1ZUXGvpZWOYmNNVj7c6QDGiE35U300TXa/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
  { id: 37, jenjang: "TK", school: "TK BOPKRI Gunung Ijo", link: "https://docs.google.com/spreadsheets/d/1CUdknSlzkF6BR9zm_ePiW1KbsvjtYHXu/edit?usp=sharing&ouid=109274017374015768587&rtpof=true&sd=true" },
];

export default schools;
