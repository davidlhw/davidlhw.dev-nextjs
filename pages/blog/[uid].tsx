import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import locale from "locale";
import config from "config";
import type { Item } from "components/pages/article/List";
import type { Blog, Breadcrumb } from "config/articles/types";
import { excludeBlog } from "components/pages/blog/utils";
import useLazyBlog from "components/pages/article/Article/useLazyBlog";

import Breadcrumbs from "components/pages/article/Breadcrumbs";
import useViewportStore from "stores/useViewportStore";
import Article from "components/pages/article/Article";
import TagsFilter, {
  Wrapper as $TagsFilter,
} from "components/pages/blog/TagsFilter";
import ReadMore from "components/pages/blog/ReadMore";
import List, { Wrapper as $List } from "components/pages/article/List";
import Meta from "components/pages/article/Meta";

const Wrapper = styled.div`
  padding-bottom: 40px;
`;

const Container = styled.div`
  padding: 10px var(--padding-h);

  display: flex;
  align-items: start;
  gap: 30px;

  ${$TagsFilter}, ${$List} {
    flex-shrink: 0;
  }

  & > ${$List} {
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

const Content = styled.div`
  flex-grow: 1;
`;

const RightNav = styled.div`
  position: sticky;
  top: 80px;

  flex-shrink: 0;
  width: 270px;

  display: flex;
  flex-direction: column;
  gap: 35px;

  ${$TagsFilter}, ${$List} {
    width: unset;
  }
`;

export default ({
  pageTitle,
  hostname,
  data,
  list,
}: {
  pageTitle: string;
  hostname: string;
  data: Blog;
  list: Blog[];
}) => {
  /**
   * Hooks
   */
  const { asPath } = useRouter();
  const lg = useViewportStore((state) => state.lg);

  const [articleReady, setArticleReady] = useState(false);

  const [headings, setHeadings] = useState<Item[]>([]);
  const [hash, setHash] = useState<Breadcrumb>();

  const markdown = useLazyBlog(data.mdxFilename);

  useEffect(() => {
    if (articleReady && asPath.includes("#")) {
      const splitUrl = asPath.split("#");
      const hash = splitUrl[splitUrl.length - 1];

      const anchorEl = document.getElementById(hash);
      const parentHeading = anchorEl?.parentElement;

      if (anchorEl && parentHeading) {
        setHash({
          text: parentHeading.innerText,
          url: `#${hash}`,
        });

        anchorEl.scrollIntoView();
      }
    } else {
      setHash(undefined);
    }
  }, [asPath, articleReady]);

  /**
   * Not hooks
   */
  const seeOthersArticles = list.slice(-config.articles.blogs.max.seeOthers);

  const mappedseeOthers: Item[] = seeOthersArticles.map((d) => ({
    text: d.title,
    url: `/blog/${d.uid}`,
  }));

  const breadcrumbs: Breadcrumb[] = [
    ...config.articles.blogs.breadcrumb,
    { text: data.title, url: `/blog/${data.uid}` },
  ];

  hash && breadcrumbs.push(hash);

  /**
   * Render
   */
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Wrapper>
        {lg && <Breadcrumbs data={breadcrumbs} />}

        <Container>
          {lg && (
            <List
              title={locale.en.article.stickyHeadings.seeOthers}
              articles={mappedseeOthers}
            />
          )}

          <Content>
            <Meta data={data} hostname={hostname} />

            <Article
              mdx={markdown}
              setHeadings={setHeadings}
              setArticleReady={setArticleReady}
            />
          </Content>

          {lg && (
            <RightNav>
              <TagsFilter
                title={locale.en.article.stickyHeadings.topics}
                tags={data.tags}
                selectedTags={[]}
              />

              <List
                articles={headings}
                title={locale.en.article.stickyHeadings.headings}
              />
            </RightNav>
          )}
        </Container>

        <ReadMore data={list} excludeArticle={seeOthersArticles} />
      </Wrapper>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  resolvedUrl,
}) => {
  const { articles } = config.articles.blogs;

  const hostname = req.headers.host;

  const splitUrl = resolvedUrl.split("/");
  const uid = splitUrl[splitUrl.length - 1];

  //Find the matching blog uid
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].uid === uid) {
      return {
        props: {
          hostname,
          data: articles[i],
          list: excludeBlog(uid, articles),
        },
      };
    }
  }

  //If not found, return error 404 page
  return { notFound: true };
};
