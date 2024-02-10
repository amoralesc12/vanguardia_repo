const express = require('express');
const router = express.Router();
const axios = require('axios');
const modelExample = require("../model/examplemogo");

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const names = await modelExample.find();
    res.send({
      message: "Successfull",
      status: "200",
      data: names,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
