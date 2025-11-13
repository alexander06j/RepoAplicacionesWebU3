import { useApi } from './useApi';

export function useProducts() {
  const { data, loading, error, fetchData, cancel } = useApi('http://localhost:4000/api/products');

  return {
    products: data,
    loading,
    error,
    refresh: fetchData,
    cancel
  };
}
