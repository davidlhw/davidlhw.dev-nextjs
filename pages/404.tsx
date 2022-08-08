import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";

import config from "config";
import locale from "locale";
import useViewportStore from "stores/useViewportStore";

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h3 {
    margin: 15px 0;
    color: var(--azure);
  }

  h2 {
    margin-bottom: 30px;
    color: var(--text);
  }

  p {
    font-size: 14px;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    justify-content: center;

    h3 {
      margin: 3px 0;
    }
  }
`;

const AnchorGroup = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
  font-size: 14px;

  display: flex;
  gap: 16px;

  & a {
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const imageAspect = 462 / 432;

export default () => {
  const router = useRouter();
  const md = useViewportStore((state) => state.md);

  return (
    <>
      <Head>
        <title>{config.pageTitle.err404}</title>
      </Head>

      <Wrapper>
        {md && (
          <Image
            src="/static/404-man-on-desk.png"
            width={400}
            height={400 / imageAspect}
            alt="404"
          />
        )}

        <h3>{md ? locale.en.err404.title.md : locale.en.err404.title.sm}</h3>
        <h2>{locale.en.err404.subtitle}</h2>
        <p>{locale.en.err404.help}</p>

        <AnchorGroup>
          {config.error404.links.map((l, i) => (
            <a key={i} onClick={() => router.push(l.url)}>
              {l.text}
            </a>
          ))}
        </AnchorGroup>
      </Wrapper>
    </>
  );
};
