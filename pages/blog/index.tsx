import { useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import locale from "locale";
import config from "config";
import { Blog } from "config/articles/types";
import { Item } from "components/pages/article/List";
import useViewportStore from "stores/useViewportStore";

import Breadcrumbs from "components/pages/article/Breadcrumbs";
import TagsFilter, {
  Wrapper as $TagsFilter,
} from "components/pages/blog/TagsFilter";
import List, { Wrapper as $List } from "components/pages/article/List";
import BlogCard, { Wrapper as $BlogCard } from "components/pages/blog/BlogCard";
import Pagination from "components/pages/blog/Pagination";
import { Skillset } from "config/landing/types";

const Wrapper = styled.div`
  padding-bottom: 70px;
`;

const Container = styled.div`
  padding: 10px var(--padding-h);

  display: flex;
  align-items: start;
  gap: 30px;

  ${$TagsFilter}, ${$List} {
    flex-shrink: 0;
    position: sticky;
    top: 80px;
  }

  @media screen and (min-width: ${config.viewport.xl}) {
    margin: auto;
    width: var(--section-width);
    min-width: var(--min-section-width);
  }
`;

const BlogList = styled.div`
  flex-grow: 1;

  ${$BlogCard}:first-of-type {
    border-top: none;
  }
`;

const Empty = styled.div`
  padding: 40px 0;
  text-align: center;
`;

export default ({
  data,
  pageSize,
  page,
}: {
  data: Blog[];
  pageSize: number;
  page: number;
}) => {
  /**
   * Hooks
   */
  const router = useRouter();
  const lg = useViewportStore((state) => state.lg);

  const topics = useMemo(() => {
    const list: Skillset[] = [];

    data.forEach((d) => {
      d.tags.forEach((t) => {
        list.findIndex((s) => s.text === t.text) === -1 && list.push(t);
      });
    });

    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [topicFilter, setTopicFilter] = useState<string[]>([]);

  /**
   * Not hook
   */
  const navigateTo = (url: string) => {
    router.push(url);
  };

  const articles: Item[] = data.map((d) => ({
    text: d.title,
    url: `/blog/${d.uid}`,
  }));

  const filteredData = data.filter((item) => {
    if (topicFilter.length === 0) return true;

    let pass = false;

    for (const t of item.tags) {
      if (topicFilter.includes(t.text)) {
        pass = true;
        break;
      }
    }

    return pass;
  });

  const paginationData = filteredData.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  const seeOthersArticle = articles.slice(-config.articles.blogs.max.seeOthers);

  /**
   * Render
   */
  return (
    <Wrapper>
      <Breadcrumbs data={config.articles.blogs.breadcrumb} />

      <Container>
        {lg && (
          <List
            articles={seeOthersArticle}
            title={locale.en.article.stickyHeadings.seeOthers}
          />
        )}

        <BlogList>
          {paginationData.length ? (
            paginationData.map((b, i) => <BlogCard key={i} blog={b} />)
          ) : (
            <Empty>
              <h3>{locale.en.common.empty}</h3>
            </Empty>
          )}

          <Pagination
            dataLength={paginationData.length}
            page={page}
            pageSize={pageSize}
            total={filteredData.length}
            onChange={(page) => navigateTo(`/blog?page=${page}`)}
          />
        </BlogList>

        {lg && (
          <TagsFilter
            title={locale.en.article.stickyHeadings.topics}
            tags={topics}
            selectedTags={topicFilter}
            onChange={setTopicFilter}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { articles, pageSize } = config.articles.blogs;

  return {
    props: {
      data: articles,
      pageSize,
      page: query.page ?? 0,
    },
  };
};
