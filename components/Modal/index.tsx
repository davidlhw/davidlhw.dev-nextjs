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
  overscroll-behavior: none;
  touch-action: none;
  opacity: 0;

  display: flex;
  justify-content: start;

  @media screen and (min-width: ${config.viewport.md}) {
    overflow: unset;
    overflow-y: scroll;
    justify-content: center;
    touch-action: unset;
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

      if (!md) {
        const noScroll = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
        };

        window.addEventListener("touchmove", noScroll, { passive: false });
        window.addEventListener("wheel", noScroll, { passive: false });

        return () => {
          window.removeEventListener("touchmove", noScroll);
          window.removeEventListener("wheel", noScroll);
        };
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, md]);

  useEffect(() => {
    const handleResize = () => {
      const rate = md ? 0.8 : 1;
      let width = window.innerWidth * rate;

      if (width > 1200) width = 800;

      setWidth(width);
      setHeight(width / aspect);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [aspect, md]);

  // prevent scrolling of the resume when the viewport exceeds the modal
  useEffect(() => {
    if (height < window.innerHeight && active) {
      const noScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      };

      window.addEventListener("wheel", noScroll, { passive: false });
      window.addEventListener("touchmove", noScroll, { passive: false });

      return () => {
        window.removeEventListener("wheel", noScroll);
        window.removeEventListener("touchmove", noScroll);
      };
    }
  }, [height, active]);

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
