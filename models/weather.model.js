const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    temperature: {
        type: String,
        required: true,
      },
      local_time: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true, 
  }
);

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;
