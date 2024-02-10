
const Model = require("../model/libraryModel");

async function Create(req, res) {
  const { id, position, category } = req.body;
  const newShelf = new Model.shelf({ id, position, category });
  try {
    await newShelf.save();
    res.send({ message: "There is a New BookShelf", status: "200" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error", status: "500" });
  }
}

async function Read(req, res) {
  try {
    const shelfID = req.params.id;
    let data;

    if (shelfID) {
      const shelf = await Model.shelf.findOne({ id: shelfID });
      if (shelf) {
        const books = await Model.book.find({
          id: { $in: shelf.booksID },
        });
        shelf.booksID = books;
      } else {
        return res
          .status(404)
          .send({ message: "There is no Shelf", status: "404" });
      }
      data = shelf;
    
    }

    res.send({
      message: "Data obtained successfully",
      status: "200",
      data: data,
    });
  } catch (err) {
    res.status(500).send({ message: "Internal server error", status: "500" });
  }
}

async function Update(req, res) {
  try {
    const shelfID = req.params.id;
    const updatedShelf = await Model.shelf.findOneAndUpdate(
      { id: shelfID },
      req.body,
      { new: true }
    );
    if (!updatedShelf) {
      return res
        .status(404)
        .send({ message: "There is no Shelf", status: "404" });
    }
    res.send({
      message: "Update",
      status: "200",
      shelf: updatedShelf,
    });
  } catch (err) {
    res.status(500).send({ message: "Internal server error", status: "500" });
  }
}

async function Delete(req, res) {
  const shelfID = req.params.id;
  const shelf = await Model.shelf.findOne({
    id: shelfID,
  });
  if (shelf) {
    try {
      await Model.shelf.deleteOne({ id: shelfID });
      res.send({ message: "Shelf deleted successfully", status: "200" });
    } catch (err) {
      res.status(500).send({ message: "Internal server error", status: "500" });
    }
  } else {
    res.status(404).send({ message: "Shelf not found", status: "404" });
  }
}

module.exports = {
    Create,
    Read,
    Update,
    Delete,
    
  };