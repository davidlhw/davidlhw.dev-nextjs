import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import config from "config";
import useViewportStore from "stores/useViewportStore";
import useAnimation from "./useAnimation";

const Wrapper = styled.nav`
  flex-grow: 1;
  color: var(--primary);
  transition: color 0.25s;
  font-weight: 500;
`;

const Inline = styled.div`
  margin-left: 40px;
  display: none;
  gap: 32px;

  & > * {
    cursor: pointer;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    display: flex;
  }
`;

const Mask = styled.div`
  position: fixed;
  background: #000a;
  left: 0;
  top: var(--header-height);
  height: 100vh;
  width: 100vw;
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 20;
  top: 100%;
  left: 0;
  width: 100%;

  transform-origin: center top;
  background: var(--bg);
  transition: background 0.25s;

  & > * {
    cursor: pointer;
  }
`;

const Item = styled.div`
  padding: 13px 15px;
  border-top: 1px solid var(--secondary);
`;

export default ({
  expand,
  add,
}: {
  expand: [boolean, (b: boolean) => void];
  add: (dom: HTMLElement | null) => void;
}) => {
  const router = useRouter();

  const md = useViewportStore((state) => state.md);
  const { dropdown, mask } = useAnimation(expand[0], md);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(!toggle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [md]);

  useEffect(() => {
    if (expand[0]) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expand[0]]);

  const collapse = () => {
    expand[1](false);
  };

  return (
    <Wrapper>
      <Mask ref={mask} onClick={collapse} />

      <Dropdown ref={dropdown} onClick={collapse}>
        {config.headerNav.map((n, i) => (
          <Item key={i} onClick={() => router.push(n.url)}>
            {n.display}
          </Item>
        ))}
      </Dropdown>

      <Inline>
        {config.headerNav.map((n, i) => (
          <div ref={add} key={i} onClick={() => router.push(n.url)}>
            {n.display}
          </div>
        ))}
      </Inline>
    </Wrapper>
  );
};
