import { useEffect, useRef } from "react";
import styled from "styled-components";

import type { Item } from "../List";

const Wrapper = styled.article`
  & > * {
    margin: 15px 0;
  }

  p {
    line-height: 27px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--text);
    margin-top: 35px;
  }

  ol {
    padding: 10px 20px;
  }

  li {
    padding-left: 10px;
  }

  li:not(:first-of-type) {
    padding-top: 7px;
  }

  li::marker {
    font-weight: 600;
    color: var(--text);
    transition: 0.25s color;
  }

  strong {
    color: var(--text);
    transition: 0.25s color;
  }

  code {
    padding: 15px;
    border-radius: 8px;
    background: var(--bg-alt);
    transition: 0.25s background;
  }

  a {
    color: var(--text);
    transition: color 0.25s;
    text-decoration: underline;
  }

  legend[id] {
    transform: translateY(-50px);
  }

  a[id] {
    display: inline-block;
    transform: translateY(-120px);
  }
`;

export default ({
  mdx,
  setHeadings,
  setArticleReady,
}: {
  mdx?: JSX.Element;
  setHeadings: (headings: Item[]) => void;
  setArticleReady: (b: boolean) => void;
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setArticleReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mdx) {
      const HTMLHeadings = ref.current?.querySelectorAll("h3");
      const headings: Item[] = [];

      HTMLHeadings?.forEach((dom) => {
        const fragment = dom.querySelector("a[id]")?.id;

        fragment &&
          headings.push({
            text: dom.innerText,
            url: `#${fragment}`,
          });
      });

      setHeadings(headings);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mdx]);

  return <Wrapper ref={ref}>{mdx}</Wrapper>;
};
