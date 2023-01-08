import sqlite3 from "sqlite3";
import express, { application } from "express";
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
  // Get the page number from the query parameter
  const page = req.query.page || 1;
  const limit = 3;
  // Calculate the offset for the query
  const offset = (page - 1) * limit;

  // Get the rows from the database with a limit of 10 and the calculated offset
  db.all(
    `SELECT * FROM blogposts LIMIT ? OFFSET ?`,
    [limit, offset],
    (err, rows) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  );
});

app.get("/blogposts/count", (req, res) => {
  db.get(`SELECT COUNT(*) as count FROM blogposts`, (err, row) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({ count: row.count });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
