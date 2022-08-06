import { Skillset } from "./../landing/types";
export type TypeIcon = "camera" | "newspaper" | "design";

export type Article = {
  uid: string;
  coverImageUrl: string;
  title: string;
  publishOn: string;
  tags: Skillset[];
  readTime: string;
  linkUrl?: {
    facebook?: string;
    twitter?: string;
    github?: string;
    realSite?: string;
  };
  mdxFilename: string;
  summary: string;
};

export type Blog = Article & {
  type: {
    text: string;
    icon: TypeIcon;
  };
};

export type Breadcrumb = {
  text: string;
  url: string;
};
