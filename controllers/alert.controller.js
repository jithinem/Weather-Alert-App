
const alertService = require('../services/alert.service')

const fetchAlert = async (req, res) => {
    try {
        const page = req.query.page ? req.query.page: 1;
        const limit = req.query.limit ? req.query.limit: 10;
      const response = await alertService.fetchAlerts(page,limit);
      res.status(201).json({response, message:"Alert details fetched successfully"}); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  };

  module.exports = {
    fetchAlert
  }
