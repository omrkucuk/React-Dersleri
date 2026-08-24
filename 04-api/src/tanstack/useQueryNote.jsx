import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

// useQuery - GET istekleri için kullanılır. Otomatik olarak loading, error, success state'lerini yönetir, cache'e alır.

// const {
//   data, // başarılı yanıt verisi
//   isLoading, // ilk yüklemede true (henüz cache yok)
//   isError, // hata oluştuysa true
//   error, // hata objesi
//   isFetching, // arka planda refetch yapılıyorsa true (cache varken)
//   refetch, // manuel olarak yeniden fetch tetikler
// } = useQuery({
//   queryKey: ["users"], // cache anahtarı
//   queryFn: () => api.get("/users").then((r) => r.data), // veri çeken fonksiyon
// });

// queryKey neden önemli?
// queryKey, verinin cache'deki kimliğidir. Aynı key'e sahip tüm useQuery'ler aynı cache'i paylaşır - yani component kaç kez render olursa olsun, ağ isteği sadece bir kez yapılır.

// function ComponentA() {
//     const {data} = useQuery({queryKey: ["users"], queryFn: ...})
// }

// function ComponentB() {
//     const {data} = useQuery({queryKey: ["users"], queryFn: ...})  // cache'den gelir
// }

// Dinamik değerler key dizisine eklenir. Key değişince query otomatik yeniden çalışır.
// function UserDetail({ userId }) {
//   const { data: user, isLoading } = useQuery({
//     queryKey: ["users", userId], // userId değişince refetch
//     queryFn: () => api.get(`/users/${userId}`).then((r) => r.data),
//     enabled: !!userId, // userId falsy ise fetch yapma - undefined, null gibi değerler
//   });
// }
