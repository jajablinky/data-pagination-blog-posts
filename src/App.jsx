import React, { useState, useEffect } from "react";
import blogPostGenerator from "./components/blogPostGenerator";

import "./App.css";

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(blogPostGenerator());
  }, []);

  console.log(result);
  return (
    <div className="App">
      <h1>Blog</h1>
    </div>
  );
}

export default App;
