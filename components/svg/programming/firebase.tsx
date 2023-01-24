import styled from "styled-components";

export const Wrapper = styled.svg(
  ({ $cursor }: { $cursor: string }) => `
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
  cursor: ${$cursor};
  
  & path { transition: fill 0.25s }
`
);

export default ({
  color = "red",
  ...props
}: {
  color?: string;
} & Omit<JSX.IntrinsicElements["svg"], "ref" | "style">) => (
  <Wrapper
    role="img"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <path
      fill={color}
      d="M93.19,329.38,140.64,25.31c1.64-10.37,15.55-12.82,20.46-3.55l51,95.45ZM432,400,385.26,123.21a11,11,0,0,0-18.54-6L80,400l159.36,91.91a33.18,33.18,0,0,0,31.91,0ZM302.36,158.93,265.82,89.39a10.86,10.86,0,0,0-19.36,0L85.83,375.74Z"
    />
  </Wrapper>
);
