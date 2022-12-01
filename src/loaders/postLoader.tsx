import { LoaderFunctionArgs } from "react-router-dom";
import { PostType } from "../typings";
import { posts } from "../data/posts";

export default function postLoader({ params }: LoaderFunctionArgs) {
  return new Promise<{ post: PostType | undefined }>((resolve) => {
    setTimeout(() => {
      const post = posts.find((post) => String(post.id) === params.id!);
      resolve({ post });
    }, 500);
  });
}
