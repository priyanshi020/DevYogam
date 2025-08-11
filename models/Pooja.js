const mongoose = require("mongoose");

const benefitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const poojaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      equired: true,
    },
    subtitle: {
      type: String,
    },
    temple: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    benefits: {
      type: [benefitSchema],
      validate: [(arr) => arr.length <= 3, "{PATH} exceeds the limit of 3"],
    },
    aboutTemple: {
      type: String,
    },
    images: {
      type: [String],
      validate: [(arr) => arr.length <= 5, "{PATH} exceeds the limit of 5"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pooja", poojaSchema);
