<template>
  <div class="home">
    <h1>Catálogo de productos</h1>

    <!-- Botón para crear nuevo producto -->
    <router-link to="/product/new">
      <button class="btn-new">➕ Nuevo producto</button>
    </router-link>

    <!-- Buscador -->
    <input
      v-model="search"
      type="text"
      placeholder="Buscar por nombre o descripción..."
    />

    <!-- Filtro por categoría -->
    <select v-model="selectedCategory">
      <option value="">Todas las categorías</option>
      <option
        v-for="cat in categories"
        :key="cat._id"
        :value="cat._id"
      >
        {{ cat.name }}
      </option>
    </select>

    <!-- Estado de carga / error -->
    <div v-if="loading">Cargando productos...</div>
    <div v-if="error">Error: {{ error }}</div>

    <!-- Lista filtrada con ProductCard -->
    <div v-if="visibleProducts.length">
      <ProductCard
        v-for="product in visibleProducts"
        :key="product._id"
        :product="product"
        @added-to-cart="handleAddToCart"
      />
    </div>

    <div v-else>
      <p>No se encontraron productos.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useApi } from '@/composables/useApi'; // para categorías
import { useCart } from '@/composables/useCart';
import ProductCard from '@/components/ProductCard.vue';
import { useProducts } from '@/composables/useProducts';

// Estados
const search = ref('');
const selectedCategory = ref('');
const { addToCart } = useCart();

// Consumir productos y categorías
const { products, loading, error } = useProducts();
const { data: categories } = useApi('http://localhost:4000/api/categories');

// Propiedad computada para lista visible
const visibleProducts = computed(() => {
  if (!products.value) return [];

  return products.value.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.value.toLowerCase()) ||
      p.description.toLowerCase().includes(search.value.toLowerCase());

    const matchesCategory =
      !selectedCategory.value || p.categoryId._id === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

// Manejo del evento personalizado
function handleAddToCart(product) {
  addToCart(product);
  console.log('Añadido al carrito:', product.name);
}
</script>

<style scoped>
.home {
  padding: 1rem;
}
input, select {
  margin: 0.5rem 0;
  padding: 0.5rem;
}
.btn-new {
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-new:hover {
  background: #45a049;
}
</style>


