import experiences from "./experiences";
import skillsets from "./skillsets";

const identities: string[] = [
  "Software Engineer",
  "Technopreneur",
  "Web3 Enthusiast",
  "Student @SMU",
  "Batman",
];

export default {
  max: {
    descriptionLength: 300,
    blog: 3,
  },
  skillsets,
  identities,
  experiences,
  resume: {
    light: "light.svg",
    dark: "dark.svg",
  },
};
