import { PostType } from "../typings";
import React from "react";
import { useLoaderData } from "react-router-dom";

const DashStats = () => {
  const { posts } = useLoaderData() as { posts: PostType[] };

  return (
    <div>
      <h1>Dashboard Stats</h1>
      <p>There are {posts.length} posts</p>
    </div>
  );
};

export default DashStats;
