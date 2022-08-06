import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import useMeasure from "react-use-measure";

import locale from "locale";
import useScrollFadeIn from "hooks/common/useScrollFadeIn";
import useModalStore from "stores/useModalStore";

import QRCode, { Wrapper as $QRCode } from "./QRCode";
import Button from "components/common/Button";

const Wrapper = styled.section`
  text-align: center;
  margin-bottom: 40px;

  & > p {
    margin-top: 20px;
    margin-bottom: 35px;
  }

  ${$QRCode} {
    width: 180px;
    margin: auto;
    cursor: pointer;
    transition: transform 0.25s;
  }

  ${$QRCode}:hover {
    transform: scale(1.05);
  }
`;

const TalkNow = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 90%;

  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
`;

export default () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();
  const open = useModalStore((state) => state.open);

  const [fade, setFade] = useState(false);

  const add = useScrollFadeIn(bounds.top, fade);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Wrapper ref={ref}>
      <h2 ref={add}>{locale.en.landing.cta.title}</h2>
      <p ref={add}>{locale.en.landing.cta.subtitle}</p>

      <div ref={add}>
        <QRCode color="var(--text)" onClick={open} />
      </div>

      <TalkNow>
        <h2 ref={add}>{locale.en.landing.cta.prompt1}</h2>
        <p ref={add}>{locale.en.landing.cta.prompt2}</p>

        <Button ref={add} onClick={() => router.push("/contact")}>
          {locale.en.landing.cta.button}
        </Button>
      </TalkNow>
    </Wrapper>
  );
};
