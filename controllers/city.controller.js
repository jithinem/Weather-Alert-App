
const cityService = require('../services/city.service');
const City = require('../models/city.model')

const createCity = async (req, res) => {
    try {
      const cityExists = await City.findOne({city: req.body.city});
      if(cityExists) return res.status(404).json({message:"City already exists"})
      const response = await cityService.createCity(req.body);
      res.status(201).json({response, message:"City created successfully"}); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  };

  const deleteCity = async (req, res) => {
    try {
      const cityExists = await City.findById(req.params.id);
      if(!cityExists) return res.status(404).json({message:"City doesnot exists"});
      const response = await cityService.deleteCity(req.params.id);
      res.status(201).json({response, message:"City deleted successfully"}); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  };


  module.exports = {
    createCity,
    deleteCity
  }
  