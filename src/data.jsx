import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nama Depan : ',
    description: 'Klarisa',
  },

  {
    id: 2,
    title: 'Nama Belakang : ',
    description: 'Ofriana',
  },

  {
    id: 3,
    title: 'Umur : ',
    description: '21 Tahun',
  },

  {
    id: 4,
    title: 'Kewarganegaraan : ',
    description: 'WNI',
  },

  {
    id: 5,
    title: 'Pekerjaan : ',
    description: 'Mahasiswa',
  },

  {
    id: 6,
    title: 'Alamat : ',
    description: 'Frensiana Garden Blok C No.2B',
  },

  {
    id: 7,
    title: 'No.Telepon : ',
    description: '+62 821-7083-4897',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'klarisaofriana20@mail.com',
  },

  {
    id: 9,
    title: 'Bahasa : ',
    description: 'Indonesia',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Tahun <br /> Pengalaman',
  },

  {
    id: 2,
    no: '1+',
    title: 'Proyek <br /> Selesai',
  },

  {
    id: 3,
    no: '1+',
    title: 'Pelanggan <br /> Puas',
  },

  {
    id: 4,
    no: '1+',
    title: ' Penghargaan <br /> Diterima',
  },
];

export const resume = [
  {
    id: 1,
    category: 'Pengalaman',
    icon: <FaBriefcase />,
    year: 'Jan 2021 - Apr 2021',
    title: 'Web Developer <span> Praktik Kerja Lapangan (PKL) </span>',
    desc: 'Frontend - membuat company profile',
  },

  {
    id: 2,
    category: 'Pengalaman',
    icon: <FaBriefcase />,
    year: 'Ags 2022 - Des 2022',
    title: 'Web Developer <span> Project Base Learning (PBL) </span>',
    desc: 'Frontend - membuat desain UI pada web',
  },

  {
    id: 3,
    category: 'Pengalaman',
    icon: <FaBriefcase />,
    year: 'Feb 2023 - Jun 2023',
    title: 'Web Developer <span> Project Base Learning (PBL) </span>',
    desc: 'Analisis - menganalisa dan membuat laporan hasil akhir projek',
  },

  {
    id: 4,
    category: 'Pengalaman',
    icon: <FaBriefcase />,
    year: 'Ags 2023 - Des 2023',
    title: 'Mobile Developer <span> Project Base Learning (PBL) </span>',
    desc: 'Full Stack - membuat laporan, desain, frontend dan backend',
  },

  {
    id: 5,
    category: 'Pengalaman',
    icon: <FaBriefcase />,
    year: 'Feb 2024 - Jun 2024',
    title: 'IoT <span> Project Base Learning (PBL) </span>',
    desc: 'Analisis - menganalisa dan membuat laporan hasil akhir projek',
  },

  {
    id: 6,
    category: 'Pengalaman',
    icon: <FaBriefcase />,
    year: 'Sep 2024 - Jan 2025',
    title: 'Corporate Social Responsibility Team <span> Magang </span>',
    desc: 'Technical Support - Menyelesaikan troubleshooting kendala teknis peserta pelatihan, seperti masalah dalam implementasi proyek',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '89',
  },

  {
    id: 2,
    title: 'JavaScript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '50',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '70',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyek : ',
        desc: 'Portofolio',
      },
      {
        icon: <FiUser />,
        title: 'Klien : ',
        desc: 'PT. Kinema Systrans Multimedia',
      },
      {
        icon: <FaCode />,
        title: 'Bahasa : ',
        desc: 'HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Pratinjau : ',
        desc: 'https://github.com/klarisaofriana/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyek : ',
        desc: 'Company Profile',
      },
      {
        icon: <FiUser />,
        title: 'Klien : ',
        desc: 'PT. Inforsys Batam',
      },
      {
        icon: <FaCode />,
        title: 'Bahasa : ',
        desc: 'HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Pratinjau : ',
        desc: 'https://inforsys.co.id/home',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyek : ',
        desc: 'Surat Menyurat',
      },
      {
        icon: <FiUser />,
        title: 'Klien : ',
        desc: 'Tata Usaha Jurusan Informatika POLIBATAM',
      },
      {
        icon: <FaCode />,
        title: 'Bahasa : ',
        desc: 'HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Pratinjau : ',
        desc: 'https://if.polibatam.ac.id/pamerin/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyek : ',
        desc: 'Pengelolaan HKI (Hak Kekayaan Intelektual)',
      },
      {
        icon: <FiUser />,
        title: 'Klien : ',
        desc: 'Sentra HKI POLIBATAM',
      },
      {
        icon: <FaCode />,
        title: 'Bahasa : ',
        desc: 'JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Pratinjau : ',
        desc: 'https://if.polibatam.ac.id/pamerin/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Prototipe Mobile',
    details: [
      {
        title: 'Proyek : ',
        desc: 'Desain UI boemil',
      },
      {
        title: 'Klien : ',
        desc: 'Ibu Hamil',
      },
      {
        title: 'Bahasa : ',
        desc: 'Dart',
      },
      {
        title: 'Pratinjau : ',
        desc: 'https://if.polibatam.ac.id/pamerin/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Prototipe Mobile',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyek : ',
        desc: 'Kotak Paket Berbasis IoT',
      },
      {
        icon: <FiUser />,
        title: 'Klien : ',
        desc: 'e-commerce',
      },
      {
        icon: <FaCode />,
        title: 'Bahasa : ',
        desc: 'JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Pratinjau : ',
        desc: 'https://if.polibatam.ac.id/pamerin/',
      },
    ],
  },
];

/*
export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
*/