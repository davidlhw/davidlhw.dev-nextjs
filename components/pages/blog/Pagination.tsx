import styled from "styled-components";

import locale from "locale";
import { ThemeType } from "config/theme";
import useThemeStore from "stores/useThemeStore";

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Info = styled.p`
  font-size: 14px;

  & > b {
    color: var(--text);
    transition: 0.25s color;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button(
  ({ $type, $theme }: { $type: "next" | "prev"; $theme: ThemeType }) => `
  --radius: 8px;

  border: none;
  outline: none;
  border-top-left-radius: ${$type === "prev" ? "var(--radius)" : 0};
  border-bottom-left-radius: ${$type === "prev" ? "var(--radius)" : 0};
  border-bottom-right-radius: ${$type === "prev" ? 0 : "var(--radius)"};
  border-top-right-radius: ${$type === "prev" ? 0 : "var(--radius)"};
  padding: 10px 15px;
  cursor: pointer;

  background: #374151;
  color: #D1D5DB;
  transition: 0.25s;

  &:disabled {
    cursor: not-allowed;
    background: #374151 !important;
    color: #D1D5DB !important;
  }

  &:hover {
    background: ${$theme === "light" ? "#111928" : "#4B5563"};
    color: #FFFFFF;
  }
`
);

export default ({
  dataLength,
  page,
  pageSize,
  total,
  onChange,
}: {
  dataLength: number;
  page: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}) => {
  /**
   * Hooks
   */
  const theme = useThemeStore((state) => state.theme);

  /**
   * Not hook
   */
  const _page = Number(page);

  const min = 0;
  const max = Math.ceil(total / pageSize - 1);

  const pageStart = _page * pageSize + 1;
  const pageEnd = _page * pageSize + dataLength;

  const info = locale.en.blog.pagination.info
    .replace("{{ 1 }}", `<b>${pageStart}</b>`)
    .replace("{{ 2 }}", `<b>${pageEnd}</b>`)
    .replace("{{ 3 }}", `<b>${total}</b>`);

  const handlePrev = (e: React.MouseEvent) => {
    const prev = _page - 1;

    if (prev < min) e.preventDefault();
    else onChange(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    const next = _page + 1;

    // console.log(next, max);

    if (next > max) e.preventDefault();
    else onChange(next);
  };

  /**
   * Render
   */
  return (
    <Wrapper>
      <Info dangerouslySetInnerHTML={{ __html: info }} />

      <ButtonGroup>
        <Button
          onClick={handlePrev}
          disabled={_page === min}
          $type="prev"
          $theme={theme}
        >
          {locale.en.blog.pagination.prev}
        </Button>

        <Button
          onClick={handleNext}
          disabled={_page === max}
          $type="next"
          $theme={theme}
        >
          {locale.en.blog.pagination.next}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};
