import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postKeys, postsApi } from "../api/posts";
import toast from "react-hot-toast";

// Her hook tek bir sorumluluğa sahip - component'ler sadece hook çağırır
// Get Posts
export function usePosts() {
  return useQuery({
    queryKey: postKeys.lists(),
    queryFn: postsApi.getAll,
  });
}

// Post Detay
export function usePost(id) {
  return useQuery({
    queryKey: postKeys.detail(id),
    queryFn: () => postsApi.getById(id),
    enabled: !!id, // id yoksa fetch yapma
  });
}

// User'a göre Post getirme
export function usePostsByUser(userId) {
  return useQuery({
    queryKey: postKeys.list({ userId }),
    queryFn: () => postsApi.getByUser(userId),
    enabled: !!userId,
  });
}

// Ekleme İşlemi
export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.lists() });
      toast.success("Gönderi oluşturuldu!");
    },
    onError: (err) => toast.error(err.message),
  });
}

// Silme İşlemi
export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postsApi.delete,
    onSuccess: () => toast.success("Gönderi silindi"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: postKeys.lists() }),
    onError: (err) => toast.error(err.message),
  });
}
