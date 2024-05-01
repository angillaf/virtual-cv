import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Szymon Kin',
  role: 'Frontend Developer',
  details: [
    { label: 'Phone', value: '+48 515 191 231', url: 'tel:+48 515 191 231' },
    { label: 'Email', value: 'szymon.kin@gmail.com', url: 'mailto:szymon.kin@gmail.com' },
    { label: 'From', value: 'Poznan, Poland' },
    { label: 'Contract type', value: 'B2B' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+48 515 191 231' },
    { label: 'Email', value: 'szymon.kin@gmail.com', url: 'mailto:szymon.kin@gmail.com' },
    { label: 'LinkedIn', value: '/in/szymon-kin', url: 'https://www.linkedin.com/in/szymon-kin/' },
    { label: 'GitHub', value: '/hoolek77', url: 'https://github.com/hoolek77' },
    { label: 'Website', value: 'szymonkin.dev', url: 'https://szymonkin.dev/', fullRow: true },
  ],
  description:
    "Hi! I am a remote Frontend developer with a passion for the latest solutions and interactive design, that's why I also do it outside of work. I started my journey with web application programming in 2020. Since then, I have developed quite a few projects. Starting from commercial, through projects for non-government organizations, to personal. Thanks to the variety of domains, I had the great pleasure to experience numerous different tech stacks and work environments. I'm looking for new opportunities to create impactful products.",
  tags: [{ name: 'Open for work' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'szymon-kin-cv.pdf',
  },
  links: [github({ url: 'https://github.com/hoolek77' }), linkedin({ url: 'https://www.linkedin.com/in/szymon-kin/' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
