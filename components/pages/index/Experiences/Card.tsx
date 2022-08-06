import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { Experience } from "config/landing/types";

const Wrapper = styled.div(
  ({ $active }: { $active: boolean }) => `
  padding: 15px;
  background: ${$active ? "var(--bg-alt)" : "var(--bg)"};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.25s;

  display: flex;
  flex-direction: column;
  align-items: start;

  & > p { font-size: 14px }

  &:hover {
    background: var(--bg-alt);
  }
`
);

const Company = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > h4 {
    color: var(--text);
    font-size: 18px;
  }
`;

export default React.forwardRef(
  (
    {
      data,
      active,
      onClick,
    }: {
      data: Experience;
      active: boolean;
      onClick: () => void;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const addRef = (dom: HTMLDivElement | null) => {
      if (!dom) return;

      if (typeof ref === "function") ref(dom);
      else if (typeof ref === "object" && ref) ref.current = dom;
    };

    return (
      <Wrapper ref={addRef} onClick={onClick} $active={active}>
        <Company>
          <Image
            src={data.iconUrl}
            height={24}
            width={24}
            alt={data.company + "icon"}
          />
          <h4>{data.company}</h4>
        </Company>

        <p>{data.duration}</p>
      </Wrapper>
    );
  }
);
