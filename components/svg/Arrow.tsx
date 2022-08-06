import styled from "styled-components";

export const Wrapper = styled.svg(
  ({ $cursor }: { $cursor: string }) => `
  aspect-ratio: 10/9;
  height: auto;
  width: auto;
  display: block;
  cursor: ${$cursor};
  
  & path { transition: fill 0.25s }
`
);

export default ({
  color = "red",
  ...props
}: {
  color?: string;
} & Omit<JSX.IntrinsicElements["svg"], "ref">) => (
  <Wrapper
    {...props}
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3515 0.951563C10.5765 0.726598 10.8817 0.60022 11.1999 0.60022C11.5181 0.60022 11.8233 0.726598 12.0483 0.951563L19.2483 8.15156C19.4733 8.3766 19.5996 8.68177 19.5996 8.99996C19.5996 9.31816 19.4733 9.62333 19.2483 9.84836L12.0483 17.0484C11.822 17.267 11.5189 17.3879 11.2042 17.3852C10.8896 17.3824 10.5886 17.2562 10.3661 17.0337C10.1436 16.8113 10.0174 16.5103 10.0147 16.1956C10.012 15.881 10.1329 15.5779 10.3515 15.3516L15.5031 10.2H1.5999C1.28164 10.2 0.976418 10.0735 0.751374 9.84849C0.52633 9.62345 0.399902 9.31822 0.399902 8.99996C0.399902 8.6817 0.52633 8.37648 0.751374 8.15144C0.976418 7.92639 1.28164 7.79996 1.5999 7.79996H15.5031L10.3515 2.64836C10.1265 2.42333 10.0002 2.11816 10.0002 1.79996C10.0002 1.48177 10.1265 1.1766 10.3515 0.951563Z"
    />
  </Wrapper>
);
