<template>
  <div class="product-form">
    <h1>{{ isEdit ? 'Editar producto' : 'Nuevo producto' }}</h1>

    <form @submit.prevent="handleSubmit">
      <!-- Nombre -->
      <label>Nombre:</label>
      <input v-model="form.name" type="text" required />
      <span v-if="errors.name">{{ errors.name }}</span>

      <!-- Precio -->
      <label>Precio:</label>
      <input v-model.number="form.price" type="number" min="0.01" step="0.01" required />
      <span v-if="errors.price">{{ errors.price }}</span>

      <!-- Categoría -->
      <label>Categoría:</label>
      <select v-model="form.category" required>
        <option disabled value="">Seleccione una categoría</option>
        <option v-for="cat in categories" :key="cat._id" :value="cat._id">
          {{ cat.name }}
        </option>
      </select>
      <span v-if="errors.category">{{ errors.category }}</span>

      <!-- Stock -->
      <label>Stock:</label>
      <input v-model.number="form.stock" type="number" min="0" required />
      <span v-if="errors.stock">{{ errors.stock }}</span>

      <!-- Imagen -->
      <label>URL de imagen:</label>
      <input v-model="form.imageUrl" type="url" required />
      <span v-if="errors.imageUrl">{{ errors.imageUrl }}</span>

      <!-- Botón -->
      <button type="submit">{{ isEdit ? 'Guardar cambios' : 'Crear producto' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';

const route = useRoute();
const router = useRouter();
const isEdit = route.path.includes('/edit');

// Estado del formulario
const form = reactive({
  name: '',
  price: 0,
  category: '',
  stock: 0,
  imageUrl: ''
});

// Errores
const errors = reactive({});

// Categorías desde API
const { data: categories } = useApi('http://localhost:4000/api/categories');

// Si es edición, cargar producto existente
onMounted(async () => {
  if (isEdit) {
    const res = await fetch(`http://localhost:4000/api/products/${route.params.id}`);
    const product = await res.json();
    Object.assign(form, product);
  }
});

// Validación simple
function validate() {
  errors.name = form.name ? '' : 'El nombre es obligatorio';
  errors.price = form.price > 0 ? '' : 'El precio debe ser mayor a 0';
  errors.category = form.category ? '' : 'Debe seleccionar una categoría';
  errors.stock = form.stock >= 0 ? '' : 'El stock debe ser 0 o mayor';
  errors.imageUrl = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(form.imageUrl)
    ? ''
    : 'Debe ser una URL válida de imagen';

  return !Object.values(errors).some(e => e);
}

// Enviar datos
async function handleSubmit() {
  if (!validate()) return;

  const method = isEdit ? 'PUT' : 'POST';
  const url = isEdit
    ? `http://localhost:4000/api/products/${route.params.id}`
    : 'http://localhost:4000/api/products';

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });

  router.push('/');
}
</script>

<style scoped>
.product-form {
  max-width: 400px;
  margin: auto;
}
label {
  display: block;
  margin-top: 0.5rem;
}
input, select {
  width: 100%;
  padding: 0.4rem;
  margin-bottom: 0.3rem;
}
span {
  color: red;
  font-size: 0.8rem;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
}
</style>
