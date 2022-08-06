import { useRouter } from "next/router";
import styled from "styled-components";

import locale from "locale";
import { formatDate } from "utils";
import { Blog } from "config/articles/types";
import { ThemeType } from "config/theme";
import useThemeStore from "stores/useThemeStore";

import Tag from "components/common/Tag";
import Arrow, { Wrapper as $Arrow } from "components/svg/Arrow";
import { iconMap } from "./utils";

export const Wrapper = styled.div(
  ({ $theme }: { $theme: ThemeType }) => `
  padding: 30px 0;
  border-top: 1px solid;
  border-color: ${$theme === "light" ? "#E5E7EB" : "#4B5563"};
  transition: border-color 0.25s;

  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h2 { font-size: 24px }

  & > p#publishOn { 
    font-weight: 500;
    margin-bottom: 5px;
  }
`
);

const Title = styled.h2`
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: var(--azure);
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReadMore = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: var(--azure);
  cursor: pointer;

  ${$Arrow} {
    height: 12px;
  }
`;

export default ({ blog }: { blog: Blog }) => {
  const router = useRouter();
  const theme = useThemeStore((state) => state.theme);

  const readTime = locale.en.common.readTime.replace("{{ 1 }}", blog.readTime);

  const navigateToBlog = () => {
    router.push(`/blog/${blog.uid}`);
  };

  return (
    <Wrapper $theme={theme}>
      <Title onClick={navigateToBlog}>{blog.title}</Title>

      <p id="publishOn">
        {formatDate(blog.publishOn)} · {readTime}
      </p>

      <p>{blog.summary}</p>

      <FlexBox>
        <Tag bgColor="#E1EFFE" color="#1E429F" icon={iconMap(blog.type.icon)}>
          {blog.type.text}
        </Tag>

        <ReadMore onClick={navigateToBlog}>
          {locale.en.blog.readMore} <Arrow color="var(--azure)" />
        </ReadMore>
      </FlexBox>
    </Wrapper>
  );
};
