const express = require("express");
const router = express.Router();
const cityController = require("../controllers/city.controller");

router.post("/", cityController.createCity); 
router.delete("/:id", cityController.deleteCity); 

module.exports = router; 