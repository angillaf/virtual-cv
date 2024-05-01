import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, linkedin, website } from '../helpers/links';
import {
  astro,
  axios,
  eslint,
  i18next,
  javascript,
  jest,
  nextJs,
  nodeJs,
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

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Frontend developer',
      company: 'JJM Development',
      image: import('@/assets/logos/jjm-development-logo.jpeg'),
      dates: [new Date('2023-02'), null],
      description: `
        In my current role as a Frontend Developer, I have the privilege of working on a cutting-edge virtual marketplace that revolutionizes the buying and selling of used items. Here's what sets me apart:
        <br>
        - **Responsibilities:** I create and implement key business features while collaborating closely with the business team, all within a startup environment.
        - **Quality Delivery:** Despite limited time and resources, I prioritize delivering high-quality front-end solutions that align with our company's vision.
        - **Ownership and Collaboration:** I take ownership of developing essential business features, ensuring close communication and collaboration with the business team to meet their requirements and enhance the user experience.
        - **Expertise and Results:** Leveraging my expertise in frontend technologies, including React and TypeScript, I consistently deliver optimal solutions that drive our marketplace's success.
        - **Technical Debt and Code Quality:** I proactively address technical debt and improve code quality by conducting thorough code reviews, implementing best practices, and continuously optimizing the codebase for scalability and efficiency.
        - **Agile Mindset:** Thriving in a dynamic startup environment, I adapt quickly to changing priorities, embracing an agile mindset to deliver impactful solutions.
        - **Personal and Professional Growth:** Working in a startup environment provides invaluable experiences and challenges that fuel my personal and professional growth as a frontend developer.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
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
      links: [
        website({ url: 'https://jjmdevelopment.pl/' }),
        linkedin({ url: 'https://www.linkedin.com/company/jjm-development/mycompany/' }),
      ],
    },
    {
      role: 'Frontend developer (Organization member)',
      company: 'Coders Crew',
      image: import('@/assets/logos/coders-crew-logo.png'),
      dates: [new Date('2021-06'), null],
      description: `
        As a Software Developer at CodersCrew (an NGO organization), I have the incredible opportunity to contribute to open-source projects. Within this dynamic and collaborative organization, I actively participate in knowledge-sharing sessions, fostering an environment of continuous learning and growth among our talented team of developers.
        Being part of CodersCrew means not only working on impactful open-source initiatives but also attending various workshops and development events. Engaging in these enriching experiences allows me to stay updated with the latest trends and technologies in the industry, empowering me to deliver top-notch solutions that align with our organization's vision.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          jest(),
          styledComponents(),
          tailwindCss(),
          astro(),
          nodeJs(),
          eslint(),
          prettier(),
        ],
      },
      links: [
        website({ url: 'https://coderscrew.pl/' }),
        linkedin({ url: 'https://www.linkedin.com/company/coderscrew/mycompany/' }),
      ],
    },
    {
      role: 'Frontend developer',
      company: 'DreamStorm Studios',
      image: import('@/assets/logos/dreamstorm-studios-logo.png'),
      dates: [new Date('2021-10'), new Date('2022-12')],
      description: `
        As a Junior Frontend Developer, I embarked on a journey of growth and learning, contributing to the development of an all-in-one multitool for interactive Web experiences. Here's what sets me apart:
        <br>
        - **Promotion and Growth:** Thanks to my dedication and continuous development, I earned a promotion to Frontend Developer. This allowed me to expand my technical expertise and take on more significant responsibilities, delivering high-quality code for seamless user experiences and optimal performance.
        - **Soft Skills Enhancement:** Alongside frontend development, I honed my soft skills by taking on a side role as a technical recruiter. Engaging with candidates and assessing their skills, I provided valuable insights to the hiring team, strengthening my communication and interpersonal abilities.
        - **Backend Exposure:** I also had the opportunity to undertake backend tasks, gaining valuable exposure to backend development. This cross-functional experience broadened my understanding of the development process and enhanced my collaboration with backend developers. It equipped me with a comprehensive skill set for contributing to end-to-end solutions.
        - **Team Collaboration:** I was a member of a team that planned and executed a major platform refactor, contributing to the project's success through collaborative efforts.
        - **Test Strategy and Quality Assurance:** I actively participated in writing unit and integration tests, taking part in creating a comprehensive test strategy for the product to ensure high-quality code and a reliable user experience.
        - **Storybook Implementation:** I introduced and implemented a storybook UI components library in the application, streamlining the development process and improving the consistency of user interface elements.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          storybook(),
          jest(),
          styledComponents(),
          prisma(),
          tailwindCss(),
          socketio(),
          eslint(),
          prettier(),
        ],
      },
      links: [
        website({ url: 'https://dreamstormstudios.com/' }),
        facebook({ url: 'https://www.facebook.com/DreamStormStudios' }),
        linkedin({ url: 'https://www.linkedin.com/company/dreamstormstudios/mycompany/' }),
      ],
    },
    {
      role: 'Freelance Frontend Developer',
      company: 'Netzwind',
      image: import('@/assets/logos/netzwind-logo.jpeg'),
      dates: [new Date('2021-08'), new Date('2021-09')],
      description: `
        As a Freelance Developer, I have had the opportunity to work on diverse projects, including an information system for students and a popular mobile app with over 50k downloads. Here's a closer look at my contributions:
        <br>
        - **Information System for Students:** I played a key role in planning the application architecture and implementing the initial version of the system. Leveraging my expertise in frontend technologies, I ensured a smooth user experience and seamless integration of features.
        - **Mobile App Development:** I was part of a team responsible for developing a mobile app that gained significant traction with over 50k downloads. By closely collaborating with the team, I contributed to the success of the app by delivering high-quality code and user-friendly features.
        - **Backend Integration:** I successfully connected the frontend with an existing backend, ensuring efficient data transfer and synchronization. Through effective communication and coordination with the backend team, I delivered a seamless end-to-end experience for users.
        - **Product Owner Collaboration:** Working closely with the product owner, I actively participated in defining requirements and translating them into actionable features. By understanding the user needs and aligning them with the project goals, I contributed to the timely delivery of new features.
        - **User-Centric Approach:** Throughout my work, I consistently focused on creating an exceptional user experience. By conducting user research, gathering feedback, and implementing iterative improvements, I ensured that the applications I worked on provided value and met user expectations.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          typescript(),
          i18next(),
          {
            icon: 'simple-icons:axios',
            iconColor: '#5a29e4',
            name: 'Axios',
            url: 'https://axios-http.com/',
          },
          redux(),
          eslint(),
          prettier(),
        ],
      },
      links: [website({ url: 'https://netzwind.eu/' })],
    },
    {
      role: 'React Native Developer Intern',
      company: 'Expansio Software House',
      image: import('@/assets/logos/expansio-logo.jpeg'),
      dates: [new Date('2021-07'), new Date('2021-08')],
      description: `
        During my internship as a React Native Developer, I had the privilege of contributing to the development of a mobile application aimed at enhancing programming skills through interactive learning experiences. Here's a closer look at my internship experience:
        <br>
        - **Internship as a React Native Developer:** Contributed to the development of a mobile application focused on enhancing programming skills through interactive learning experiences.
        - **Collaborative Team Environment:** Worked as part of a collaborative team to build a chatbot-driven mobile application that provided an immersive learning environment.
        - **Insights into the Development Process:** Gained valuable insights into the end-to-end development process, from conceptualization to implementation, within a dynamic team setting.
        - **Agile Methodologies:** Actively participated in agile development methodologies, such as scrum, to ensure efficient collaboration and timely delivery of project milestones.
        - **Learning from Experienced Developers:** Collaborated with experienced developers, benefiting from their mentorship and learning best practices in React Native development.
        - **Passion for Application Development:** This internship experience further fueled my passion for application development and reinforced the importance of teamwork in achieving project success.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react({ name: 'React Native' }), typescript(), javascript(), redux(), eslint(), prettier()],
      },
      links: [
        website({ url: 'https://expans.io/' }),
        linkedin({ url: 'https://www.linkedin.com/company/expansio-software-house/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
