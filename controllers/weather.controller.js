
const weatherService = require('../services/weather.service');

const fetchWeather = async (req, res) => {
    try {
        const page = req.query.page ? req.query.page: 1;
        const limit = req.query.limit ? req.query.limit: 10;
      const response = await weatherService.fetchWeather(page,limit);
      res.status(201).json({response, message:"Weather details fetched successfully"}); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  };


const findWeatherOneCity = async (req, res) => {
    try {
        if(!req.params.city) return res.status(404).json({message:"Please provide city"})
      const response = await weatherService.findWeatherOneCity(req.params.city);
      res.status(201).json({response, message:"City details fetched successfully"}); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  };

  module.exports = {
    findWeatherOneCity,
    fetchWeather
  }
