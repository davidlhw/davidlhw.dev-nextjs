import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import config from "config";
import type { Blog } from "config/articles/types";
import { regex, formatDate } from "utils";

import { iconMap } from "components/pages/blog/utils";
import Tag, { Text as $Tag_Text } from "components/common/Tag";
import useHoverFloat from "hooks/common/useHoverFloat";
import locale from "locale";

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;

  background: #c2f4ff;
  opacity: 0.8;
  transition: 0.25s opacity;
`;

const Wrapper = styled.div`
  padding: 25px;
  height: 100%;
  max-width: 450px;
  margin: 0 auto;
  cursor: pointer;

  background: var(--bg-alt);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: start;

  transition: 0.25s background;

  ${$Tag_Text} {
    font-size: 12px;
  }

  &:hover ${Mask} {
    opacity: 0;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  aspect-ratio: 1/0.6;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 800;
`;

const Description = styled.p`
  flex-grow: 1;
`;

const Footnote = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export default React.forwardRef(
  (
    { uid, coverImageUrl, title, publishOn, readTime, type, summary }: Blog,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const router = useRouter();
    const hover = useHoverFloat<HTMLDivElement>();

    const _description = summary.trim().replace(regex.multipleWs, "");
    const _readTime = locale.en.common.readTime.replace("{{ 1 }}", readTime);

    const handleClick = () => {
      router.push(`/blog/${uid}`);
    };

    const addRef = (dom: HTMLDivElement | null) => {
      if (!dom) return;
      hover.current = dom;

      if (typeof ref === "function") ref(dom);
      else if (typeof ref === "object" && ref) ref.current = dom;
    };

    return (
      <Wrapper ref={addRef} onClick={handleClick}>
        <ImageContainer>
          <Mask />
          <Image src={coverImageUrl} alt={title} />
        </ImageContainer>

        <Tag bgColor="#E1EFFE" color="#1E429F" icon={iconMap(type.icon)}>
          {type.text}
        </Tag>

        <Title>{title}</Title>

        <Description>
          {_description.length <= config.landing.max.descriptionLength
            ? _description
            : `${_description.slice(
                0,
                config.landing.max.descriptionLength
              )}...`}
        </Description>

        <Footnote>{`${formatDate(publishOn)} · ${_readTime}`}</Footnote>
      </Wrapper>
    );
  }
);
