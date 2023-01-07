import React, { useState, useEffect } from "react";
import getData from "./components/getData";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getData("../public/data/blogposts.json");
  }, []);
  return (
    <div className="App">
      <h1>Blog</h1>
    </div>
  );
}

export default App;
