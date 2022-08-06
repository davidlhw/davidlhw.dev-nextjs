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
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <path
      fill={color}
      d="M20.7514 15.9515C18.9736 16.7556 16.993 16.9989 15.0734 16.649C13.1538 16.2991 11.3865 15.3726 10.0068 13.9929C8.62707 12.6132 7.70054 10.8458 7.35063 8.92625C7.00071 7.00669 7.24403 5.02608 8.04815 3.24829C6.63283 3.8879 5.3938 4.86133 4.43736 6.08504C3.48092 7.30876 2.83563 8.74624 2.55685 10.2742C2.27806 11.8021 2.37411 13.3748 2.83675 14.8575C3.29938 16.3401 4.1148 17.6884 5.21304 18.7866C6.31128 19.8848 7.65955 20.7003 9.14219 21.1629C10.6248 21.6255 12.1976 21.7216 13.7255 21.4428C15.2534 21.164 16.6909 20.5187 17.9146 19.5623C19.1383 18.6058 20.1117 17.3668 20.7514 15.9515Z"
    />
  </Wrapper>
);
