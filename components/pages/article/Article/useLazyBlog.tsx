import React, { useEffect, useState } from "react";

export default (mdxFile: string) => {
  const [markdown, setMarkdown] = useState<JSX.Element>();

  useEffect(() => {
    const Mdx = React.lazy(
      () => import("config/articles/markdown/blogs/" + mdxFile)
    );
    setMarkdown(<Mdx />);
  }, [mdxFile]);

  return markdown;
};
