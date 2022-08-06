import { useRouter } from "next/router";
import styled from "styled-components";

import { ThemeType } from "config/theme";
import useThemeStore from "stores/useThemeStore";

export const Wrapper = styled.div(
  ({ $theme }: { $theme: ThemeType }) => `
  width: 240px;
  padding: 20px;
  border: 1px solid;
  border-radius: 8px;  
  border-color: ${$theme === "light" ? "#E5E7EB" : "#4B5563"};
  transition: border-color 0.25s;
`
);

const Title = styled.p`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--text);
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Link = styled.a`
  cursor: pointer;

  & > p {
    font-size: 14px;
  }
  &:hover p {
    color: var(--azure);
  }
`;

export type Item = {
  text: string;
  url?: string;
};

export default ({ title, articles }: { title?: string; articles: Item[] }) => {
  const router = useRouter();
  const theme = useThemeStore((state) => state.theme);

  const navigateTo = (url?: string) => {
    url && router.push(url);
  };

  return (
    <Wrapper $theme={theme}>
      {title && <Title>{title}</Title>}

      <LinkGroup>
        {articles.map((a, i) => (
          <Link key={i} onClick={() => navigateTo(a.url)}>
            <p>{a.text}</p>
          </Link>
        ))}
      </LinkGroup>
    </Wrapper>
  );
};
