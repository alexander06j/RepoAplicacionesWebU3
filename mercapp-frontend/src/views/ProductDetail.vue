<template>
  <div v-if="loading">Cargando producto...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.imageUrl" alt="imagen" />
    <p>{{ product.description }}</p>
    <p><strong>Precio: ${{ product.price }}</strong></p>
    <p>Stock disponible: {{ product.stock }}</p>
    <p>Categoría: {{ product.categoryId?.name }}</p>

    <button @click="addToCart">Añadir al carrito</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref(null);
const loading = ref(true);
const error = ref(null);

async function fetchProduct() {
  try {
    const res = await fetch(`http://localhost:4000/api/products/${route.params.id}`);
    if (!res.ok) throw new Error(res.statusText);
    product.value = await res.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

function addToCart() {
  console.log('Producto añadido al carrito desde detalle:', product.value);
  // Aquí luego conectaremos con el estado global o localStorage
}

onMounted(fetchProduct);
</script>
