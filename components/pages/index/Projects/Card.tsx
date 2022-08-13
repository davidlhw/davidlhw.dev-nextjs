import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import config from "config";
import type { Article } from "config/articles/types";
import { openNewTab, regex } from "utils";

import Tag, { Text as $Tag_Text } from "components/common/Tag";
import Github from "components/svg/social/Github";
import Document from "components/svg/Document";
import useHoverFloat from "hooks/common/useHoverFloat";
import { mapProgrammingIcon } from "components/svg/programming/utils";

const threshold = "600px";

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;

  background: #BAD1FF;
  opacity: 0.5;
  transition: 0.25s opacity;
`;

const Wrapper = styled.div(
  ({ $cursor }: { $cursor: string }) => `
  border-radius: 8px;
  position: relative;
  min-height: 520px;
  height: fit-content;
  overflow: hidden;
  background: var(--bg-alt);
  transition: background 0.25s;

  display: flex;
  flex-direction: column;
  cursor: ${$cursor};

  &:hover ${Mask} { opacity: 0 }

  @media screen and (min-width: ${threshold}) {
    flex-direction: row;
    min-height: 220px;
  }

  @media screen and (min-width: ${config.viewport.lg}) {
    height: 100%;
  }
`
);

const ImageContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  aspect-ratio: 1/0.75;
  width: 100%;
  height: auto;

  @media screen and (min-width: ${threshold}) {
    width: 50%;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    width: 40%;
    max-width: 400px;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  padding: 40px;
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  ${$Tag_Text} {
    font-size: 12px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: var(--text);
`;

const Description = styled.p`
  flex-grow: 1;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export default React.forwardRef(
  (
    { uid, coverImageUrl, title, tags, summary, linkUrl }: Article,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const router = useRouter();
    const hover = useHoverFloat<HTMLDivElement>();
    const _summary = summary.trim().replace(regex.multipleWs, "");

    const addRef = (dom: HTMLDivElement | null) => {
      if (!dom) return;
      hover.current = dom;

      if (typeof ref === "function") ref(dom);
      else if (typeof ref === "object" && ref) ref.current = dom;
    };

    return (
      <Wrapper
        ref={addRef}
        onClick={() => linkUrl?.realSite && openNewTab(linkUrl.realSite)}
        $cursor={linkUrl?.realSite ? "pointer" : "auto"}
      >
        <ImageContainer>
          <Mask />
          <Image src={coverImageUrl} alt={title} />
        </ImageContainer>

        <Container>
          <Title>{title}</Title>

          <Description>
            {_summary.length <= config.landing.max.descriptionLength
              ? _summary
              : `${_summary.slice(0, config.landing.max.descriptionLength)}...`}
          </Description>

          <TagGroup>
            {tags.map((p, i) => (
              <Tag
                key={i}
                bgColor="#E1EFFE"
                color="#1E429F"
                icon={
                  p.icon ? mapProgrammingIcon(p.icon, "#1E429F") : undefined
                }
              >
                {p.text}
              </Tag>
            ))}
          </TagGroup>

          <LinkGroup onClick={(e) => e.stopPropagation()}>
            <Document
              color="var(--primary)"
              onClick={() => router.push(`/project/${uid}`)}
            />

            {linkUrl?.github && (
              <Github
                color="var(--primary)"
                onClick={() => openNewTab(linkUrl.github!)}
              />
            )}
          </LinkGroup>
        </Container>
      </Wrapper>
    );
  }
);
