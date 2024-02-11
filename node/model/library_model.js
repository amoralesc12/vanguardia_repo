const mongoose = require("mongoose");
const { Schema } = mongoose;

const books = new mongoose.Schema({
  id:Number,
  name: { type: String, required: true },
  author: String,
  num_pages: Number,
  date_published: Date,
  publisher: String,
  isbn: { type: String, required: true },
  category:  String,  
  comments: String,
  edition: String,
});

const bookshelves = new mongoose.Schema({
  id: Number,
  position: { type: String, required: true },
  category: { type: String, required: true },
  books: String,
});

const book = mongoose.model("book", books);
const bookshelf = mongoose.model("shelf", bookshelves);

module.exports = { book, bookshelf};