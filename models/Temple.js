const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    bhagwan: {
      type: String,
      required: true,
    },
    templeDescription: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
    },
    images: {
      type: [String],
      validate: [(arr) => arr.length <= 5, "{PATH} exceeds the limit of 5"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Temple", templeSchema);
