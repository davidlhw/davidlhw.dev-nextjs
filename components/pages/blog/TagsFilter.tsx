import styled from "styled-components";

import type { ThemeType } from "config/theme";
import useThemeStore from "stores/useThemeStore";
import Tag from "components/common/Tag";
import { Skillset } from "config/landing/types";
import { mapProgrammingIcon } from "components/svg/programming/utils";

export const Wrapper = styled.div(
  ({ $theme }: { $theme: ThemeType }) => `
  width: 270px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${$theme === "light" ? "#E5E7EB" : "#4B5563"};
  transition: border-color 0.25s;

  & > p {
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: 700;
    color: var(--text);
  }    
`
);

const TagsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export default ({
  title,
  tags,
  selectedTags,
  onChange,
}: {
  title: string;
  tags: Skillset[];
  selectedTags: string[];
  onChange?: (t: string[]) => void;
}) => {
  const theme = useThemeStore((state) => state.theme);

  const allActive = selectedTags.length === 0;

  const handleTagClick = (topic: string) => {
    //Check whether to highlight or dim
    const index = selectedTags.map((t) => t).indexOf(topic);

    if (index !== -1) {
      const clone = [...selectedTags];
      clone.splice(index, 1);

      onChange!(clone);
    } else {
      onChange!([...selectedTags, topic]);
    }
  };

  return (
    <Wrapper $theme={theme}>
      <p>{title}</p>

      <TagsGroup>
        {tags.map((t, i) => {
          const active = allActive || selectedTags.includes(t.text);

          return (
            <Tag
              key={i}
              color={active ? "#1E429F" : "var(--primary)"}
              bgColor={active ? "#E1EFFE" : "var(--bg-alt)"}
              onClick={onChange ? () => handleTagClick(t.text) : undefined}
              icon={t.icon ? mapProgrammingIcon(t.icon, "#1E429F") : undefined}
            >
              {t.text}
            </Tag>
          );
        })}
      </TagsGroup>
    </Wrapper>
  );
};
