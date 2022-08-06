import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import config from "config";
import { ThemeType } from "config/theme";
import useModalStore from "stores/useModalStore";
import useAnimation from "./useAnimation";
import useThemeStore from "stores/useThemeStore";

const Mask = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 200;
  top: 0;
  left: 0;

  background: #000a;
  overflow: scroll;
  opacity: 0;

  display: flex;
  justify-content: start;

  @media screen and (min-width: ${config.viewport.md}) {
    overflow: unset;
    overflow-y: scroll;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1024px;

  @media screen and (min-width: ${config.viewport.lg}) {
    width: 80%;
  }
`;

const Resume = styled.img`
  padding: 40px 30px;
  width: 100%;
`;

const mapResume = (theme: ThemeType) => {
  switch (theme) {
    case "light":
      return config.landing.resume.light;
    case "dark":
      return config.landing.resume.dark;
  }
};

export default () => {
  const {
    query: { resume },
  } = useRouter();

  const active = useModalStore((state) => state.active);
  const open = useModalStore((state) => state.open);
  const close = useModalStore((state) => state.close);

  const theme = useThemeStore((state) => state.theme);

  const ref = useAnimation(active);

  useEffect(() => {
    resume && resume === "true" && open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume]);

  return (
    <Mask ref={ref} onClick={close}>
      <Wrapper>
        <Resume src={`/static/resume/${mapResume(theme)}`} />
      </Wrapper>
    </Mask>
  );
};
