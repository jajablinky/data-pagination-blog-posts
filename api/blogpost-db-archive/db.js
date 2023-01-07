import fs from "fs";
import sqlite3 from "sqlite3";

sqlite3.verbose();

const db = new sqlite3.Database("./blogposts.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the blogposts database.");
});

const jsonData = JSON.parse(fs.readFileSync("blogposts.json", "utf8"));

jsonData.posts.forEach((post) => {
  db.run(
    `INSERT INTO blogposts (id, header, opening, middle, closing) VALUES (?,?,?,?,?)`,
    [
      post.id,
      post.header,
      post.entry.opening,
      post.entry.middle,
      post.entry.closing,
    ],
    (err) => console.error(err.message)
  );
});
