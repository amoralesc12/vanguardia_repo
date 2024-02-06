const express = require('express');
const router = express.Router();
const axios = require('axios');
const connectMongoDB = require('../config/db'); 
require('dotenv').config();

const app = express();
const port = 3000;

connectMongoDB()
  .then(() => {
 
    app.get('/db', (req, res) => {
      res.send('¡Conexión a MongoDB establecida!');
    });

    app.listen(port, () => {
      console.log(`Servidor Express iniciado en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  });

/* GET home page.*/ 
router.get('/', async (req, res, next) => {
  try {
    const { data: countries } = await axios.get('https://restcountries.com/v2/all');
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];

    // Ajustar para mostrar solo el nombre del país
    const countryName = randomCountry.name;

    res.render('index', { title: 'Welcome to my branch', countryName });
    console.log('Random Country Name:', countryName);
  } catch (error) {
    console.error('Axios Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
