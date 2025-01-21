const axios = require("axios");
const cron = require("node-cron");
require("dotenv").config();
const City = require('../models/city.model');
const Alert = require('../models/alert.model');
const Weather = require('../models/weather.model');

const getWeatherData = async () => {
    const apiKey = process.env.WEATHER_API_KEY; 
    const weatherApiUrl = process.env.WEATHER_API_URL; 

  try {
    const cityList = await City.find().select('-_id city');
    const cityNames = cityList.map((item) => item.city); 
    console.log(cityNames);  
    const cityUrls = cityList.map(async (item) => {
        const city = item.city;
        const url = `${weatherApiUrl}?key=${apiKey}&q=${city}`; 
        const response = await axios.get(url);
        const temperature = response.data.current.temp_c;
        const rain = response.data.current.precip_mm;
        const time = response.data.location.localtime;
        if(temperature < process.env.MIN_THRESHOLD_TEMPERATURE) {
            const alert = `Alert: Low temperature (${temperature} ℃) detected in ${city} at ${time}.`;
            console.log(alert);
            await Alert.create({alert});
        }
        if(temperature > process.env.MAX_THRESHOLD_TEMPERATURE) {
            const alert = `Alert: High temperature (${temperature} ℃) detected in ${city} at ${time}.`;
            console.log(alert);
            await Alert.create({alert});
        }
        if(rain !=0) {
            const alert = `Alert: Rain (${rain}mm) detected in ${city} at ${time}.`;
            console.log(alert);
            await Alert.create({alert});
        }
        await Weather.create({
            city: city,
            temperature: temperature,
            rain: rain,
            local_time: time
        })
    return url;

      });
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
};

// Function to start the cron job
const startWeatherCron = () => {
  cron.schedule("*/10 * * * * *", () => {
    console.log("Fetching weather data...");
    getWeatherData();
  });
};

module.exports = { startWeatherCron };
