import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

// invalidateQueries - cache'i "eski" işaretler, arka planda refetch başlatır
// En sık kullanılan yöntem: POST/PUT/DELETE sonrası listeli güncelle
queryClient.invalidateQueries({ queryKey: ["posts"] });

// exact: false ile prefix eşlemesi - "posts" ile başlayan tüm key'leri etkiler
// ["posts"], ["posts", 1], ["posts", {filter}] hepsi geçersiz olur
queryClient.invalidateQueries({ queryKey: ["posts"], exact: false });

// setQueryData - refetch yapmadan cache'i direkt günceller
queryClient.setQueryData(["posts", postId], updatedPost);

// getQueryData - cache'teki mevcut veriyi okur (refetch yapmaz)
const currentPosts = queryClient.getQueryData(["posts"]);

// removeQueries - cache'ten tamamen siler (logout sonrasında)
queryClient.removeQueries({ queryKey: ["user"] });
