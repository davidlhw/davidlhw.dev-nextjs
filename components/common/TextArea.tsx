import styled from "styled-components";

import type { ThemeType } from "config/theme";
import useThemeStore from "stores/useThemeStore";

export const Wrapper = styled.textarea(
  ({ $theme }: { $theme: ThemeType }) => `
  padding: 10px;
  outline: none;
  background: var(--bg-alt);
  border: 1px solid black;
  border-color: ${$theme === "light" ? "#D1D5DB" : "#6B7280"};
  border-radius: 8px;
  resize: vertical;
  
  transition: 0.25s;

  &::placeholder { 
    color: ${$theme === "light" ? "#D1D5DB" : "#6B7280"};
  }
`
);

export default (props: Omit<JSX.IntrinsicElements["textarea"], "ref">) => {
  const theme = useThemeStore((state) => state.theme);

  return <Wrapper {...props} rows={4} $theme={theme} />;
};
