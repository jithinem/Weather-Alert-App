console.warn("Weather app");
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require("./config/database");  
const routes = require('./routes');
const { startWeatherCron } = require("./cron-job/cron.job");
const {seedCities} = require('./seed/city.seed');

dotenv.config();

connectDB();

seedCities();

startWeatherCron();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use("/api", routes); 

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});