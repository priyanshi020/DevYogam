const mongoose = require("mongoose");

const multilingualSchema = new mongoose.Schema(
  {
    name: String,
    name_hi: String,

    tag: String,
    tag_hi: String,

    short_desc: String,
    short_desc_hi: String,

    desc: String,
    desc_hi: String,

    types: String,
    types_hi: String,

    cta_text: String,
    cta_text_hi: String,

    lang_type: String,

    short_name: String,
    short_name_hi: String,

    chadhava: Number,
  },
  { _id: false }
);

const itemSchema = new mongoose.Schema(
  {
    image_url: String,
    image_url_hi: String,
  },
  { _id: false }
);

const chadhavaSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true },
    slug_hi: String,

    platform: [String],
    platform_hi: [String],

    mandir: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Temple",
      required: true,
    },

    image: String,
    image_hi: String,

    start: Date,

    items: [itemSchema],
    multilingual_data: [multilingualSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chadhava", chadhavaSchema);
