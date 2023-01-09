import React, { useEffect } from "react";

const FakeBlogsFromServer = ({
  page,
  blogs,
  setBlogs,
  setBlogsIsLoading,
  blogsIsLoading,
}) => {
  useEffect(() => {
    const fetchData = async (pageNumber) => {
      try {
        setBlogsIsLoading(true);
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
  return (
    <>
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
    </>
  );
};

export default FakeBlogsFromServer;
