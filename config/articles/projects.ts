import { Breadcrumb, Article } from "./types";

const breadcrumb: Breadcrumb[] = [{ text: "Home", url: "/" }];

const articles: Article[] = [
  {
    uid: "before-class",
    coverImageUrl: "/static/projects/before-class/cover.png",
    title: "BeforeClass",
    publishOn: "20230124",
    readTime: "12 min",
    tags: [
      {
        text: "Vue",
        icon: "vue",
      },
      {
        text: "Firebase",
        icon: "firebase",
      },
      {
        text: "Tailwind",
        icon: "tailwind",
      },
    ],
    linkUrl: {
      github: "https://github.com/BeforeClass/web-frontend",
      realSite: "https://beforeclass.netlify.app",
    },
    mdxFilename: "Project1.mdx",
    summary: `
      An open-source university module planning tool for SMU students.
    `,
  },
  {
    uid: "saleswhale-teams-clone",
    coverImageUrl: "/static/projects/saleswhale-teams-clone/cover.png",
    title: "Saleswhale Teams Clone",
    publishOn: "20220530",
    readTime: "12 min",
    tags: [
      {
        text: "TypeScript",
        icon: "ts",
      },
      {
        text: "React",
        icon: "react",
      },
    ],
    linkUrl: {
      github: "https://github.com/DavidLHW/saleswhale-teams-clone",
      realSite: "https://saleswhale-teams-clone.netlify.app/",
    },
    mdxFilename: "Project1.mdx",
    summary: `
      A simple clone of the Saleswhale Teams app with minimal functionality.
    `,
  },
  {
    uid: "file-sensitivity-system",
    coverImageUrl: "/static/projects/file-sensitivity-system/cover.svg",
    title: "File Sensitivity System",
    publishOn: "20210917",
    readTime: "12 min",
    tags: [
      {
        text: "Python",
        icon: "py",
      },
      {
        text: "Flask",
        icon: "flask",
      },
      {
        text: "Celery",
        icon: "celery",
      },
      {
        text: "PostgreSQL",
        icon: "pg",
      },
      {
        text: "Redis",
        icon: "redis",
      },
    ],
    linkUrl: {
      github: "https://github.com/DavidLHW/file-sensitivity-system",
      // realSite: "https://google.com",
    },
    mdxFilename: "Project1.mdx",
    summary: `
      A simple app that authenticates users, saves uploaded files and analyze the sensitivity score of a file with a specified metric.
    `,
  },
  {
    uid: "slido-me-first",
    coverImageUrl: "/static/projects/slido-me-first/cover.svg",
    title: "Slido Vote Bot",
    publishOn: "20220207",
    readTime: "12 min",
    tags: [
      {
        text: "Python",
        icon: "py",
      },
    ],
    linkUrl: {
      github: "https://github.com/DavidLHW/slido-me-first",
      // realSite: "https://google.com",
    },
    mdxFilename: "Project1.mdx",
    summary: `
      A simple voting bot for the audience interaction tool Slido (slido.com) made in Python. Vote for your question as often as you like.
    `,
  },
];

export default {
  breadcrumb,
  articles,
};
