/* Dependencies */
import React, { useState, useEffect, useCallback } from "react";

/* Components */
import ArweaveBlogs from "./components/ArweaveBlogs.jsx";
// import FakeBlogsFromServer from "./components/FakeBlogsFromServer.jsx";
import "./App.css";

function App() {
  const [contributor, setContributor] = useState({
    rwx: "0xbDc4199575A5FA3F19e9888C5d51Bde798F404Cc",
  });
  const [blogCount, setBlogCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [blogsIsLoading, setBlogsIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [countIsLoading, setCountIsLoading] = useState(true);

  // Extract handlePagination function
  const handlePagination = useCallback(
    (newPage) => {
      setPage(newPage);
      setBlogsIsLoading(true);
      setBlogs([]);
    },
    [setBlogs, setBlogsIsLoading, setPage]
  );

  const totalPages = Math.ceil(blogCount / 3);

  // Call handlePagination in place of setPage
  const handleNextPage = () => {
    if (page < totalPages) {
      handlePagination(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      handlePagination(page - 1);
    }
  };

  return (
    <div className="App">
      <ArweaveBlogs
        contributor={contributor}
        setContributor={setContributor}
        blogs={blogs}
        setBlogs={setBlogs}
        blogsIsLoading={blogsIsLoading}
        setBlogsIsLoading={setBlogsIsLoading}
      />
      {/* <FakeBlogsFromServer
        blogs={blogs}
        setBlogs={setBlogs}
        page={page}
        blogsIsLoading={blogsIsLoading}
        setBlogsIsLoading={setBlogsIsLoading}
      /> */}
      <div className="button-container">
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
      {/* <div className="page-count-container">
        <h3>Page</h3>
        {countIsLoading ? (
          <p>Loading...</p>
        ) : (
          <p>
            {page} of {totalPages}
          </p>
        )}
      </div> */}
    </div>
  );
}

export default App;
