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
    {...props}
    role="img"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <path
      d="m16.62 30-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.712 2.712 0 0 0-1.333 1.523A14.1 14.1 0 0 0 16.62 30Z"
      fill={color}
    />
    <path
      d="M17.026 26.329a13.223 13.223 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a9.792 9.792 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187Z"
      fill={color}
    />
    <path
      d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.725 1.725 0 0 0 15.846 2c.381.82.319 12.243.359 13.579.155 5.197-.289 10.009-.718 10.99Z"
      fill={color}
    />
  </Wrapper>
);
