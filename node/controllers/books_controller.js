const books_model = require("../model/library_model");

async function create_books(req, res) {
  const newBook = new books_model.book(req.body);
  try {
    await newBook.save();
    res.send({ message: "Libro Creado Exitosamente!", status: "200" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error", status: "500" });
  }
}

async function get_books(req, res) {
  try {
    const data = await books_model.book.find();
    if (data.length===0)
    {
      return res.status(404).send({ message: "No se encuentra el libro!", status: "404" });
    }
    res.send({
      message: "La información del Libro se obtuvo correctamente!",
      status: "200",
      data: data,
    });

  } catch (err) {
    res.status(500).send({ message: "Server error", status: "500" });
  }
}

async function delete_books(req, res) {
  try {
    const book_id = req.params.id;
    await books_model.book.findByIdAndDelete(book_id)
    res.send({ message: "El libro se elimino correctamente", status: "200" });
  } catch (err) {
    res.status(500).send({ message: "Server error", status: "500" });
  }
}

async function update_books(req, res) {
  try {
    const book_id = req.params.id;
    const updatedBook = await books_model.book.findByIdAndUpdate(
      book_id,
      req.body,
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).send({ message: "No se encuentra el libro!", status: "404" });
    }
    res.send({ message: "El libro se actualizo correctamente!", status: "200" });
  } catch (err) {
    res.status(500).send({ message: "Server Error", status: "500" });
  }
}

module.exports = {
  create_books,
  get_books,
  delete_books,
  update_books,
};