import React from "react";
import styled from "styled-components";
import useAnimation from "./useAnimation";

export const Wrapper = styled.svg(
  ({ $cursor }: { $cursor: string }) => `
  aspect-ratio: 23/19;
  height: auto;
  width: auto;
  display: block;
  cursor: ${$cursor};

  & path { transition: stroke 0.25s }
`
);

export default ({
  color = "red",
  active,
  ...props
}: {
  color?: string;
  active?: boolean;
} & Omit<JSX.IntrinsicElements["svg"], "ref" | "style">) => {
  const { top, mid, bottom } = useAnimation(active ?? false);

  return (
    <Wrapper
      {...props}
      width={23}
      height={19}
      viewBox="0 0 23 19"
      fill="none"
      $cursor={!!props.onClick ? "pointer" : "auto"}
    >
      <line
        ref={top}
        stroke={color}
        x1="21.4"
        y1="1.6"
        x2="1.6"
        y2="1.6"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <line
        ref={mid}
        stroke={color}
        x1="1.6"
        y1="9.4"
        x2="21.4"
        y2="9.4"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <line
        ref={bottom}
        stroke={color}
        x1="1.6"
        y1="17.4"
        x2="21.4"
        y2="17.4"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </Wrapper>
  );
};
