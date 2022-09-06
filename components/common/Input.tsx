import styled from "styled-components";

import type { ThemeType } from "config/theme";
import useThemeStore from "stores/useThemeStore";

export const Wrapper = styled.input(
  ({ $theme, $error }: { $theme: ThemeType; $error: boolean }) => `
  padding: 10px;
  outline: none;
  background: var(--bg-alt);
  border: 1px solid black;
  border-color: ${$theme === "light" ? "#D1D5DB" : "#6B7280"};
  border-radius: 8px;

  transition: 0.25s;

  &::placeholder { 
    color: ${$theme === "light" ? "#D1D5DB" : "#6B7280"};
  }
  ${
    $error
      ? `
        color: #771D1D;
        border-color: ${$theme === "light" ? "#F05252" : "#F98080"};
        background: ${$theme === "light" ? "#FDF2F2" : "#FDE8E8"};
        &::placeholder { color: #C81E1E }
        &:focus { border-color #F05252 }
      `
      : ""
  }
`
);

export default ({
  error = false,
  ...props
}: {
  error?: boolean;
} & Omit<JSX.IntrinsicElements["input"], "ref">) => {
  const theme = useThemeStore((state) => state.theme);

  return <Wrapper {...props} $theme={theme} $error={error} />;
};
