import { useEffect } from "react";
import styled from "styled-components";

import config from "config";
import locale from "locale";
import useTimeline from "./useTimeline";

import Tag from "components/common/Tag";
import Identity from "./Identity";
import useTimelineStore from "stores/useTimelineStore";
import { mapProgrammingIcon } from "components/svg/programming/utils";

const Wrapper = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(90vh - var(--header-height));
  min-height: 600px;

  & > p {
    margin: 25px 0;
    text-align: center;
  }
`;

const Name = styled.h1`
  @media screen and (min-width: ${config.viewport.md}) {
    font-size: 60px;
  }
`;

const TagsGroup = styled.div`
  display: flex;
  justify-content: center;
  row-gap: 15px;
  column-gap: 20px;
  max-width: 550px;
  flex-wrap: wrap;
`;

export default ({ identities }: { identities: string[] }) => {
  const { add } = useTimeline();
  const setAnimateIdentity = useTimelineStore(
    (state) => state.setAnimateIdentity
  );

  useEffect(() => {
    return () => {
      setAnimateIdentity(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Name ref={add}>{locale.en.landing.intro.name}</Name>

      <div ref={add}>
        <Identity data={identities} />
      </div>

      <TagsGroup ref={add}>
        {config.landing.skillsets.map((s, i) => (
          <Tag
            key={i}
            bgColor="#E1EFFE"
            color="#1E429F"
            icon={s.icon ? mapProgrammingIcon(s.icon, "#1E429F") : undefined}
          >
            {s.text}
          </Tag>
        ))}
      </TagsGroup>
    </Wrapper>
  );
};
