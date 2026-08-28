import api from "../lib/axios";

// API  fonksiyonları - sadece axios çağrısı yapar, başka bir şey bilmez
export const postsApi = {
  getAll: () => api.get("/posts").then((r) => r.data),
  getById: (id) => api.get(`/posts/${id}`).then((r) => r.data),
  getByUser: (userId) => api.get("/posts", { params: { userId } }).then((r) => r.data),
  create: (data) => api.post("/posts", data).then((r) => r.data),
  update: (id, data) => api.put(`/posts/${id}`, data).then((r) => r.data),
  delete: (id) => api.delete(`/posts/${id}`),
};

export const postKeys = {
  all: ["posts"],
  lists: () => [...postKeys.all, "list"],
  list: (filters) => [...postKeys.lists(), filters],
  details: () => [...postKeys.all, "detail"],
  detail: (id) => [...postKeys.details(), id],
};

// Kullanım örnekleri:
// postKeys.all  -> ["posts"]
// postKeys.lists()  -> ["posts", "list"]
// postKeys.list({userId})  -> ["posts", "list", {userId}]
// postKeys.detail(5)  -> ["posts", "detail", 5]
