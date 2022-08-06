import { Article } from "config/articles/types";

export function excludeArticle(uid: string, blogs: Article[]) {
  const clone = [...blogs];

  let index = -1;

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].uid === uid) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    clone.splice(index, 1);
  }

  return clone;
}
