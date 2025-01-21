const { default: mongoose } = require('mongoose');
const City = require('../models/city.model')

const createCity = async (data) => {
    const result = await City.create(data);
    return result;
}

const deleteCity = async (data) => {
    console.warn(data);
    
    const result = await City.findByIdAndDelete(new mongoose.Types.ObjectId(data));
    return result;
}

module.exports = {
    createCity,
    deleteCity
}