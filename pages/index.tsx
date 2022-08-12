import { GetStaticProps } from "next";
import Head from "next/head";
import styled from "styled-components";

import config from "config";
import {
  Article as ArticleType,
  Blog as BlogType,
} from "config/articles/types";
import { Experience as ExperienceType } from "config/landing/types";

import Intro from "components/pages/index/Intro";
import Experiences from "components/pages/index/Experiences";
import Projects from "components/pages/index/Projects";
import Blogs from "components/pages/index/Blogs";
import CallToAction from "components/pages/index/CallToAction";

const Wrapper = styled.div`
  --section-padding: 0 40px;

  padding: 40px var(--padding-h);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media screen and (min-width: ${config.viewport.lg}) {
    gap: 200px;
  }
`;

export default ({
  pageTitle,
  hostname,
  ogImage,
  ogDescription,
  twitterUsername,
  identities,
  experiences,
  projects,
  blogs,
}: {
  pageTitle: string;
  hostname: string;
  ogImage: string;
  ogDescription: string;
  twitterUsername: string;
  identities: string[];
  experiences: ExperienceType[];
  projects: ArticleType[];
  blogs: BlogType[];
}) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:url" content={hostname} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta name="description" content={ogDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:iamge" content={ogImage} />
    </Head>
    <Wrapper>
      <Intro identities={identities} />
      <Experiences data={experiences} />
      <Projects data={projects} />
      <Blogs data={blogs} />
      <CallToAction />
    </Wrapper>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageTitle: config.pageTitle.landing,
      hostname: config.hostname,
      ogImage: `${config.hostname}${config.ogImageRelPath}`,
      ogDescription: config.ogDescription,
      twitterUsername: `@${config.twitterUsername}`,
      identities: config.landing.identities,
      experiences: config.landing.experiences,
      projects: config.articles.projects.articles,
      blogs: config.articles.blogs.articles.slice(-config.landing.max.blog),
    },
  };
};
