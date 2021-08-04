import React, { useContext } from "react";
import { PostContext } from "./DataFetching";

function Posts() {
  const posts = useContext(PostContext);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
