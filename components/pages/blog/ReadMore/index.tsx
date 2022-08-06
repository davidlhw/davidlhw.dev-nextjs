import styled from "styled-components";

import locale from "locale";
import config from "config";
import { Blog } from "config/articles/types";

import Card from "./Card";

const Wrapper = styled.section`
  padding: 25px var(--padding-h);

  @media screen and (min-width: ${config.viewport.xl}) {
    margin: auto;
    width: var(--section-width);
    min-width: var(--min-section-width);
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 30px;
  color: var(--text);
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (min-width: ${config.viewport.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

export default ({
  data,
  excludeArticle,
}: {
  data: Blog[];
  excludeArticle: Blog[];
}) => {
  const filteredData = data.filter((d) => {
    for (const e of excludeArticle) {
      if (e.uid === d.uid) return false;
    }

    return true;
  });

  const sortedData =
    filteredData.length >= config.articles.blogs.max.readMore
      ? filteredData.slice(-config.articles.blogs.max.readMore)
      : [];

  return (
    <Wrapper>
      {!!sortedData.length && (
        <>
          <Title>{locale.en.article.readNext}</Title>

          <CardGroup>
            {sortedData.map((d, i) => (
              <Card key={i} data={d} />
            ))}
          </CardGroup>
        </>
      )}
    </Wrapper>
  );
};
