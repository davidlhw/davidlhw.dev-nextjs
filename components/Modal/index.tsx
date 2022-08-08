import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

import config from "config";
import { ThemeType } from "config/theme";
import useModalStore from "stores/useModalStore";
import useAnimation from "./useAnimation";
import useThemeStore from "stores/useThemeStore";
import useViewportStore from "stores/useViewportStore";

const Mask = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1001;
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
  position: relative;
  & > * {
    margin: 40px 30px !important;
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

  const md = useViewportStore((state) => state.md);

  const theme = useThemeStore((state) => state.theme);

  const ref = useAnimation(active);

  const [aspect, setAspect] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    resume && resume === "true" && open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume]);

  useEffect(() => {
    if (active) {
      ref.current?.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      const rate = md ? 0.8 : 1;
      const width = window.innerWidth * rate;

      setWidth(width);
      setHeight(width / aspect);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [aspect, md]);

  return (
    <Mask ref={ref} onClick={close}>
      <Wrapper>
        <Image
          src={`/static/resume/${mapResume(theme)}`}
          alt="Resume"
          width={width}
          height={height}
          objectFit="contain"
          onLoadingComplete={({ naturalWidth, naturalHeight }) => {
            setAspect(naturalWidth / naturalHeight);
          }}
        />
      </Wrapper>
    </Mask>
  );
};
