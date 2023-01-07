import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [displayedBlogs, setDisplayedBlogs] = useState(blogs.slice(0, 10));

  useEffect(() => {
    const fetchData = async (pageNumber) => {
      try {
        const response = await fetch(
          `http://localhost:3000/blogposts?page=${pageNumber}`
        );
        const json = await response.json();
        setBlogs(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(page);
  }, []);
  const handleNextPage = () => {
    const nextBlogs = blogs.slice(page * 10, (page + 1) * 10);
    if (page === 1) {
      setPage(page + 2);
    }
    if (page !== 10) {
      setPage(page + 1);
    }
    setDisplayedBlogs(nextBlogs);
  };

  return (
    <div className="App">
      <h1>Blog</h1>
      {displayedBlogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.header}</h2>
          <p>{blog.opening}</p>
          <p>{blog.middle}</p>
          <p>{blog.closing}</p>
        </div>
      ))}
      <button>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}

export default App;
