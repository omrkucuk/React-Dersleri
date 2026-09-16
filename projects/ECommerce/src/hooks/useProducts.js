import { useQuery } from "@tanstack/react-query";
import { productKeys, productsApi } from "../api/products";

export function useProducts(category) {
  return useQuery({
    queryKey: productKeys.list(category),
    queryFn: () => (category ? productsApi.getByCategory(category) : productsApi.getAll()),
    select: (data) => data.products || data,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: productKeys.categories(),
    queryFn: productsApi.getCategories,
    select: (data) => data.map((c) => c.slug || c),
    staleTime: Infinity,
  });
}
