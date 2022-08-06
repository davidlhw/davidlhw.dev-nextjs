import config from "config";
import type { Article } from "config/articles/types";

import FacebookCircled from "components/svg/social/FacebookCircled";
import Twitter from "components/svg/social/Twitter";
import Chain from "components/svg/Chain";
import Github from "components/svg/social/Github";
import ExternalLink from "components/svg/ExternalLink";
import locale from "locale";
import { openNewTab } from "utils";

export type IconKey = "facebook" | "twitter" | "copy" | "github" | "realSite";

function Tweet(url: string, data: Article) {
  const text = encodeURIComponent(
    `${data.title} by ${locale.en.landing.intro.name}`
  );
  const via = encodeURIComponent(config.twitterUsername);
  const _url = encodeURIComponent(url);
  const hashtags = data.tags.join(",");

  window.open(
    "https://twitter.com/intent/tweet?" +
      `text=${text}&` +
      `via=${via}&` +
      `url=${_url}&` +
      `hashtags=${hashtags}`,
    "_blank",
    "width=400,height=350,scrollbars=yes"
  );
}

function FBShare(url: string) {
  const _url = encodeURIComponent(url);

  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${_url}`,
    "_blank",
    "width=400,height=350,scrollbars=yes"
  );
}

function sanitizeUrl(url: string) {
  return `https://${url.split("#")[0]}`;
}

export function mapIcon(type: IconKey) {
  const color = "var(--text)";

  switch (type) {
    case "facebook":
      return <FacebookCircled color={color} />;
    case "twitter":
      return <Twitter color={color} />;
    case "github":
      return <Github color={color} />;
    case "copy":
      return <Chain color={color} />;
    case "realSite":
      return <ExternalLink color={color} />;
  }
}

export function mapFn(type: IconKey, url: string, data: Article) {
  const _url = sanitizeUrl(url);

  switch (type) {
    case "github":
    case "realSite":
      return () => openNewTab(url);
    case "facebook":
      return () => FBShare(_url);
    case "twitter":
      return () => Tweet(_url, data);
  }
}
