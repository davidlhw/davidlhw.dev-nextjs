import { useRouter } from "next/router";
import styled from "styled-components";
import { toast } from "react-toastify";

import locale from "locale";
import config from "config";
import { Article } from "config/articles/types";
import { ThemeType } from "config/theme";
import { formatDate } from "utils";
import { IconKey, mapIcon, mapFn } from "./utils";
import useThemeStore from "stores/useThemeStore";
import OpenGraph from "./OpenGraph";

const Wrapper = styled.div`
  padding: 20px 0;

  & p#publishOn {
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 25px;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    padding: 10px 0;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${config.viewport.md}) {
    flex-direction: row;
  }
`;

const Link = styled.button(
  ({ $theme }: { $theme: ThemeType }) => `
  padding: 9px;
  width: 100%;
  font-size: 12px;

  border-radius: 8px;
  color: var(--text);
  background: var(--bg);
  cursor: pointer;

  border: 1px solid;
  border-color: ${$theme === "light" ? "#E5E7EB" : "#fff"};
  transition: 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > svg { height: 16px }

  @media screen and (min-width: ${config.viewport.md}) {
    width: fit-content;
    min-width: 120px;
  }
`
);

export default ({ data, hostname }: { data: Article; hostname: string }) => {
  /**
   * Hooks
   */
  const theme = useThemeStore((state) => state.theme);
  const router = useRouter();

  /**
   * Not hook
   */
  const readTime = locale.en.common.readTime.replace("{{ 1 }}", data.readTime);

  const url = `${hostname}${router.asPath}`;

  const copy = () => {
    const clipboard = navigator.clipboard;
    clipboard.writeText(`${hostname}${router.asPath}`);
    toast.success(locale.en.article.copySuccess, { toastId: "copy" });
  };

  /**
   * Render
   */
  return (
    <>
      <OpenGraph data={data} hostname={hostname} url={url} />

      <Wrapper>
        <h2>{data.title}</h2>
        <p id="publishOn">
          {formatDate(data.publishOn)} · {readTime}
        </p>

        <LinkGroup>
          {data.linkUrl &&
            Object.entries(data.linkUrl).map(([k], i) => {
              const icon = mapIcon(k as IconKey);

              return icon ? (
                <Link
                  key={i}
                  onClick={mapFn(k as IconKey, url, data)}
                  $theme={theme}
                >
                  {icon}
                  {locale.en.article.links[k as IconKey]}
                </Link>
              ) : undefined;
            })}

          <Link onClick={copy} $theme={theme}>
            {mapIcon("copy")}
            {locale.en.article.links.copy}
          </Link>
        </LinkGroup>
      </Wrapper>
    </>
  );
};
