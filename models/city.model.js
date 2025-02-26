const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const City = mongoose.model("City", citySchema);

module.exports = City;
