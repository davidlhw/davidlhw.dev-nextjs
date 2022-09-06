import landing from "./landing";

const common = {
  readTime: "{{ 1 }} read",
  empty: "No data found",
};

const contact = {
  title: "Let's keep in touch.",
  subtitle: "Tell me about your crazy ideas.",
  form: {
    email: "Your email",
    subject: "Subject",
    message: "Your message",

    placeholder: {
      email: "name@company.com",
      subject: "Let me know how I can help",
    },

    errMessage: {
      email: "Email is required!",
    },

    button: "Send Message",
  },
};

const blog = {
  readMore: "Read more",
  pagination: {
    info: "Showing {{ 1 }} to {{ 2 }} of {{ 3 }} Entries",
    prev: "Prev",
    next: "Next",
  },
};

const article = {
  stickyHeadings: {
    seeOthers: "SEE OTHERS",
    headings: "QUICK GLANCE",
    languages: "TECH",
    topics: "TOPICS",
  },
  readNext: "Read Next",
  readTime: "Read in {{ 1 }}",
  links: {
    facebook: "Share",
    twitter: "Tweet",
    github: "Github",
    copy: "Copy",
    realSite: "Visit Site",
  },
  copySuccess: "Link URL copied!",
};

const footer = {
  copyright: "© 2022 David Lin",
};

const err404 = {
  title: {
    sm: "404",
    md: "404 Not Found",
  },
  subtitle: "Whoops! That page doesn't exist.",
  help: "Here are some helpful links instead:",
};

export default {
  common,
  landing,
  contact,
  blog,
  article,
  footer,
  err404,
};
