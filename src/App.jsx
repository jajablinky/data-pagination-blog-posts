/* Dependencies */
import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client";

/* Components */
import AARWEAVE_QUERY from "./components/AARWEAVE_QUERY.jsx";
import FakeBlogsFromServer from "./components/FakeBlogsFromServer.jsx";
import "./App.css";

function App() {
  const [contributor, setContributor] = useState({
    rwx: "0xB618aaCb9DcDc21Ca69D310A6fC04674D293A193",
  });
  const [blogCount, setBlogCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [blogsIsLoading, setBlogsIsLoading] = useState(true);
  const { data, loading, error } = useQuery(AARWEAVE_QUERY, {
    variables: {
      contributor:
        contributor.rwx || "0xB618aaCb9DcDc21Ca69D310A6fC04674D293A193",
    },
  });

  const [page, setPage] = useState(1);
  const [countIsLoading, setCountIsLoading] = useState(true);

  const fetchBlogCount = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000/blogposts/count`);
      const json = await response.json();
      setBlogCount(json.count);
      setCountIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchBlogCount();
  }, [fetchBlogCount]);

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

  console.log(data);

  return (
    <div className="App">
      <FakeBlogsFromServer
        blogs={blogs}
        setBlogs={setBlogs}
        page={page}
        blogsIsLoading={blogsIsLoading}
        setBlogsIsLoading={setBlogsIsLoading}
      />
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
