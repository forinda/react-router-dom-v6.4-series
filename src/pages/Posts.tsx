import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { PostType } from "../typings";
import React from "react";

const Posts = () => {
  const { posts } = useLoaderData() as { posts: PostType[] };
  const navigation = useNavigate() as any;
  // console.log(Object.keys(navigation));

  return (
    <div>
      <h1>Posts</h1>
      {!posts ? (
        <p>Loading...</p>
      ) : (
        <ol className="list-disc px-8 capitalize">
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/dashboard/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Posts;
