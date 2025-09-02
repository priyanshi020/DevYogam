const mongoose = require("mongoose");

const multilingualSchema = new mongoose.Schema(
  {
    lang_type: {
      type: String,
      enum: ["ENGLISH", "HINDI"],
      required: true,
    },
    name: String,
    name_hi: String,

    short_name: String,
    short_name_hi: String,

    location: String,
    location_hi: String,

    cta_text: String,
    cta_text_hi: String,

    tag: String,
    tag_hi: String,
  },
  { _id: false }
);

const creativeSchema = new mongoose.Schema(
  {
    image_md: String,
    image_md_hi: String,

    video_url: String,
    video_url_hi: String,

    types: String,
    types_hi: String,

    lang_type: String,
  },
  { _id: false }
);

const benefitTagSchema = new mongoose.Schema(
  {
    desc: String,
    desc_hi: String,

    types: String,
    types_hi: String,

    lang_type: String,
  },
  { _id: false }
);

const deitySchema = new mongoose.Schema(
  {
    name: String,
    name_hi: String,

    types: String,
    types_hi: String,

    lang_type: String,
  },
  { _id: false }
);

const templeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    title_hi: String,

    location: {
      type: String,
      required: true,
    },
    location_hi: String,

    bhagwan: String,
    bhagwan_hi: String,

    templeDescription: String,
    templeDescription_hi: String,

    longDescription: String,
    longDescription_hi: String,

    is_active: {
      type: Boolean,
      default: true,
    },

    sequence_number: Number,

    benefit_tags: [benefitTagSchema],
    deity: [deitySchema],
    creatives: [creativeSchema],
    multilingual_data: [multilingualSchema],

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

module.exports = mongoose.model("Temple", templeSchema);
