const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    concepts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Concept'
    }]
  }, { collection: 'jsconcepts' });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

