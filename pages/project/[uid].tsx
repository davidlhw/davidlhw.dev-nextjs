import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import locale from "locale";
import config from "config";
import type { Item } from "components/pages/article/List";
import { Breadcrumb, Article as ArticleProp } from "config/articles/types";
import { excludeArticle } from "components/pages/article/utils";
import useViewportStore from "stores/useViewportStore";
import useLazyProject from "components/pages/article/Article/useLazyProject";

import TagsFilter, {
  Wrapper as $TagsFilter,
} from "components/pages/blog/TagsFilter";
import Breadcrumbs from "components/pages/article/Breadcrumbs";
import List, { Wrapper as $List } from "components/pages/article/List";
import Meta from "components/pages/article/Meta";
import Article from "components/pages/article/Article";

const Wrapper = styled.div`
  padding-bottom: 40px;
`;

const Container = styled.div`
  padding: 10px var(--padding-h);

  display: flex;
  align-items: start;
  gap: 30px;

  ${$List} {
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
  ogImage,
  twitterUsername,
  data,
  list,
  breadcrumb,
}: {
  pageTitle: string;
  hostname: string;
  ogImage: string;
  twitterUsername: string;
  data: ArticleProp;
  list: ArticleProp[];
  breadcrumb: Breadcrumb[];
}) => {
  /**
   * Hooks
   */
  const { asPath } = useRouter();
  const lg = useViewportStore((state) => state.lg);

  const [articleReady, setArticleReady] = useState(false);

  const [headings, setHeadings] = useState<Item[]>([]);
  const [hash, setHash] = useState<Breadcrumb>();

  const markdown = useLazyProject(data.mdxFilename);

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
  const seeOthers: Item[] = list.map((l) => ({
    text: l.title,
    url: `/project/${l.uid}`,
  }));

  const _breadcrumb: Breadcrumb[] = [
    ...breadcrumb,
    { text: data.title, url: `/project/${data.uid}` },
  ];

  hash && _breadcrumb.push(hash);

  /**
   * Render
   */
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:url" content={`${hostname}${asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={data.summary} />
        <meta name="description" content={data.summary} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={data.summary} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <Wrapper>
        {lg && <Breadcrumbs data={_breadcrumb} />}

        <Container>
          {lg && (
            <List
              title={locale.en.article.stickyHeadings.seeOthers}
              articles={seeOthers}
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
                title={locale.en.article.stickyHeadings.languages}
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
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = config.articles.projects;
  const hostname = config.hostname;

  // params should never be undefined since getStaticPaths has fallback = false
  // but typescript complains that params is possibly null hence the '?' operator
  const uid = params?.uid;

  //Find the matching blog uid
  for (let i = 0; i < projects.articles.length; i++) {
    if (projects.articles[i].uid === uid) {
      return {
        props: {
          pageTitle: projects.articles[i].title,
          hostname,
          ogImage: `${config.hostname}${config.ogImageRelPath}`,
          twitterUsername: `@${config.twitterUsername}`,
          data: projects.articles[i],
          list: excludeArticle(uid, projects.articles),
          breadcrumb: projects.breadcrumb,
        },
      };
    }
  }

  //If not found, return error 404 page
  return { notFound: true };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = config.articles.projects;

  const paths = [];
  for (let i = 0; i < projects.articles.length; i++) {
    paths.push({ params: { uid: projects.articles[i].uid } });
  }
  return {
    paths: paths,
    fallback: false, // see getStaticPaths https://shorturl.at/CXYZ8
  };
};
