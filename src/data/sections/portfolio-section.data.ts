import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github } from '../helpers/links';
import {
  apolloGraphql,
  astro,
  axios,
  chakraUi,
  eslint,
  i18next,
  jest,
  mongoDb,
  nestJs,
  nextJs,
  nodeJs,
  postgreSql,
  prettier,
  prisma,
  react,
  redux,
  rtkQuery,
  sentry,
  socketio,
  storybook,
  styledComponents,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Vilandy',
      image: import('@/assets/portfolio/vilandy.png'),
      dates: [new Date('2023.02'), null],
      details: [
        { label: 'Team size', value: '10 people' },
        { label: 'My role', value: ['Frontend Developer'] },
        { label: 'Company', value: 'JJM Development' },
        { label: 'Category', value: ['Web app, Mobile app, Commercial'] },
      ],
      pdfDetails: [{ label: 'Demo', value: 'https://www.vilandy.com/', url: 'https://www.vilandy.com/' }],
      description:
        'The app is an all-in-one unique Home & Garden shopping platform offering the opportunity to sell and buy used furniture and accessories.',
      tagsList: {
        title: 'Technologies',
        tags: [
          nextJs(),
          react(),
          typescript(),
          jest(),
          styledComponents(),
          redux(),
          rtkQuery(),
          axios(),
          sentry(),
          eslint(),
          prettier(),
        ],
      },
      links: [demo({ url: 'https://www.vilandy.com/' })],
    },
    {
      name: 'The Labz Event Designer',
      image: import('@/assets/portfolio/labz.jpeg'),
      dates: [new Date('2021.10'), new Date('2022.12')],
      details: [
        { label: 'Team size', value: '6-10 people' },
        { label: 'My role', value: ['Frontend Developer'] },
        { label: 'Company', value: 'DreamStorm Studios' },
        { label: 'Category', value: ['Web app, Commercial'] },
      ],
      pdfDetails: [{ label: 'Demo', value: 'https://www.thelabz.com/', url: 'https://www.thelabz.com/' }],
      description:
        'The app is an all-in-one event website builder for creating interactive, fully customizable virtual events. The app can support various use cases, starting from a simple static website to an advanced video-conferencing platform. My contribution to the project was that I maintained and developed the existing codebase in a team with other developers. ',
      tagsList: {
        title: 'Technologies',
        tags: [
          nextJs(),
          react(),
          typescript(),
          prisma(),
          postgreSql(),
          storybook(),
          jest(),
          socketio(),
          eslint(),
          prettier(),
        ],
      },
      links: [demo({ url: 'https://www.thelabz.com/' })],
    },
    {
      name: 'Devscard',
      image: import('@/assets/portfolio/devscard.jpeg'),
      dates: [new Date('2022-09'), new Date('2023-01')],
      details: [
        { label: 'Team size', value: '4 people' },
        { label: 'My role', value: ['Frontend Developer'] },
        { label: 'Organization', value: 'CodersCrew' },
        { label: 'Category', value: ['Web app', 'Open Source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://szymonkin.dev/', url: '#' },
        { label: 'Repository', value: 'https://github.com/KonradSzwarc/devscard', url: '#' },
      ],
      description:
        "The main objective of the app is to create a comprehensive virtual portfolio in just a few minutes. It's an open-source project created in collaboration with a team of passionate developers. Project tech-stack allowed me to learn and use the newest cutting-edge technologies for creating static web pages.",
      tagsList: { title: 'Technologies', tags: [astro(), react(), typescript(), tailwindCss(), nodeJs()] },
      links: [demo({ url: '#' }), github({ url: 'https://github.com/KonradSzwarc/devscard' })],
    },
    {
      name: 'CodersCamp',
      image: import('@/assets/portfolio/coderscamp.jpeg'),
      dates: [new Date('2021-08'), new Date('2021-10')],
      details: [
        { label: 'Team size', value: '8-10 people' },
        { label: 'My role', value: ['Frontend Developer'] },
        { label: 'Organization', value: 'CodersCrew' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://www.coderscamp.edu.pl', url: 'https://www.coderscamp.edu.pl/' },
        {
          label: 'Repository',
          value: 'https://github.com/CodersCrew/coderscamp',
          url: 'https://github.com/CodersCrew/coderscamp',
        },
      ],
      description:
        'The goal of the app is to create an all-in-one platform to organize CodersCamp entirely online. CodersCamp is a 6-month web programming course organized by the CodersCrew Association. Our mission is to lead everyone from the first lines of code to start a career as a web developer.',
      tagsList: {
        title: 'Technologies',
        tags: [
          nextJs(),
          react(),
          typescript(),
          chakraUi(),
          {
            icon: 'logos:vitejs',
            name: 'Vite',
            url: 'https://vitejs.dev/',
          },
          jest(),
          {
            icon: 'logos:docusaurus',
            name: 'Docusaurus',
            url: 'https://docusaurus.io/',
          },
        ],
      },
      links: [
        demo({ url: 'https://www.coderscamp.edu.pl/' }),
        github({ url: 'https://github.com/CodersCrew/coderscamp' }),
      ],
    },
    {
      name: 'Rick & Morty Wiki',
      image: import('@/assets/portfolio/rickandmorty.jpeg'),
      dates: [new Date('2021-10'), new Date('2021-12')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'Frontend Developer' },
        { label: 'Category', value: ['Web app', 'Learning purpose', 'Personal'] },
      ],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'https://rick-and-morty-wiki-beige.vercel.app',
          url: 'https://rick-and-morty-wiki-beige.vercel.app',
        },
        {
          label: 'Repository',
          value: 'https://github.com/hoolek77/rick-and-morty-wiki',
          url: 'https://github.com/hoolek77/rick-and-morty-wiki',
        },
      ],
      description:
        'Rick & Morty Wiki is an app that allows to search through the series universe. It was a personal project that helped me learn and understand GraphQL and its related concepts.',
      tagsList: { title: 'Technologies', tags: [react(), typescript(), apolloGraphql(), styledComponents()] },
      links: [
        demo({ url: 'https://rick-and-morty-wiki-beige.vercel.app/' }),
        github({ url: 'https://github.com/hoolek77/rick-and-morty-wiki' }),
      ],
    },
    {
      name: 'Task Berry',
      image: import('@/assets/portfolio/taskberry.jpeg'),
      dates: [new Date('2021-04'), new Date('2021-06')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'Fullstack Developer' },
        { label: 'Category', value: ['Web app', 'Learning purpose', 'Personal'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://task-berry.vercel.app', url: 'https://task-berry.vercel.app' },
        {
          label: 'Repository',
          value: 'https://github.com/hoolek77/task-berry',
          url: 'https://github.com/hoolek77/task-berry',
        },
      ],
      description:
        'Task Berry is a task organizer app for daily activities management. The goal of the app was to practice using TypeScript with React and Redux Toolkit. I also wrote my first API with NestJS for this project.',
      tagsList: { title: 'Technologies', tags: [react(), typescript(), redux(), i18next(), nestJs(), mongoDb()] },
      links: [
        demo({ url: 'https://task-berry.vercel.app/' }),
        github({ url: 'https://github.com/hoolek77/task-berry' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
