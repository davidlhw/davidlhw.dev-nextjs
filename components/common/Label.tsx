import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    font-weight: 500;
    color: var(--text);
  }
`;

export default ({
  text,
  children,
}: {
  text: string;
  children: JSX.Element;
}) => (
  <Wrapper>
    <label>{text}</label>

    {children}
  </Wrapper>
);
