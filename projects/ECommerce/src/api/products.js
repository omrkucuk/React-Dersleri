import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 8000,
});

export const productsApi = {
  getAll: (limit = 30) => api.get("/products", { params: { limit } }).then((r) => r.data),
  getById: (id) => api.get(`/products/${id}`).then((r) => r.data),
  getCategories: () => api.get("/products/categories").then((r) => r.data),
  getByCategory: (cat) => api.get(`/products/category/${cat}`).then((r) => r.data),
};

export const productKeys = {
  all: ["products"],
  lists: () => [...productKeys.all, "list"],
  list: (cat) => [...productKeys.lists(), cat],
  details: () => [...productKeys.all, "detail"],
  detail: (id) => [...productKeys.details(), id],
  categories: () => [...productKeys.all, "categories"],
};
