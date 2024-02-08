const mongoose = require("mongoose");

const conceptSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  codeSnippet: {
    type: String,
    required: false
  }
});

const Concept = mongoose.model("Concept", conceptSchema);

module.exports = Concept;
