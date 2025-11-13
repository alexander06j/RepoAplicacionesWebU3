<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style>
/* Estilos globales opcionales */
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
</style>

