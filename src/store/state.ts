import { Fruit, Collect, Experience, Skill } from '@/types'
// import { generateId } from '@/utils'

// prettier-ignore
export const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const fruit: Fruit[] = [
  { label: '🍇  Grapes', value: 'grapes' },
  { label: '🍈  Melon', value: 'melon' },
  { label: '🍉  Watermelon', value: 'watermelon' },
  { label: '🍊  Tangerine', value: 'tangerine' },
  { label: '🍋  Lemon', value: 'lemon' },
  { label: '🍌  Banana', value: 'banana' },
  { label: '🍍  Pineapple', value: 'pineapple' },
  { label: '🍎  Apple', value: 'apple' },
  { label: '🍏  Green apple', value: 'green apple' },
  { label: '🍐  Pear', value: 'pear' },
  { label: '🍑  Peach', value: 'peach' },
  { label: '🍒  Cherries', value: 'cherries' },
  { label: '🍓  Strawberry', value: 'strawberry' },
  { label: '🍅  Tomato', value: 'tomato' },
  { label: '🥥  Coconut', value: 'coconut' }
]

export const collects: Collect[] = [
  {
    id: '5b75fa11977af',
    type: 'Web Site',
    title: 'Bizone - Official Site',
    poster: '001.png',
    pictures: ['001.png', '002.png', '003.png'],
    description: LOREM,
    tags: ['NextTS', 'Custom Scss', 'Responsive'],
    createdAt: '2021-04-01',
    updatedAt: '2021-04-01'
  },
  {
    id: '8a41a8418f56d',
    type: 'Web App',
    title: 'Café Ordering (Café De Oasis)',
    poster: '003.png',
    pictures: ['001.png', '002.png', '003.png'],
    description: LOREM,
    tags: ['NodeJS', 'VueTS', 'Custom Less', 'PWA'],
    createdAt: '2018-09-14',
    updatedAt: '2021-04-01'
  },
  {
    id: '395ba3d0df327',
    type: 'Web Site',
    title: 'Destiny Enterprise - Official Site',
    poster: '003.png',
    pictures: ['001.png', '002.png', '003.png'],
    description: LOREM,
    tags: ['VueTS', 'Custom Less', 'Prototype'],
    createdAt: '2019-07-18',
    updatedAt: '2021-04-01'
  },
  {
    id: 'e8fe90b7c9854',
    type: 'Web App',
    title: 'Oasisspa B2B Portal Interface',
    poster: '002.png',
    pictures: ['001.png', '002.png', '003.png'],
    description: LOREM,
    tags: ['VueTS', 'PHP Laravel', 'Custom Scss', 'PWA'],
    createdAt: '2019-05-09',
    updatedAt: '2021-04-01'
  }
]

export const experience: Experience[] = [
  {
    id: 'd5f87fa451803',
    company: 'OneDee Solution Co., Ltd.',
    title: 'Front-End Web Developer',
    description: LOREM,
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
    description: LOREM,
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
    description: LOREM,
    duration: {
      from: '2016-01-04',
      to: '2016-04-15'
    },
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  }
]

export const skills: Skill[] = [
  {
    id: 'c12cb217523db',
    label: 'Front-End',
    mastery: 88,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '7725b08d882af',
    label: 'Back-End',
    mastery: 50,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: 'da87c4d91d3ab',
    label: 'JavaScript (JS)',
    mastery: 92,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: 'cd6fbec19b38e',
    label: 'TypeScript (TS)',
    mastery: 72,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '7cad30d68a821',
    label: 'PHP (Laravel)',
    mastery: 40,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '5fda57dc31026',
    label: 'NestJS',
    mastery: 60,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '94a83c0ce46ea',
    label: 'ReactJS',
    mastery: 80,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: 'cd0015dceec6f',
    label: 'NextJS',
    mastery: 75,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '3982dec055b7c',
    label: 'VueJS',
    mastery: 90,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '9ec4f678b5c3f',
    label: 'NuxtJS',
    mastery: 10,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: 'c20616de59451',
    label: 'UX/UI',
    mastery: 44,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  },
  {
    id: '4ea8356a5901',
    label: 'Photoshop & XD',
    mastery: 50,
    description: 'Generate Lorem Ipsum placeholder text.',
    createdAt: '2021-07-01',
    updatedAt: '2021-07-01'
  }
]
