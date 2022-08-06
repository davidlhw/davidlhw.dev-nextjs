import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  & > p {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 650px;
  border-radius: 8px;
`;

export default ({
  src,
  alt,
  caption = "",
}: {
  src: string;
  alt: string;
  caption?: string;
}) => (
  <Wrapper>
    <Image src={src} alt={alt} />
    <p dangerouslySetInnerHTML={{ __html: caption }} />
  </Wrapper>
);
