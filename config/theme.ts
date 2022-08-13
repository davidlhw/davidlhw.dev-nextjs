export type ThemeType = "light" | "dark";

type Theme = {
  bg: string;
  "bg-alt": string;
  primary: string;
  secondary: string;
  text: string;
  azure: string;
};

const theme: { [k in ThemeType]: Theme } = {
  light: {
    bg: "#fff",
    "bg-alt": "#F9FAFB",
    primary: "#6B7280",
    secondary: "#F3F4F6",
    text: "#111928",
    azure: "#1C64F2",
  },
  dark: {
    bg: "#1F2A37",
    "bg-alt": "#374151",
    primary: "#D1D5DB",
    secondary: "#374151",
    text: "#fff",
    azure: "#3F83F8",
  },
};

export default theme;
