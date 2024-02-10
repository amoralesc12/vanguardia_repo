const mongoose = require("mongoose");
const { Schema } = mongoose;

const books = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  author: String,
  num_pages: Number,
  date_published: Date,
  publisher: { type: String, require: true }, 
  isbn: { type: String, require: true }, 
  gender: { type: String, require: true }, 
  comments: { type: String, require: true },
  edition: { type: String, require: true },
});

const bookshelves = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  position: { type: String, required: true },
  category: { type: String, required: true },
});

const book = mongoose.model("book", books);
const bookshelf = mongoose.model("shelf", bookshelves);

module.exports = { book, bookshelf};