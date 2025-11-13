<template>
  <div class="product-card">
    <img :src="product.imageUrl" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p><strong>${{ product.price }}</strong></p>

    <!-- Botón que emite evento personalizado -->
    <button @click="$emit('added-to-cart', product)">
      Añadir al carrito
    </button>

    <!-- Link al detalle -->
    <router-link :to="`/product/${product._id}`">
      Ver detalle
    </router-link>

    <!-- Link a edición -->
    <router-link :to="`/product/${product._id}/edit`" class="edit-link">
      Editar
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
  background: #fafafa;
}
.product-card img {
  max-width: 150px;
  display: block;
  margin-bottom: 0.5rem;
}
button {
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #45a049;
}
router-link {
  margin-left: 0.5rem;
  text-decoration: none;
  color: #007bff;
}
.edit-link {
  margin-left: 0.5rem;
  color: #ff9800;
}
.edit-link:hover {
  text-decoration: underline;
}
</style>
