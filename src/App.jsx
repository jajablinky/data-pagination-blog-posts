import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [displayBlogs, setDisplayBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async (pageNumber) => {
      try {
        const response = await fetch(
          `http://localhost:3000/blogposts?page=${pageNumber}`
        );
        const json = await response.json();
        setBlogs(json);
        setDisplayBlogs(json.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < 20) {
      setPageCount(pageCount + 1);
      setPage(Math.ceil(pageCount / 2) + 1);
      setDisplayBlogs(blogs.slice(5, 10));
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPageCount(pageCount - 1);
      setPage(Math.ceil(pageCount / 2) + 1);
      setDisplayBlogs(blogs.slice(0, 5));
    }
  };

  return (
    <div className="App">
      <h1>Blog</h1>
      <div className="blog-page">
        {displayBlogs.map((blog, index) => (
          <div className="blog-post" key={index}>
            <h2>{blog.header}</h2>
            <p>{blog.opening}</p>
            <p>{blog.middle}</p>
            <p>{blog.closing}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
      <div className="page-count-container">
        <h3>Page</h3>
        <p>{pageCount === 0 ? "1" : pageCount} of 20</p>
      </div>
    </div>
  );
}

export default App;
