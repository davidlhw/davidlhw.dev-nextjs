import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div(
  ({ $bgColor, $cursor }: { $bgColor: string; $cursor: string }) => `
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 2px 10px;
  cursor: ${$cursor};
  
  background: ${$bgColor};
  transition: background 0.25s;
  border-radius: 5px;
`
);

export const Text = styled.p(
  ({ $color }: { $color: string }) => `
  font-size: 14px;
  font-weight: 500;
  color: ${$color};
  transition: color 0.25s;
`
);

export const Icon = styled.div`
  aspect-ratio: 1/1;
  height: 13px;
  width: auto;
`;

export default React.forwardRef(
  (
    {
      children,
      bgColor = "red",
      color = "blue",
      icon,
      onClick,
    }: {
      children: string;
      bgColor?: string;
      color?: string;
      icon?: JSX.Element;
      onClick?: () => void;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const addRef = (dom: HTMLDivElement | null) => {
      if (!dom) return;

      if (typeof ref === "function") ref(dom);
      else if (typeof ref === "object" && ref) ref.current = dom;
    };

    return (
      <Wrapper
        ref={addRef}
        onClick={onClick}
        $bgColor={bgColor}
        $cursor={!!onClick ? "pointer" : "auto"}
      >
        {icon && <Icon>{icon}</Icon>}
        <Text $color={color}>{children}</Text>
      </Wrapper>
    );
  }
);
