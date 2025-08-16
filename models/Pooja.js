// const mongoose = require("mongoose");

// const benefitSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//   },
//   { _id: false }
// );

// const poojaSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       equired: true,
//     },
//     subtitle: {
//       type: String,
//     },
//     temple: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: Date,
//       required: true,
//     },
//     benefits: {
//       type: [benefitSchema],
//       validate: [(arr) => arr.length <= 3, "{PATH} exceeds the limit of 3"],
//     },
//     aboutTemple: {
//       type: String,
//     },
//     images: {
//       type: [String],
//       validate: [(arr) => arr.length <= 5, "{PATH} exceeds the limit of 5"],
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Pooja", poojaSchema);

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
    slug: {
      type: String,
      unique: true,
    },
    temple: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Temple",
      required: true,
    },
    puja_special_tag_hindi: String,
    puja_special_tag_english: String,
    duration_in_minutes: Number,
    logo_image: String,
    ht_logo_image: String,
    start_time: Date,
    count: Number,
    hashtag: [String],
    redirection_url: String,
    service_brief: [serviceBriefSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pooja", poojaSchema);
