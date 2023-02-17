import React, { ReactElement } from 'react';
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaVuejs,
  SiDiscord,
  SiElectron,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGmail,
  SiGulp,
  SiJavascript,
  SiJquery,
  SiLess,
  SiLinux,
  SiMobx,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPug,
  SiRedux,
  SiSass,
  SiSequelize,
  SiSqlite,
  SiTelegram,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWindows,
} from 'react-icons/all';

export type ProjectProps = {
  image: string;
  title: string;
  githubLink?: string;
  link?: string;
  description: string;
  tags: string[];
};

export const projects: ProjectProps[] = [
  {
    githubLink: 'https://github.com/k1nnyyY/site-portfolio.git',
    title: 'My site Portfolio',
    description:
      'My site portfolio nothing specific',
    image: 'https://imgur.com/uMdktfp.jpg',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
   },
   {
    githubLink: 'https://github.com/k1nnyyY/users-list.git',
    title: 'Users-List',
    description:
      "application for inviting all or several participants for specific purposes",
    image: 'https://user-images.githubusercontent.com/12086860/184236601-2c8d94bf-105c-4b48-982c-65a6ed4f8c51.png',
    tags: [
      'React',
      'useEffect',
      'Fetch on API',
      'Skeleton',
    ],
  },
   {
    githubLink: 'https://github.com/k1nnyyY/Quiz-.git',
    title: 'Quiz',
    description:
      'Quiz is a type of program that allows users to test their knowledge on a specific subject or topics. It typically consists of a series of questions with multiple choice or true/false answers, and it can be used for educational or entertainment purposes.',
    image: 'https://user-images.githubusercontent.com/12086860/184236063-9f807f93-f6a4-4577-9a12-443ff1d3fd43.png',
    tags: [
      'React',
      'JSX',
    ],
  },
  {
    githubLink: 'https://github.com/k1nnyyY/React-budget-manager-main.git',
    title:'Budget app',
    description:
    'budget app with schedule',
    image: 'https://imgur.com/ZlfCBel.jpg',
    tags: [
      'React',
      'TypeScript',
      'SASS',
    ],
  },

];

export type SkillContentProps = {
  title: string;
  icon?: ReactElement;
};

export type SkillProps = {
  title: string;
  content: SkillContentProps[];
};

export const skills: SkillProps[] = [
  {
    title: 'Frontend:',
    content: [
      {
        title: 'HTML',
        icon: <FaHtml5 />,
      },
      {
        title: 'CSS',
        icon: <FaCss3 />,
      },
      {
        title: 'SASS',
        icon: <SiSass />,
      },
      {
        title: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        title: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        title: 'Webpack',
        icon: <SiWebpack />,
      },
      {
        title: 'React-Context',
        icon: <FaReact />,
      },
      {
        title: 'React',
        icon: <FaReact />,
      },

    ],
  },
  {
    title: 'Principles:',
    content: [
      {
        title: 'DRY',
      },
      {
        title: 'KISS',
      },
      {
        title: 'YAGNI',
      },
    ],
  },
  {
    title: 'Devops:',
    content: [
      {
        title: 'Git',
        icon: <SiGit />,
      },
      {
        title: 'Github',
        icon: <SiGithub />,
      },
      // {
      //   title: 'Docker',
      //   icon: <SiDocker />,
      // },
      {
        title: 'Windows',
        icon: <SiWindows />,
      },
    ],
  },
];

export type ContactProps = {
  icon: ReactElement;
  text: string;
  link?: string;
};

export const contacts: ContactProps[] = [
  {
    text: '@k1nnyyY',
    icon: <SiGithub />,
    link: 'https://github.com/k1nnyyY',
  },
  {
    text: '@k1nnyyY',
    icon: <SiTelegram />,
    link: 'https://t.me/k1nnyyY',
  },
  {
    text: 'osman.haciev231@gmail.com',
    icon: <SiGmail />,
    link: 'mailto:osman.haciev231@gmail.com',
  },
];
