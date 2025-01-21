const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weather.controller");

router.get("/:city", weatherController.findWeatherOneCity); 

router.get("/", weatherController.fetchWeather); 

module.exports = router; 