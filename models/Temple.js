// const mongoose = require("mongoose");

// const templeSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     bhagwan: {
//       type: String,
//       required: true,
//     },
//     templeDescription: {
//       type: String,
//       required: true,
//     },
//     longDescription: {
//       type: String,
//     },
//     images: {
//       type: [String],
//       validate: [(arr) => arr.length <= 5, "{PATH} exceeds the limit of 5"],
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Temple", templeSchema);
const mongoose = require("mongoose");

const multilingualSchema = new mongoose.Schema(
  {
    lang_type: {
      type: String,
      enum: ["ENGLISH", "HINDI"],
      required: true,
    },
    name: String,
    short_name: String,
    location: String,
    cta_text: String,
    tag: String,
  },
  { _id: false }
);

const creativeSchema = new mongoose.Schema(
  {
    image_md: String,
    video_url: String,
    types: String,
    lang_type: String,
  },
  { _id: false }
);

const benefitTagSchema = new mongoose.Schema(
  {
    desc: String,
    types: String,
    lang_type: String,
  },
  { _id: false }
);

const deitySchema = new mongoose.Schema(
  {
    name: String,
    types: String,
    lang_type: String,
  },
  { _id: false }
);

const templeSchema = new mongoose.Schema(
  {
    // slug: { type: String, unique: true },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    bhagwan: String,
    templeDescription: String,
    longDescription: String,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Temple", templeSchema);
