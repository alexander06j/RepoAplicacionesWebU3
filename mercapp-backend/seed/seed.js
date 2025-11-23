// seed/seed.js
require('dotenv').config();
const mongoose = require('mongoose');

const Category = require('../models/Category');
const Product = require('../models/Product');
const { categories, products } = require('./data');

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mercapp';

// Controla si se vacían colecciones antes de insertar (true/false)
const CLEAR_COLLECTIONS = process.env.CLEAR_COLLECTIONS === 'true';

async function connectDB() {
  await mongoose.connect(DB_URI);
  console.log('✅ Conectado a MongoDB');
}

async function seedCategories() {
  const count = await Category.countDocuments();
  if (CLEAR_COLLECTIONS) {
    await Category.deleteMany({});
    console.log('🧹 Categorías eliminadas');
  } else if (count > 0) {
    console.log(`ℹ️ Ya existen ${count} categorías, no se duplican`);
    return Category.find(); // devolver existentes
  }

  const created = await Category.insertMany(categories);
  console.log(`✅ Insertadas ${created.length} categorías`);
  return created;
}

async function seedProducts(categoryDocs) {
  const count = await Product.countDocuments();
  if (CLEAR_COLLECTIONS) {
    await Product.deleteMany({});
    console.log('🧹 Productos eliminados');
  } else if (count > 0) {
    console.log(`ℹ️ Ya existen ${count} productos, no se duplican`);
    return Product.find().populate('categoryId');
  }

  // Mapa categoryName -> categoryId
  const categoryMap = new Map(
    categoryDocs.map(c => [c.name, c._id])
  );

  // Transformar productos reemplazando categoryName -> categoryId
  const toInsert = products.map(p => ({
    name: p.name,
    description: p.description,
    price: p.price,
    imageUrl: p.imageUrl,
    stock: p.stock,
    categoryId: categoryMap.get(p.categoryName)
  }));

  // Validar que todas las categorías existan
  const missing = toInsert.filter(p => !p.categoryId);
  if (missing.length) {
    throw new Error(
      `Faltan categorías para ${missing.length} producto(s). Verifica categoryName en seed/data.js`
    );
  }

  const created = await Product.insertMany(toInsert, { ordered: true });
  console.log(`✅ Insertados ${created.length} productos`);
  return created;
}

async function run() {
  try {
    await connectDB();
    const catDocs = await seedCategories();
    await seedProducts(catDocs);
    console.log('🌱 Semilla completada con éxito');
  } catch (err) {
    console.error('❌ Error en semilla:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Conexión cerrada');
  }
}

run();
