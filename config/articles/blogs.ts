import { Blog, Breadcrumb } from "./types";

const breadcrumb: Breadcrumb[] = [
  { text: "Home", url: "/" },
  { text: "Blogs", url: "/blog" },
];

const articles: Blog[] = [
  {
    uid: "programming-terminology-explained-acid",
    coverImageUrl:
      "/static/blogs/programming-terminology-explained-acid/cover.svg",
    title: "Programming Terminology Explained: ACID",
    publishOn: "20220822",
    readTime: "10 min",
    type: {
      text: "Learning",
      icon: "newspaper",
    },
    tags: [
      { text: "Software Development" },
      { text: "Programming Terminology" },
    ],
    linkUrl: {},
    mdxFilename: "programming-terminology-explained-acid.mdx",
    summary: `
      Learning and understanding programming terminology can get confusing, given how these terms have multiple meanings in different scenarios.
      It is important that we learn the terminology that we will be using in conversations to avoid confusion among the team.
    `,
  },
  {
    uid: "software-development-methodology",
    coverImageUrl: "/static/blogs/software-development-methodology/cover.svg",
    title: "Software Development Methodologies",
    publishOn: "20220802",
    readTime: "5 min",
    type: {
      text: "Learning",
      icon: "newspaper",
    },
    tags: [{ text: "Software Development" }, { text: "Project Management" }],
    linkUrl: {},
    mdxFilename: "software-development-methodology.mdx",
    summary: `
      Software development methodology comprises a set of guidelines, instruments, and methods used in project planning, execution, and management. Software development techniques support team engagement by assisting project managers in leading team members and monitoring work.
    `,
  },
  {
    uid: "programming-paradigms",
    coverImageUrl: "/static/blogs/programming-paradigms/cover.svg",
    title: "Programming Paradigms: What & Why?",
    publishOn: "20220729",
    readTime: "5 min",
    type: {
      text: "Learning",
      icon: "newspaper",
    },
    tags: [{ text: "Software Development" }, { text: "Programming Paradigm" }],
    linkUrl: {},
    mdxFilename: "programming-paradigms.mdx",
    summary: `
      Programming paradigm refers to the writing style and method of structuring code. It refers to tools and strategies to solve problems in a certain way, following a certain structure. There are many well-known styles; teams should always adhere to a paradigm's philosophy or approach when choosing to focus on one.
    `,
  },
  {
    uid: "software-development-workflows",
    coverImageUrl: "/static/blogs/software-development-workflows/cover.svg",
    title: "Software Development Workflows for CI/CD",
    publishOn: "20220726",
    readTime: "4 min",
    type: {
      text: "Learning",
      icon: "newspaper",
    },
    tags: [
      { text: "Software Development" },
      { text: "CI/CD" },
      { text: "Branching Technique" },
      { text: "Development Methodology" },
    ],
    linkUrl: {},
    mdxFilename: "software-development-workflows.mdx",
    summary: `
      Creating and releasing software places a premium on speed and agility in the current software development context.
      To make several concurrent modifications, teams need to prioritize having an effective branching technique.
    `,
  },
];

export default {
  breadcrumb,
  articles,
  pageSize: 10,
  max: {
    seeOthers: 10,
    readMore: 4,
  },
};
