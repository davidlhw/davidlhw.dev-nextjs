import { useEffect } from "react";

import config from "config";
import useThemeStore from "stores/useThemeStore";

export default () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    for (const [k, v] of Object.entries(config.theme[theme])) {
      document.documentElement.style.setProperty(`--${k}`, v);
    }
  }, [theme]);
};
