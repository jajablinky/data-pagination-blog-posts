import sqlite3 from "sqlite3";
import express from "express";
import cors from "cors";

// express is a web framework that makes it easier to handle http requests with some pre-built middleware
const app = new express();
const port = 3000;

// create a connection to the database
const db = new sqlite3.Database("./blogposts.db");

// cors - cross origin resource sharing so the frontend can access this database and not blocked and seen as malicious
app.use(cors());

// set up a get request using express middleware
app.get("/blogposts", (req, res) => {
  db.all("SELECT * FROM blogposts", (err, rows) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
