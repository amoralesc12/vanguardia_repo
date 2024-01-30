const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

/*
// GET home page. 
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
});*/

/*GET WEATHER */
router.get('/', async (req, res,next) => {
  try {
    const weatherApiKey = process.env.WEATHER_API;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${weatherApiKey}`;
    const { data: weatherData } = await axios.get(weatherUrl);
    res.json(weatherData);
    console.log('Weather Data:', weatherData);
  } catch (error) {
    console.error('Axios Error:', error.message);
    res.status(500).json({ error: 'Error al obtener datos del clima' });
  }
});
module.exports = router;
