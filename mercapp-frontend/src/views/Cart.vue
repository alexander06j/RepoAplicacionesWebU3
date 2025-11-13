<template>
  <div class="cart">
    <h1>Carrito de compras</h1>

    <div v-if="cart.length">
      <div v-for="item in cart" :key="item._id" class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>Precio unitario: ${{ item.price }}</p>

        <!-- Control de cantidad -->
        <label>Cantidad:</label>
        <input
          type="number"
          min="1"
          v-model.number="item.quantity"
          @change="updateQuantity(item._id, item.quantity)"
        />

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
import { useCart } from '@/composables/useCart';

const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();
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
input[type="number"] {
  width: 60px;
  margin-left: 0.5rem;
}
button {
  margin-top: 0.5rem;
}
</style>
