import { PostType } from "../typings";
import React from "react";
import { useLoaderData } from "react-router-dom";
const Post = () => {
  const { post } = useLoaderData() as { post: PostType | undefined };

  return (
    <div className="p-10">
      {post ? (
        <div>
          <h1 className="font-bold uppercase underline">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Post;
