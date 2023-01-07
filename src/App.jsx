import React, { useState, useEffect } from "react";
import getData from "./components/getData";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData("http://localhost:3000/blogposts")
      .then((json) => {
        setBlogs(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Blog</h1>
      {console.log(blogs)}
      <button>Previous Page</button>
      <button>Next Page</button>
    </div>
  );
}

export default App;
