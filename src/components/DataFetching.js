import React, { useState, useEffect } from "react";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posddts");
        if (!res.ok) throw new Error(`Error code: ${res.status}`);
        let fetchedPosts = await res.json();
        return setPosts(fetchedPosts);
      } catch (err) {
        return setError(err.message);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <ul>
        {error !== "" ? (
          <h1>{error}</h1>
        ) : (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </div>
  );
}

export default DataFetching;

//Experimenting with try/catch blocks for async functions.
