import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

export const apolloGraphql = createSkill({
Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  icon: 'logos:astro',
  name: 'Astro',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  name: 'Chakra UI',
  url: 'https://chakra-ui.com/',
});

export const eslint = createSkillFactory({
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  name: 'ESLint',
  url: 'https://eslint.org/',
});

export const jest = createSkillFactory({
  icon: 'logos:jest',
  name: 'Jest',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  name: 'MongoDB',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  name: 'NestJS',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  icon: 'logos:nextjs-icon',
  name: 'Next.js',
  url: 'https://nextjs.org/',
});

export const postgreSql = createSkillFactory({
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  name: 'PostgreSQL',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  name: 'Prettier',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  icon: 'logos:react',
  iconColor: '#61DAFB',
  name: 'React.js',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'logos:react-query-icon',
  url: 'https://tanstack.com/query',
});

export const tailwindCss = createSkillFactory({
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  name: 'Tailwind CSS',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  name: 'TypeScript',
  url: 'https://www.typescriptlang.org/',
});

export const javascript = createSkillFactory({
  icon: 'logos:javascript',
  name: 'JavaScript ES6',
  url: 'https://www.javascript.com/',
});

export const storybook = createSkillFactory({
  icon: 'logos:storybook-icon',
  iconColor: '#FF4785',
  name: 'Storybook',
  url: 'https://storybook.js.org/',
});

export const redux = createSkillFactory({
  icon: 'logos:redux',
  name: 'Redux',
  url: 'https://redux.js.org/',
});

export const styledComponents = createSkillFactory({
  icon: 'simple-icons:styledcomponents',
  iconColor: '#DB7093',
  name: 'Styled Components',
  url: 'https://styled-components.com/',
});

export const prisma = createSkillFactory({
  icon: 'logos:prisma',
  name: 'Prisma',
  url: 'https://www.prisma.io/',
});

export const socketio = createSkillFactory({
  icon: 'logos:socket-io',
  name: 'Socket.io',
  url: 'https://socket.io/',
});

export const materialUi = createSkillFactory({
  icon: 'logos:material-ui',
  name: 'Material UI',
  url: 'https://material-ui.com/',
});

export const i18next = createSkillFactory({
  icon: 'simple-icons:i18next',
  iconColor: '#26A69A',
  name: 'i18next',
  url: 'https://www.i18next.com/',
});

export const html = createSkillFactory({
  icon: 'logos:html-5',
  name: 'HTML5',
  url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
});

export const css3 = createSkillFactory({
  icon: 'logos:css-3',
  name: 'CSS3',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
});

export const nodeJs = createSkillFactory({
  icon: 'logos:nodejs-icon',
  name: 'Node.js',
  url: 'https://nodejs.org/',
});

export const yarn = createSkillFactory({
  icon: 'logos:yarn',
  name: 'Yarn',
  url: 'https://yarnpkg.com/',
});

export const npm = createSkillFactory({
  icon: 'logos:npm-icon',
  name: 'NPM',
  url: 'https://www.npmjs.com/',
});

export const sass = createSkillFactory({
  icon: 'logos:sass',
  name: 'Sass',
  url: 'https://sass-lang.com/',
});

export const sentry = createSkillFactory({
  icon: 'logos:sentry-icon',
  name: 'Sentry',
  url: 'https://sentry.io/',
});

export const axios = createSkillFactory({
  icon: 'logos:axios',
  name: 'Axios',
  url: 'https://axios-http.com/',
});

export const rtkQuery = createSkillFactory({
  icon: 'logos:redux',
  name: 'RTK Query',
  url: 'https://redux-toolkit.js.org/rtk-query/overview',
});
