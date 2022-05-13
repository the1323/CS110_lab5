const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

let books = [];
app.use(cors());

app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.urlendoded());
app.use(bodyParser.json());
app.post("/book", (req, res) => {
  //dddddd
  const book = req.body;
  console.log(book);
  books.push(book);
  res.send("book is added to db ");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(port, () => console.log("hellooooooo"));
