const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  description: {
    type: String,
    default: ''
  },
price: {
  type: Number,
  required: [true, 'El precio es obligatorio'],
  min: [0, 'El precio debe ser mayor o igual a 0']
},
imageUrl: {
  type: String,
  required: [true, 'La URL de imagen es obligatoria'],
  validate: {
    validator: v => /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v),
    message: props => `${props.value} no es una URL válida de imagen`
  }
},
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
