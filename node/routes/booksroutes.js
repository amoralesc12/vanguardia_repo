var express = require("express");
var router = express.Router();
const booksController = require("../controllers/books_controller");



router.post("/create", booksController.create);
router.get("/get/:id", booksController.get);
router.delete("/delete/:id", booksController.deleteb);
router.put("/update/:id", booksController.update);
module.exports = router;