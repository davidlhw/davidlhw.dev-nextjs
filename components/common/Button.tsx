import React from "react";
import styled from "styled-components";

const Mask = styled.div`
  height: 100%;
  width: fit-content;
  background: white;
  border-radius: 10px;
`;

export const Wrapper = styled.button`
  padding: 12px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  font-size: 16px;
  background: var(--azure);
  color: white;

  transition: 0.25s opacity;

  &:hover {
    opacity: 0.8;
  }
`;

export default React.forwardRef(
  (
    {
      children,
      ...props
    }: { children: string } & Omit<
      JSX.IntrinsicElements["button"],
      "ref" | "style"
    >,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const addRef = (dom: HTMLDivElement | null) => {
      if (!dom) return;

      if (typeof ref === "function") ref(dom);
      else if (typeof ref === "object" && ref) ref.current = dom;
    };

    return (
      <Mask ref={addRef}>
        <Wrapper {...props}>{children}</Wrapper>
      </Mask>
    );
  }
);
