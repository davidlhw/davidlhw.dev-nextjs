import Head from "next/head";

import { Article } from "config/articles/types";

export default ({
  data,
  hostname,
  url,
}: {
  data: Article;
  hostname: string;
  url: string;
}) => (
  <Head>
    <meta property="og:url" content={url} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.summary} />
    <meta
      property="og:image"
      content={`https://${hostname}${data.coverImageUrl}`}
    />
  </Head>
);
