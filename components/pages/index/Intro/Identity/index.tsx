import { useEffect, useState } from "react";
import styled from "styled-components";

import locale from "locale";
import KnownAs from "./KnownAs";
import useAnimation from "./useAnimation";
import useTimelineStore from "stores/useTimelineStore";

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 25px;
  display: flex;
`;

const IceBreaker = styled.div`
  display: flex;

  & > p {
    white-space: pre;
    display: none;
  }
`;

export default ({ data }: { data: string[] }) => {
  const [knownAsActive, setKnownAsActive] = useState(false);
  const animateIdentity = useTimelineStore((state) => state.animateIdentity);

  const add = useAnimation({
    onComplete: () => {
      setKnownAsActive(true);
    },
    active: animateIdentity,
  });

  return (
    <Wrapper>
      <IceBreaker>
        {locale.en.landing.intro.identity.split("").map((s, i) => (
          <p ref={add} key={i}>
            {s}
          </p>
        ))}
      </IceBreaker>

      <KnownAs data={data} active={knownAsActive} />
    </Wrapper>
  );
};
