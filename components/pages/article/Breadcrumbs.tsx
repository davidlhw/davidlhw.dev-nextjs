import { useRouter } from "next/router";
import styled from "styled-components";

import config from "config";
import { Breadcrumb } from "config/articles/types";
import useThemeStore from "stores/useThemeStore";

import Home from "components/svg/Home";
import Caret from "components/svg/Caret";

export const Wrapper = styled.div`
  padding: 25px var(--padding-h);

  background: var(--bg-alt);
  transition: background 0.25s;

  display: flex;
  align-items: center;
  gap: 18px;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Link = styled.p`
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--text);
  }
`;

export default ({ data }: { data?: Breadcrumb[] }) => {
  const router = useRouter();
  const theme = useThemeStore((state) => state.theme);

  const caretColor = theme === "light" ? "#9CA3AF" : "#D1D5DB";

  return (
    <Wrapper>
      <Home color="var(--text)" />

      {data?.map((b, i) => {
        const maxLength = config.articles.max.breadcrumbTitle;
        const tooLong = b.text.length > maxLength;
        const isLast = i === data.length - 1;

        const text = tooLong ? `${b.text.slice(0, maxLength)}...` : b.text;

        return (
          <Group key={i}>
            <Link onClick={() => router.push(b.url)}>{text}</Link>

            {!isLast && <Caret color={caretColor} />}
          </Group>
        );
      })}
    </Wrapper>
  );
};
