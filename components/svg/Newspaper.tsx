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
} & Omit<JSX.IntrinsicElements["svg"], "ref">) => (
  <Wrapper
    {...props}
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.40039 3.49998C1.40039 3.12867 1.54789 2.77258 1.81044 2.51003C2.07299 2.24748 2.42909 2.09998 2.80039 2.09998H8.40039C8.77169 2.09998 9.12779 2.24748 9.39034 2.51003C9.65289 2.77258 9.80039 3.12867 9.80039 3.49998V10.5C9.80039 10.8713 9.94789 11.2274 10.2104 11.4899C10.473 11.7525 10.8291 11.9 11.2004 11.9H2.80039C2.42909 11.9 2.07299 11.7525 1.81044 11.4899C1.54789 11.2274 1.40039 10.8713 1.40039 10.5V3.49998ZM3.50039 4.19998H7.70039V6.99998H3.50039V4.19998ZM7.70039 8.39997H3.50039V9.79997H7.70039V8.39997Z"
    />
    <path
      fill={color}
      d="M10.5 4.90002H11.2C11.5713 4.90002 11.9274 5.04752 12.1899 5.31007C12.4525 5.57263 12.6 5.92872 12.6 6.30002V10.15C12.6 10.4285 12.4894 10.6956 12.2925 10.8925C12.0955 11.0894 11.8285 11.2 11.55 11.2C11.2715 11.2 11.0045 11.0894 10.8075 10.8925C10.6106 10.6956 10.5 10.4285 10.5 10.15V4.90002Z"
    />
  </Wrapper>
);
