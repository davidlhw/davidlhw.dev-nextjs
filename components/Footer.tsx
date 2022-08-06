import styled from "styled-components";

import locale from "locale";
import config from "config";
import { openNewTab } from "utils";

import Twitter from "./svg/social/Twitter";
import Github from "./svg/social/Github";
import LinkedIn from "./svg/social/LinkedIn";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 25px var(--padding-h);
  background: var(--bg-alt);
  transition: 0.25s background;

  & p {
    font-size: 14px;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 25px var(--padding-h);
  }
`;

const CTOGroup = styled.div`
  display: flex;
  gap: 30px;

  & svg {
    height: 18px;
    width: auto;
  }
`;

export default () => (
  <Wrapper>
    <p>{locale.en.footer.copyright}</p>

    <CTOGroup>
      <Github
        color="var(--primary)"
        onClick={() => openNewTab(config.cta.github)}
      />
      <Twitter
        color="var(--primary)"
        onClick={() => openNewTab(config.cta.twitter)}
      />
      <LinkedIn
        color="var(--primary)"
        onClick={() => openNewTab(config.cta.linkedin)}
      />
    </CTOGroup>
  </Wrapper>
);
