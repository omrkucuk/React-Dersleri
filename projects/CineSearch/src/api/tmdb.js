import api from "../lib/axios";

export const tmdbApi = {
  // Film
  getPopularMovies: (page = 1) =>
    api.get("/movie/popular", { params: { page } }).then((r) => r.data),
  getMovieDetail: (id) => api.get(`/movie/${id}`).then((r) => r.data),
  getMovieCredits: (id) => api.get(`/movie/${id}/credits`).then((r) => r.data),
  getMovieGenres: () => api.get("/genre/movie/list").then((r) => r.data),

  // Dizi
  getPopularTv: (page = 1) => api.get("/tv/popular", { params: { page } }).then((r) => r.data),
  getTvDetail: (id) => api.get(`/tv/${id}`).then((r) => r.data),

  // Arama - Hem film hem dizi döner
  searchMulti: (query, page = 1) =>
    api.get("/search/multi", { params: { query, page } }).then((r) => r.data),
};

// Query Key Factory
export const mediaKeys = {
  all: ["media"],
  movies: () => [...mediaKeys.all, "movies"],
  popularMovies: (page) => [...mediaKeys.movies(), "popular", page],
  movieDetail: (id) => [...mediaKeys.movies(), "detail", id],
  movieCredits: (id) => [...mediaKeys.movies(), "credits", id],
  movieGenres: () => [...mediaKeys.movies(), "genres"],

  tv: () => [...mediaKeys.all, "tv"],
  popularTv: (page) => [...mediaKeys.tv(), "popular", page],
  tvDetail: (id) => [...mediaKeys.tv(), "detail", id],
  search: (query, page) => [...mediaKeys.all, "search", query, page],
};
