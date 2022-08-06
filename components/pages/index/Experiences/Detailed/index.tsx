import React from "react";
import styled from "styled-components";

import { Experience } from "config/landing/types";
import { openNewTab } from "utils";

import DoubleQuote from "../DoubleQuote";
import useAnimation from "./useAnimation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 24px;

  & > span {
    position: relative;
    color: var(--azure);
  }

  & > span#company {
    cursor: pointer;
  }
`;

const Line = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--azure);
  transform-origin: left center;
  transform: scaleX(0);
`;

export default ({
  data,
  add,
}: {
  data: Experience;
  add: (dom: HTMLElement | null) => void;
}) => {
  const { hover, target } = useAnimation();

  return (
    <Wrapper>
      <div ref={add}>
        <DoubleQuote />
      </div>

      <Title ref={add}>
        {data.jobPosition}

        <span>{` @ `}</span>

        <span
          ref={hover}
          id="company"
          onClick={() => openNewTab(data.companyUrl)}
        >
          <Line ref={target} />
          {data.company}
        </span>
      </Title>

      <p ref={add}>{data.duration}</p>

      <ul>
        {data.achievements.map((a, i) => (
          <li key={i} ref={add}>
            {a}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
