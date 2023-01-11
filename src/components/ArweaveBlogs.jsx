import { useEffect } from "react";
import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";

/* =-= COMPONENTS =-= */
// GraphQL query
import query from "./query";
// Fetch Blog Data Custom Hook : Aarweave Request + State update for blogs
import fetchBlogData from "./fetchBlogData";

const graphQLClient = new GraphQLClient("https://arweave.dev/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
});

const ArweaveBlogs = ({
  contributor,
  setContributor,
  blogs,
  setBlogs,
  blogsIsLoading,
  setBlogsIsLoading,
}) => {
  useQuery("get-posts", async () => {});
  const { data, isLoading, isError } = useQuery(
    ["transactions", contributor],
    async () => {
      await graphQLClient.request(query);
    },
    {
      contributor:
        contributor.rwx || "0xB618aaCb9DcDc21Ca69D310A6fC04674D293A193",
      first: 3,
    }
  );

  console.log(data);
  if (isLoading) {
    console.log("loading...");
  }

  if (isError) {
    console.error(isError);
  }

  /* =-= Map out all transactionID's to new array and fetch from each blog =-= */
  // useEffect(() => {
  //   if (!isLoading && data) {
  //     setBlogsIsLoading(true);
  //     const edges = data.transactions.edges;
  //     const transactionIdBlogs = edges.map((edge) => ({
  //       transactionId: edge.node.id,
  //       blogNumber: edge.node.id,
  //     }));

  //     transactionIdBlogs.forEach((blog) => {
  //       fetchBlogData(blog.transactionId, setBlogs, setBlogsIsLoading);
  //     });
  //   }
  // }, [data, isLoading]);

  return (
    <>
      <h1>Blog</h1>
      <div className="blog-page">
        {/* {blogsIsLoading ? (
          "Loading..."
        ) : (
          <div>
            {Array.isArray(blogs)
              ? blogs.map((blog) => {
                  return (
                    <>
                      <div>
                        <h2>{blog.content.title}</h2>
                        <h3>by: {blog.authorship.contributor}</h3> */}
        {/* {data &&
                        data.transactions &&
                        data.transactions.pageInfo &&
                        data.transactions.pageInfo.hasNextPage ? (
                          <button onClick={handleLoadMore}>Load More</button>
                        ) : null} 
                      </div>
                    </>
                  );
                })
              : null}
          </div>
        )}*/}
      </div>
    </>
  );
};
export default ArweaveBlogs;
