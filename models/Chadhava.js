const mongoose = require("mongoose");

const multilingualSchema = new mongoose.Schema({
  name: String,
  tag: String,
  short_desc: String,
  desc: String,
  types: String,
  cta_text: String,
  lang_type: String,
  short_name: String,
}, { _id: false });

const itemSchema = new mongoose.Schema({
  image_url: String,
}, { _id: false });

const chadhavaSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  platform: [String],

  mandir: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Temple",  
    required: true 
  },

  image: String,
  start: Date,
  items: [itemSchema],
  multilingual_data: [multilingualSchema],
}, { timestamps: true });

module.exports = mongoose.model("Chadhava", chadhavaSchema);
