const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // elimina espacios innecesarios
    minlength: 2
  }
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
