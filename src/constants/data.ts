import type { Collect, Experience, Skill } from '@/types'

export const Collects: Collect[] = [
  {
    id: '5b75fa11977af',
    type: 'Web Site',
    title: 'Bizone - Official Site',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    poster: '001.png',
    pictures: ['001.png', '002.png', '003.png'],
    tags: ['NextTS', 'Custom Scss', 'Responsive'],
    createdAt: '2021-04-01',
    updatedAt: '2021-04-01'
  },
  {
    id: '8a41a8418f56d',
    type: 'Web App',
    title: 'Café Ordering (Café De Oasis)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    poster: '003.png',
    pictures: ['001.png', '002.png', '003.png'],
    tags: ['NodeJS', 'VueTS', 'Custom Less', 'PWA'],
    createdAt: '2018-09-14',
    updatedAt: '2021-04-01'
  },
  {
    id: '395ba3d0df327',
    type: 'Web Site',
    title: 'Destiny Enterprise - Official Site',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    poster: '003.png',
    pictures: ['001.png', '002.png', '003.png'],
    tags: ['VueTS', 'Custom Less', 'Prototype'],
    createdAt: '2019-07-18',
    updatedAt: '2021-04-01'
  },
  {
    id: 'e8fe90b7c9854',
    type: 'Web App',
    title: 'Oasisspa B2B Portal Interface',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    poster: '002.png',
    pictures: ['001.png', '002.png', '003.png'],
    tags: ['VueTS', 'PHP Laravel', 'Custom Scss', 'PWA'],
    createdAt: '2019-05-09',
    updatedAt: '2021-04-01'
  }
]

export const Experiences: Experience[] = [
  {
    id: 'd5f87fa451803',
    company: 'OneDee Solution Co., Ltd.',
    title: 'Front-End Web Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: {
      from: '2021-07-05',
      to: void 0
    },
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '988cf1ab447b',
    company: 'Omadar Co., Ltd.',
    title: 'Front-End Developer',
    description: 'ช่วยทีมพัฒนา Services APIs, Third party connection, Front-End and Back-End projects.',
    duration: {
      from: '2021-01-18',
      to: '2021-06-18'
    },
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: 'bf09afe4fa0ee',
    company: 'TAP Technology Co., Ltd.',
    title: 'Front-End Programmer',
    description:
      "สร้างและปรับปรัง Web Official, Saas และระบบสําหรับใช้ภายในองค์กรทั้งหมด. ค้นหาเทคโนโลยีใหม่ๆ, Framework's, Tools ต่างๆ และทํามาปรับใช้เพื่อได้ผลลัพธ์ที่ดีที่สุด, Base Quantity & High Performance.",
    duration: {
      from: '2017-04-24',
      to: '2020-11-30'
    },
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '2b3cea19734f7',
    company: 'RGB72 Co., Ltd.',
    title: 'Junior Back-End Programmer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: {
      from: '2016-09-12',
      to: '2016-12-31'
    },
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '1d6bc912bd8df',
    company: 'Wanavit Group',
    title: 'Internship Student',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: {
      from: '2016-01-04',
      to: '2016-04-15'
    },
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  }
]

export const Skills: Skill[] = [
  {
    id: 'c12cb217523db',
    label: 'Front-End',
    mastery: 100,
    description: 'ReactJS, NextJS, VueJS, NuxtJS.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '7725b08d882af',
    label: 'Back-End',
    mastery: 50,
    description: 'NodeJS, NestJS, PHP (Laravel).',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: 'da87c4d91d3ab',
    label: 'JavaScript (JS)',
    mastery: 75,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: 'cd6fbec19b38e',
    label: 'TypeScript (TS)',
    mastery: 75,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: 'c20616de59451',
    label: 'UX/UI',
    mastery: 20,
    description: 'Photoshop, XD, Figma.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  }
]
