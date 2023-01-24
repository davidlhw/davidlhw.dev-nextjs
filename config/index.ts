import theme from "./theme";
import landing from "./landing";
import error404 from "./error404";
import viewport from "./viewport";
import articles from "./articles";
import headerNav from "./headerNav";
import pageTitle from "./pageTitle";

export default {
  viewport,
  theme,
  headerNav,
  articles,
  landing,
  error404,
  pageTitle,
  lottie: {
    path: "/static/loading-lottie.json",
    duration: 288, //in ms = 2sec
  },
  dateFormat: {
    parse: "yyyyMMdd",
    format: "dd MMM yyyy",
  },
  twitterUsername: "davidlhw_",
  cta: {
    medium: "https://medium.com/@davidlhw",
    github: "https://github.com/DavidLHW",
    linkedin: "https://www.linkedin.com/in/davidlhw/",
    twitter: "https://twitter.com/davidlhw_",
  },
  hostname: "https://davidlhw.dev",
  ogImageRelPath: "/cover.png",
  ogDescription: "Personal portfolio site and DevLogs",
};
