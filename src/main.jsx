import React from "react";
import ReactDOM from "react-dom/client";
import {
  ReactQueryCacheProvider,
  ReactQueryConfigProvider,
  QueryCache,
} from "react-query";
import App from "./App";
import "./index.css";

const queryCache = new QueryCache();
const config = {
  retry: true,
  refetchAllOnWindowFocus: false,
  staleTime: 0,
  cacheTime: 0,
};

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ReactQueryConfigProvider config={config}>
        <App />
      </ReactQueryConfigProvider>
    </ReactQueryCacheProvider>
  </React.StrictMode>
);
