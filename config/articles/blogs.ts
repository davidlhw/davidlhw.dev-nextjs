import { Blog, Breadcrumb } from "./types";

const breadcrumb: Breadcrumb[] = [
  { text: "Home", url: "/" },
  { text: "Blogs", url: "/blog" },
];

const articles: Blog[] = [
  // {
  //   uid: "JyYWLpk6IkK_mPzQh0pdmg",
  //   coverImageUrl: "/static/blogs/prototyping/cover.jpg",
  //   title: "Prototyping from A to Z: best practices for successful prototypes",
  //   publishOn: "12/08/1997",
  //   readTime: "16 min",
  //   type: {
  //     text: "Tutorial",
  //     icon: "camera",
  //   },
  //   tags: [
  //     {
  //       text: "Python",
  //       icon: "py",
  //     },
  //     {
  //       text: "Flask",
  //       icon: "flask",
  //     },
  //   ],
  //   linkUrl: {
  //     facebook: "https://google.com",
  //   },
  //   mdxFilename: "Prototyping.mdx",
  //   summary: `
  //     Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
  //     tools that even influence both web designers and developers.
  //   `,
  // },
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
