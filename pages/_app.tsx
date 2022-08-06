import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { GetServerSideProps } from "next";
import type { AppProps } from "next/app";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import config from "config";
import useResponsive from "hooks/useResponsive";
import useRootTheme from "hooks/useRootTheme";
import useMasterTimeline from "hooks/useMasterTimeline";

import Header, { Wrapper as $Header } from "components/Header";
import Footer from "components/Footer";
import Modal from "components/Modal";
import useModalStore from "stores/useModalStore";
import useThemeStore from "stores/useThemeStore";

const Wrapper = styled.main(
  ({ $blur }: { $blur: boolean }) => `
  --padding-h: 15px;
  --header-height: 62px;
  --section-width: 50%;
  --min-section-width: 1500px;

  min-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;

  ${$Header} {
    height: var(--header-height);
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    filter: blur(${$blur ? "2px" : "0"});
    transition: 0.25s;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    --padding-h: 40px;
  }
`
);

const BlurMask = styled.div(
  ({ $blur }: { $blur: boolean }) => `
  flex-grow: 1;
  position: absolute;
  top: var(--header-height);
  width: 100%;
  height: calc(100% - var(--header-height));

  filter: blur(${$blur ? "2px" : "0"});
  transition: filter 0.25s;

  display: flex;
  flex-direction: column;
`
);

const Content = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  background: var(--bg);
  transition: background 0.25s;

  & > * {
    flex-grow: 1;
  }
`;

export default ({ Component, pageProps }: AppProps) => {
  const [headerExpand, setHeaderExpand] = useState(false);

  const modalActive = useModalStore((state) => state.active);
  const theme = useThemeStore((state) => state.theme);

  useMasterTimeline();
  useResponsive();
  useRootTheme();

  return (
    <>
      <Wrapper $blur={modalActive}>
        <Header expand={[headerExpand, setHeaderExpand]} />

        <BlurMask $blur={headerExpand || modalActive}>
          <Content>
            <Component {...pageProps} />
          </Content>

          <Footer />
        </BlurMask>
      </Wrapper>

      <ToastContainer theme={theme} position="bottom-center" />

      <Modal />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
