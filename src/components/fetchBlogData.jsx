import Arweave from "arweave";
const arweave = Arweave.init({});

const fetchBlogData = (transactionId, setBlogs, setBlogsIsLoading) => {
  arweave.transactions
    .getData(transactionId, {
      decode: true,
      string: true,
    })
    .then((data) => {
      const blogPost = JSON.parse(data);
      setBlogs((prevBlogs) => [...prevBlogs, blogPost]);
      setBlogsIsLoading(false);
    })
    .catch((err) => console.error(err));
};

export default fetchBlogData;
