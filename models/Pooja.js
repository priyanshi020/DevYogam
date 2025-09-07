const mongoose = require("mongoose");

const serviceBriefSchema = new mongoose.Schema(
  {
    lang_type: {
      type: String,
      enum: ["ENGLISH", "HINDI"],
      required: true,
    },
    title: String,
    short_desc: String,
    location: String,
    tag: String,
    cta_text: String,
    mandir_name: String,
    long_desc: String,
    short_name: String,
  },
  { _id: false }
);

const poojaSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    titleHi: { type: String, required: false },
    subtitle: { type: String, required: false },
    subtitleHi: { type: String, required: false },
    location: { type: String, required: false },
    locationHi: { type: String, required: false },
    capDate: { type: Date, required: false },
    logo_image: { type: String, required: false },
    ht_logo_image: { type: String, required: false },
    price: {
      type: [
        {
          single: {
            amaount: Number,
            description: String,
            descriptionHi: String,
          },
          couple: {
            amaount: Number,
            description: String,
            descriptionHi: String,
          },
          family: {
            amaount: Number,
            description: String,
            descriptionHi: String,
          },
        },
      ],
      required: false,
    },
    benefit: {
      type: [
        {
          title: { type: String, required: true },
          titleHi: { type: String, required: true },
          description: { type: String, required: true },
          descriptionHi: { type: String, required: true },
        },
      ],
      // validate: [
      //   (arr) => arr.length >= 1 && arr.length <= 3,
      //   "{PATH} should have 1-3 benefits",
      // ],
    },
    faq: {
      type: [
        {
          question: { type: String, required: true },
          questionHi: { type: String, required: true },
          answer: { type: String, required: true },
          answerHi: { type: String, required: true },
        },
      ],
      // validate: [
      //   (arr) => arr.length >= 1 && arr.length <= 5,
      //   "{PATH} should have 1-5 FAQs",
      // ],
    },
    images: {
      type: [String],
      validate: [(arr) => arr.length <= 5, "{PATH} exceeds 5"],
    },
    images_hi: {
      type: [String],
      validate: [(arr) => arr.length <= 5, "{PATH} exceeds 5"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pooja", poojaSchema);
