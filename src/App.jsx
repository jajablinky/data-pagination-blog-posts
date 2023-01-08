import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [blogCount, setBlogCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [countIsLoading, setCountIsLoading] = useState(true);
  const [blogsIsLoading, setBlogsIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogCount = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogposts/count`);
        const json = await response.json();
        setBlogCount(json.count);
        setCountIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogCount();
  }, []);

  const totalPages = Math.ceil(blogCount / 3);

  useEffect(() => {
    const fetchData = async (pageNumber) => {
      try {
        const response = await fetch(
          `http://localhost:3000/blogposts?page=${pageNumber}`
        );
        const json = await response.json();
        setBlogs(json);
        setBlogsIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <h1>Blog</h1>
      <div className="blog-page">
        {blogsIsLoading ? (
          <p>Loading...</p> // show loading message while count is being fetched
        ) : (
          blogs.map((blog, index) => (
            <div className="blog-post" key={index}>
              <h2>{blog.header}</h2>
              <p>{blog.opening}</p>
              <p>{blog.middle}</p>
              <p>{blog.closing}</p>
            </div>
          ))
        )}
      </div>
      <div className="button-container">
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
      <div className="page-count-container">
        <h3>Page</h3>
        {countIsLoading ? (
          <p>Loading...</p>
        ) : (
          <p>
            {page} of {totalPages}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
