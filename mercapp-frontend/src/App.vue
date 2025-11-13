<template>
  <div id="app">
    <Navbar />

    <Suspense>
      <template #default>
        <router-view />
      </template>

      <template #fallback>
        <div class="loading">
          <p>Cargando vista...</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style>
.loading {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #555;
}
</style>


