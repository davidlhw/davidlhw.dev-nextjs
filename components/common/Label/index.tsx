import React from "react";
import styled from "styled-components";

import { ThemeType } from "config/theme";
import useAnimation from "./useAnimation";
import useThemeStore from "stores/useThemeStore";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label(
  ({ $error, $theme }: { $error: boolean; $theme: ThemeType }) => `
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: var(--text);
  ${
    $error
      ? `
  color: ${$theme === "light" ? "#771D1D" : "#F05252"};
  `
      : ""
  }
`
);

const Error = styled.div(
  ({ $theme }: { $theme: ThemeType }) => `
  position: absolute;
  top: 100%;
  margin-top: 1px;
  font-weight: 500;
  color: ${$theme === "light" ? "#771D1D" : "#F05252"};;
`
);

export default ({
  text,
  children,
  error,
}: {
  text: string;
  children: JSX.Element | JSX.Element[];
  error?: string;
}) => {
  const ref = useAnimation(!!error);
  const theme = useThemeStore((state) => state.theme);

  return (
    <Wrapper>
      <Label $error={!!error} $theme={theme}>
        {text}
      </Label>

      {children}

      <Error ref={ref} $theme={theme}>
        {error}
      </Error>
    </Wrapper>
  );
};
