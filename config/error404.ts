export type HelpLink = {
  text: string;
  url: string;
};

const links: HelpLink[] = [
  { text: "Home", url: "/" },
  { text: "Blogs", url: "/blog" },
  // { text: "Links", url: "/links" },
  { text: "Contact", url: "/contact" },
];

export default {
  links,
};
