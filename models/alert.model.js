const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    alert: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
