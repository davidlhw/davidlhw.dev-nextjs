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
      fill={color}
      d="m12.761 13.89 6.644 3.027 6.7-5.874a7.017 7.017 0 0 0 .141-1.475 7.484 7.484 0 0 0-13.66-4.233l-1.12 5.785Z"
    />
    <path
      fill={color}
      d="M5.886 20.919a7.262 7.262 0 0 0-.141 1.5 7.514 7.514 0 0 0 13.724 4.22l1.1-5.759-1.469-2.821-6.67-3.04Z"
    />
    <path
      fill={color}
      d="M5.848 9.426 10.4 10.5l1-5.169a3.594 3.594 0 0 0-5.552 4.095"
    />
    <path
      fill={color}
      d="M5.45 10.517a5.016 5.016 0 0 0-.218 9.453l6.388-5.77-1.167-2.5Z"
    />
    <path
      fill={color}
      d="M20.624 26.639a3.589 3.589 0 0 0 5.541-4.092l-4.541-1.065Z"
    />
    <path
      fill={color}
      d="m21.547 20.29 5 1.167A5.016 5.016 0 0 0 26.768 12l-6.541 5.733Z"
    />
  </Wrapper>
);
