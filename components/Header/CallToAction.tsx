import styled from "styled-components";

import config from "config";
import useThemeStore from "stores/useThemeStore";
import { openNewTab } from "utils";

import Github from "components/svg/social/Github";
import Twitter from "components/svg/social/Twitter";
import LinkedIn from "components/svg/social/LinkedIn";
import Crescent from "components/svg/Crescent";

const Wrapper = styled.div`
  display: none;
  gap: 20px;

  @media screen and (min-width: ${config.viewport.md}) {
    display: flex;
  }
`;

const Line = styled.div(
  ({ $bg }: { $bg: string }) => `
  width: 1px;
  height: 100%;
  background: ${$bg};
  transition: background 0.25s;
`
);

export default ({ add }: { add: (dom: HTMLElement | null) => void }) => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Wrapper>
      <div ref={add}>
        <Crescent color="var(--primary)" onClick={toggleTheme} />
      </div>

      <div ref={add}>
        <Line $bg="var(--primary)" />
      </div>

      <div ref={add}>
        <LinkedIn
          color="var(--primary)"
          onClick={() => openNewTab(config.cta.linkedin)}
        />
      </div>

      <div ref={add}>
        <Github
          color="var(--primary)"
          onClick={() => openNewTab(config.cta.github)}
        />
      </div>

      <div ref={add}>
        <Twitter
          color="var(--primary)"
          onClick={() => openNewTab(config.cta.twitter)}
        />
      </div>
    </Wrapper>
  );
};
