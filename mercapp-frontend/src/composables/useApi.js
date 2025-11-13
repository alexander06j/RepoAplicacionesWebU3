import { ref, onMounted } from 'vue';

export function useApi(url) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);
  let controller; // para cancelación

  async function fetchData(retry = true) {
    loading.value = true;
    error.value = null;
    controller = new AbortController();

    try {
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(res.statusText);
      data.value = await res.json();
    } catch (err) {
      if (retry) {
        console.warn('Reintento de petición:', url);
        return fetchData(false); // un reintento simple
      }
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  function cancel() {
    if (controller) controller.abort();
  }

  onMounted(() => {
    fetchData();
  });

  return { data, loading, error, fetchData, cancel };
}

