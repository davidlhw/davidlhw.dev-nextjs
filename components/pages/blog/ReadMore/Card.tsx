import { useRouter } from "next/router";
import styled from "styled-components";

import locale from "locale";
import { Blog } from "config/articles/types";

const Wrapper = styled.div`
  margin: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  max-width: 400px;
`;

const Image = styled.img`
  aspect-ratio: 1/0.6;
  width: 100%;
  height: auto;
  display: block;

  border-radius: 8px;
  object-fit: cover;
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h3 {
    font-size: 20px;
    color: var(--text);
  }

  & > p {
    flex-grow: 1;
  }

  & > a {
    text-decoration: underline;
    color: var(--azure);
  }
`;

export default ({ data }: { data: Blog }) => {
  const router = useRouter();
  const readTime = locale.en.article.readTime.replace("{{ 1 }}", data.readTime);

  return (
    <Wrapper>
      <Image src={data.coverImageUrl} alt={data.title} />

      <Container>
        <h3>{data.title}</h3>
        <p>{data.summary}</p>
        <a onClick={() => router.push(`/blog/${data.uid}`)}>{readTime}</a>
      </Container>
    </Wrapper>
  );
};
