import { Blog, TypeIcon } from "config/articles/types";
import VideoCamera from "components/svg/VideoCamera";
import Newspaper from "components/svg/Newspaper";
import Design from "components/svg/Design";

export function iconMap(icon: TypeIcon) {
  const color = "#1E429F";

  switch (icon) {
    case "camera":
      return <VideoCamera color={color} />;
    case "newspaper":
      return <Newspaper color={color} />;
    case "design":
      return <Design color={color} />;
  }
}

export function excludeBlog(uid: string, blogs: Blog[]) {
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
