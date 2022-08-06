import styled from "styled-components";

export const Wrapper = styled.svg`
  aspect-ratio: 6/11;
  height: auto;
  width: auto;
  display: block;

  & path {
    transition: fill 0.25s;
  }
`;

export default ({ color = "red" }) => (
  <Wrapper
    width={6}
    height={11}
    viewBox="0 0 6 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.292787 10.207C0.105316 10.0195 0 9.76521 0 9.50004C0 9.23488 0.105316 8.98057 0.292787 8.79304L3.58579 5.50004L0.292787 2.20704C0.110629 2.01844 0.00983372 1.76584 0.0121121 1.50364C0.0143906 1.24144 0.11956 0.990631 0.304968 0.805223C0.490376 0.619815 0.741189 0.514645 1.00339 0.512367C1.26558 0.510088 1.51818 0.610883 1.70679 0.793041L5.70679 4.79304C5.89426 4.98057 5.99957 5.23488 5.99957 5.50004C5.99957 5.76521 5.89426 6.01951 5.70679 6.20704L1.70679 10.207C1.51926 10.3945 1.26495 10.4998 0.999786 10.4998C0.734622 10.4998 0.480314 10.3945 0.292787 10.207Z"
    />
  </Wrapper>
);
