import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMeasure from "react-use-measure";

import locale from "locale";
import config from "config";
import { Blog } from "config/articles/types";
import useScrollFadeIn from "hooks/common/useScrollFadeIn";

import Card from "./Card";

const Wrapper = styled.section`
  width: 100%;

  @media screen and (min-width: ${config.viewport.lg}) {
    padding: var(--section-padding);
  }

  @media screen and (min-width: ${config.viewport.xl}) {
    width: var(--section-width);
    min-width: var(--min-section-width);
  }
`;

const Container = styled.div`
  & > h2,
  & > p {
    text-align: center;
  }

  & > p {
    margin-top: 20px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: ${config.viewport.lg}) {
    max-width: 600px;
    margin: auto;
  }
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: ${config.viewport.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
  }
`;

export default ({ data }: { data: Blog[] }) => {
  const [ref, bounds] = useMeasure();

  const [fade, setFade] = useState(false);

  const add = useScrollFadeIn(bounds.top, fade);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Container>
        <h2 ref={add}>{locale.en.landing.blogs.title}</h2>
        <p ref={add}>{locale.en.landing.blogs.description}</p>
      </Container>

      <CardGroup>
        {data.map((blog, i) => (
          <Card ref={add} key={i} {...blog} />
        ))}
      </CardGroup>
    </Wrapper>
  );
};
