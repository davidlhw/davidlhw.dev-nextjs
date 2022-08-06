import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMeasure from "react-use-measure";

import config from "config";
import locale from "locale";
import { Experience } from "config/landing/types";
import useScrollFadeIn from "hooks/common/useScrollFadeIn";

import Card from "./Card";
import Detailed from "./Detailed";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${config.viewport.lg}) {
    padding: var(--section-padding);

    display: flex;
    align-items: center;
    gap: 60px;

    & > * {
      width: 100%;
    }
  }

  @media screen and (min-width: ${config.viewport.xl}) {
    width: var(--section-width);
    min-width: var(--min-section-width);
  }
`;

const Intro = styled.div`
  text-align: center;
  max-width: 600px;

  & > p {
    margin-top: 15px;
  }
`;

const Content = styled.div`
  @media screen and (min-width: ${config.viewport.lg}) {
    display: flex;
    gap: 20px;
  }
`;

const CardGroup = styled.div`
  margin-top: 55px;
  margin-bottom: 25px;

  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${config.viewport.md}) {
    flex-direction: row;

    & > * {
      width: 100%;
    }
  }

  @media screen and (min-width: ${config.viewport.lg}) {
    margin: 0;
    width: 35%;
    flex-direction: column;
  }
`;

export default ({ data }: { data: Experience[] }) => {
  const [ref, bounds] = useMeasure();

  const [exp, setExp] = useState(data[0]);
  const [fade, setFade] = useState(false);

  const add = useScrollFadeIn(bounds.top, fade);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Intro>
        <h2 ref={add}>{locale.en.landing.experience.title}</h2>
        <p ref={add}>{locale.en.landing.experience.description}</p>
      </Intro>

      <Content>
        <CardGroup>
          {data.map((d, i) => (
            <Card
              key={i}
              ref={add}
              data={d}
              active={d === exp}
              onClick={() => setExp(d)}
            />
          ))}
        </CardGroup>

        <Detailed data={exp} add={add} />
      </Content>
    </Wrapper>
  );
};
