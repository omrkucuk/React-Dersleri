import { useQuery } from "@tanstack/react-query";
import { mediaKeys, tmdbApi } from "../api/tmdb";

export function usePopularMovies(page = 1) {
  return useQuery({
    queryKey: mediaKeys.popularMovies(page),
    queryFn: () => tmdbApi.getPopularMovies(page),
    staleTime: 1000 * 60 * 10, // 10 dakika - popüler liste sık değişmez
  });
}

export function usePopularTv(page = 1) {
  return useQuery({
    queryKey: mediaKeys.popularTv(page),
    queryFn: () => tmdbApi.getPopularTv(page),
    staleTime: 1000 * 60 * 10,
  });
}

export function useMovieDetail(id) {
  return useQuery({
    queryKey: mediaKeys.movieDetail(id),
    queryFn: () => tmdbApi.getMovieDetail(id),
    enabled: !!id,
  });
}

export function useMovieCredits(id) {
  return useQuery({
    queryKey: mediaKeys.movieCredits(id),
    queryFn: () => tmdbApi.getMovieCredits(id),
    enabled: !!id,
  });
}

export function useTvDetail(id) {
  return useQuery({
    queryKey: mediaKeys.tvDetail(id),
    queryFn: () => tmdbApi.getTvDetail(id),
    enabled: !!id,
  });
}

export function useMovieGenres() {
  return useQuery({
    queryKey: mediaKeys.movieGenres(),
    queryFn: () => tmdbApi.getMovieGenres(),
    staleTime: Infinity, // türler hiç değişmez, bir kez çek yeter
  });
}

export function useSearch(query, page = 1) {
  return useQuery({
    queryKey: mediaKeys.search(query, page),
    queryFn: () => tmdbApi.searchMulti(query, page),
    enabled: query.length >= 2, // en az 2 karakter girilince ara
    staleTime: 1000 * 60 * 5,
  });
}
