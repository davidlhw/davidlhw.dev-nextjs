import { Lang } from "config/landing/types";

import GoLang from "./GoLang";
import Rust from "./Rust";
import Typescript from "./Typescript";
import Javascript from "./Javascript";
import Python from "./Python";
import Postgres from "./Postgres";
import Flask from "./Flask";
import Redis from "./Redis";
import Celery from "./Celery";
import Docker from "./Docker";
import React from "./React";
import RabbitMQ from "./RabbitMQ";
import Elastic from "./Elastic";
import Mongo from "./Mongo";
import Next from "./Next";

export function mapProgrammingIcon(lang: Lang, color: string) {
  switch (lang) {
    case "go":
      return <GoLang color={color} />;
    case "js":
      return <Javascript color={color} />;
    case "py":
      return <Python color={color} />;
    case "rs":
      return <Rust color={color} />;
    case "ts":
      return <Typescript color={color} />;
    case "pg":
      return <Postgres color={color} />;
    case "flask":
      return <Flask color={color} />;
    case "redis":
      return <Redis color={color} />;
    case "celery":
      return <Celery color={color} />;
    case "docker":
      return <Docker color={color} />;
    case "react":
      return <React color={color} />;
    case "rmq":
      return <RabbitMQ color={color} />;
    case "elk":
      return <Elastic color={color} />;
    case "mongo":
      return <Mongo color={color} />;
    case "nextjs":
      return <Next color={color} />;
  }
}
