import styled from "styled-components";

const Wrapper = styled.div`
  padding: 25px;
  border-radius: 8px;
  background: var(--bg-alt);
  transition: 0.25s background;

  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const Quote = styled.p`
  white-space: normal;
  text-align: center;
  font-weight: 500;
`;

const Footnote = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  & p#author {
    font-size: 14px;
    color: var(--text);
    font-weight: 500;
  }
  & p#position {
    font-size: 12px;
  }
`;

export default ({
  text,
  author,
  jobPosition,
}: {
  text: string;
  author: string;
  jobPosition: string;
}) => (
  <Wrapper>
    <Quote>{text}</Quote>

    <Footnote>
      <p id="author">{author}</p>
      <p id="position">{jobPosition}</p>
    </Footnote>
  </Wrapper>
);
