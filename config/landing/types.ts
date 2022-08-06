export type Experience = {
  iconUrl: string;
  company: string;
  companyUrl: string;
  duration: string;
  jobPosition: string;
  achievements: string[];
};

export type Project = {
  imgUrl: string;
  tags: string[];
  title: string;
  description: string;
  externalUrl?: string;
  githubUrl?: string;
};

export type Skillset = {
  text: string;
  icon: Lang;
};

export type Lang =
  | "go"
  | "ts"
  | "js"
  | "py"
  | "rs"
  | "pg"
  | "flask"
  | "redis"
  | "celery"
  | "react"
  | "rmq"
  | "elk"
  | "docker";
