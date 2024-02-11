var express = require("express");
var router = express.Router();
const booksController = require("../controllers/books_controller");



router.post("/", booksController.create_books);
router.get("/:id?", booksController.get_books);
router.delete("/:id", booksController.delete_books);
router.put("/:id", booksController.update_books);
module.exports = router;