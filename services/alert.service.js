const Alert = require('../models/alert.model')

const fetchAlerts = async (page, limit) => {
    const skip = (page - 1) * limit;

    const alerts = await Alert.find()
      .sort({ createdAt: -1 }) 
      .skip(skip) 
      .limit(limit);

    // Count total documents for pagination metadata
    const totalAlerts = await Alert.countDocuments();

    return {
      data: alerts,
      currentPage: page,
      totalPages: Math.ceil(totalAlerts / limit),
      totalAlerts,
    };
};

module.exports = {fetchAlerts};
