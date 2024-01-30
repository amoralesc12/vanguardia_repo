const express = require('express');
const router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const { data: countries } = await axios.get('https://restcountries.com/v2/all');
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    res.render('index', { title: 'Welcome to my branch', randomCountry });
    console.log('Random Country Data:', randomCountry);
  } catch (error) {
    console.error('Axios Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
