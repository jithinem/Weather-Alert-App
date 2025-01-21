const axios = require('axios');
const Weather = require('../models/weather.model');

const fetchWeather = async (page, limit) => {
    const skip = (page - 1) * limit;

    const alerts = await Weather.find()
      .sort({ createdAt: -1 }) 
      .skip(skip) 
      .limit(limit);

    const total = await Weather.countDocuments();

    return {
      data: alerts,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      total,
    };
};


const findWeatherOneCity = async (city) => {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `${process.env.WEATHER_API_URL}?key=${apiKey}&q=${city}`;
    try {
        const response = await axios.get(url);
        const temperature = response.data.current.temp_c;
        const rain = response.data.current.precip_mm;
        const time = response.data.location.localtime;

        const result = {
            temperature,
            rain,
            city,
            time,
            city: city
        }
        return result
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
        throw error; 
      }

 return true;
}

module.exports = {
    findWeatherOneCity,
    fetchWeather
}
