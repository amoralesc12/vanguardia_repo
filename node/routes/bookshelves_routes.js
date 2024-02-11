var express = require("express");
var router = express.Router();
const booksshelves_controller = require("../controllers/bookshelves_controller");



router.post("/", booksshelves_controller.create_bookshelves);
router.get("/:id?", booksshelves_controller.get_bookshelves);
router.delete("/:id", booksshelves_controller.delete_bookshelves);
router.put("/:id", booksshelves_controller.update_bookshelves);
module.exports = router;