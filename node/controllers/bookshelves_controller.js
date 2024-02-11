const booksshelves_model = require("../model/library_model");

async function create_bookshelves(req, res) {
  const newBookshelf = new booksshelves_model.bookshelf(req.body);
  try {
    await newBookshelf.save();
    res.send({ message: "Estante Creado Exitosamente!", status: "200" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error", status: "500" });
  }
}

async function get_bookshelves(req, res) {
  try {
    const data = await booksshelves_model.bookshelf.find();
    if (data.length===0)
    {
      return res.status(404).send({ message: "No se encuentra el estante!", status: "404" });
    }
    res.send({
      message: "Los datos del estante se obtuvieron correctamente!",
      status: "200",
      data: data,
    });

  } catch (err) {
    res.status(500).send({ message: "Server error", status: "500" });
  }
}

async function delete_bookshelves(req, res) {
  try {
    const bookshelf_id = req.params.id;
    await booksshelves_model.bookshelf.findByIdAndDelete(bookshelf_id)
    res.send({ message: "El estante se elimino correctamente", status: "200" });
  } catch (err) {
    res.status(500).send({ message: "Server error", status: "500" });
  }
}

async function update_bookshelves(req, res) {
  try {
    const bookshelf_id = req.params.id;
    const updatedBookshelf = await booksshelves_model.bookshelf.findByIdAndUpdate(
      bookshelf_id,
      req.body,
      { new: true }
    );
    if (!updatedBookshelf) {
      return res.status(404).send({ message: "No se encuentra el estante!", status: "404" });
    }
    res.send({ message: "El estante se actualizo correctamente!", status: "200" });
  } catch (err) {
    res.status(500).send({ message: "Server Error", status: "500" });
  }
}

module.exports = {
  create_bookshelves,
  get_bookshelves,
  delete_bookshelves,
  update_bookshelves,
};