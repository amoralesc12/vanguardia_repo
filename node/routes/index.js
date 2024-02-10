const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();


/*GET WEATHER */


router.get("/", async function (req, res, next) {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + process.env.WEATHER_API
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;