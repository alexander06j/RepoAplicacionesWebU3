<template>
  <div class="cart">
    <h1>Carrito de compras</h1>

    <div v-if="cart.length">
      <div v-for="item in cart" :key="item._id" class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>Cantidad: {{ item.quantity }}</p>
        <p>Precio unitario: ${{ item.price }}</p>
        <p>Total: ${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button @click="removeFromCart(item._id)">Eliminar</button>
      </div>

      <hr />
      <p><strong>Total general: ${{ total }}</strong></p>
      <button @click="clearCart">Vaciar carrito</button>
    </div>
    <div v-else>
      <p>Tu carrito está vacío.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCart } from '@/composables/useCart';

const { cart, removeFromCart, clearCart } = useCart();

const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
);
</script>

<style scoped>
.cart {
  padding: 1rem;
}
.cart-item {
  border: 1px solid #ddd;
  padding: 0.5rem;
  margin: 0.5rem 0;
}
button {
  margin-top: 0.5rem;
}
</style>

