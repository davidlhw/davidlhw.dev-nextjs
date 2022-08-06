import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import useAnimation from "./useAnimation";

const Wrapper = styled.div`
  display: flex;

  & p {
    color: var(--text);
  }
`;

const Identity = styled.div`
  display: flex;

  & > p {
    white-space: pre;
    display: none;
  }
`;

const Caret = styled.p`
  @keyframes fade-in-out {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fade-in-out 0.5s alternate infinite;
`;

export default ({ data, active }: { data: string[]; active: boolean }) => {
  const index = useRef(0);
  const [identity, setIdentity] = useState(data[index.current]);

  const animCallback = useCallback(() => {
    if (++index.current > data.length - 1) {
      index.current = 0;
    }

    setIdentity(data[index.current]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const add = useAnimation({
    identity,
    onComplete: animCallback,
    active,
  });

  return (
    <Wrapper>
      <Identity>
        {identity.split("").map((s, i) => (
          <p ref={add} key={i}>
            {s}
          </p>
        ))}
      </Identity>

      <Caret>|</Caret>
    </Wrapper>
  );
};
