<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/cart" class="nav-link">Carrito</router-link>
    <router-link to="/about" class="nav-link">Acerca de</router-link>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  background: #333;
  padding: 1rem;
}
.nav-link {
  color: white;
  text-decoration: none;
}
.nav-link:hover {
  text-decoration: underline;
}
</style>
