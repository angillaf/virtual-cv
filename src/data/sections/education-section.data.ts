import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Computer Science',
      institution: 'Collegium Da Vinci',
      image: import('@/assets/logos/collegium-da-vinci-logo.png'),
      dates: [new Date('2020.10'), new Date('2024.02')],
      description: "Engineer's degree. Specialization in mobile and web application development.",
      links: [website({ url: 'https://cdv.pl/en/' })],
    },
    {
      title: 'Certificate of finishing web programming course',
      institution: 'Coders Camp',
      image: import('@/assets/logos/coders-crew-logo.png'),
      dates: [new Date('2020.11'), new Date('2021.04')],
      description: 'Credential ID CC012021W065',
      links: [website({ url: 'https://www.coderscamp.edu.pl/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
