import React, { useState, useEffect } from "react";
import Posts from "./Posts";

export const PostContext = React.createContext();

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
      {error !== "" ? (
        <h2>{error}</h2>
      ) : (
        <PostContext.Provider value={posts}>
          <Posts />
        </PostContext.Provider>
      )}
    </div>
  );
}

export default DataFetching;

//Experimenting with try/catch blocks for async functions.
//Keep error handling as per component, either output the status code or error,
//or create an error boundary and set the error to boolean.
