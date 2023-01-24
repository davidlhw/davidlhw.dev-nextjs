import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import useViewportStore from "stores/useViewportStore";

import MenuBurger, { Wrapper as $MenuBurger } from "components/svg/MenuBurger";
import Logo, { Wrapper as $Logo } from "components/svg/Logo";
import NavGroup from "./NavGroup";
import CallToAction from "./CallToAction";
import useTimeline from "./useTimeline";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  position: relative;
  padding: 15px var(--padding-h);
  background: var(--bg);
  transition: background 0.25s;

  transform-origin: center top;

  ${$MenuBurger}, ${$Logo} {
    flex-shrink: 0;
  }
`;

export default ({
  expand,
  rootDom,
}: {
  expand: [boolean, (b: boolean) => void];
  rootDom: React.RefObject<HTMLDivElement>;
}) => {
  const router = useRouter();

  const { add } = useTimeline();

  const md = useViewportStore((state) => state.md);

  useEffect(() => {
    expand[1](false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [md]);

  const handleLogoClick = () => {
    if (router.route !== "/" && rootDom.current) {
      rootDom.current.style.opacity = "0";
    }
    router.push("/");
  };

  return (
    <Wrapper>
      <div ref={add}>
        <Logo onClick={handleLogoClick} />
      </div>

      <NavGroup expand={expand} add={add} />

      <CallToAction add={add} />

      {!md && (
        <MenuBurger
          color="var(--primary)"
          active={expand[0]}
          onClick={() => expand[1](!expand[0])}
        />
      )}
    </Wrapper>
  );
};
