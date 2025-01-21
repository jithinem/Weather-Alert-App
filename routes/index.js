const express = require("express");
const router = express.Router();

const cityRoute = require("./city.route"); 
const weatherRoute = require("./weather.route"); 
const alertRoute = require("./alert.route"); 


const defaultRoutes = [
  {
    path: "/cities",
    route: cityRoute, 
  },
  {
    path: "/weather",
    route: weatherRoute, 
  },
  {
    path: "/alerts",
    route: alertRoute, 
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route); 
});

module.exports = router; 