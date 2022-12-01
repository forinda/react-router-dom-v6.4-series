import { PostType } from "../typings";
import { posts } from "../data/posts";

export default function statsLoader() {
  return new Promise<{ posts: PostType[] }>((resolve) => {
    setTimeout(() => {
      resolve({ posts });
    }, 1000);
  });
}
