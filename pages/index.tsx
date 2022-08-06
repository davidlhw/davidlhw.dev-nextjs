import { GetServerSideProps } from "next";
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
  identities,
  experiences,
  projects,
  blogs,
}: {
  identities: string[];
  experiences: ExperienceType[];
  projects: ArticleType[];
  blogs: BlogType[];
}) => (
  <Wrapper>
    <Intro identities={identities} />
    <Experiences data={experiences} />
    <Projects data={projects} />
    <Blogs data={blogs} />
    <CallToAction />
  </Wrapper>
);

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      identities: config.landing.identities,
      experiences: config.landing.experiences,
      projects: config.articles.projects.articles,
      blogs: config.articles.blogs.articles.slice(-config.landing.max.blog),
    },
  };
};
