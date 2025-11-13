import { ref, watch, computed } from 'vue';

const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);

// Añadir producto
function addToCart(product) {
  const existing = cart.value.find(p => p._id === product._id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
}

// Eliminar producto
function removeFromCart(productId) {
  cart.value = cart.value.filter(p => p._id !== productId);
}

// Actualizar cantidad
function updateQuantity(productId, quantity) {
  const item = cart.value.find(p => p._id === productId);
  if (item) {
    item.quantity = Math.max(1, quantity); // mínimo 1
  }
}

// Vaciar carrito
function clearCart() {
  cart.value = [];
}

// Persistir en localStorage
watch(cart, (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
}, { deep: true });

// Total calculado
const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export function useCart() {
  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, total };
}
