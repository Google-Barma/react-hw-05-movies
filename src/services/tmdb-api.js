import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8978731d3453660c119868bf0fe3e32f';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: 'en-EN' };

export async function fetchTrandingMovie(page = 1) {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?page=${page}`);
  return results;
}

export async function fetchMovie(query, page = 1) {
  const {
    data: { results },
  } = await axios.get(`/search/movie?query=${query}`);
  return results;
}

export async function fetchMovieDetails(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
}

export async function fetchMovieCredits(movieId) {
  const {
    data: { cast },
  } = await axios.get(`/movie/${movieId}/credits`);
  return cast;
}

export async function fetchMovieReviews(movieId) {
  const {
    data: { results },
  } = await axios.get(`/movie/${movieId}/reviews`);

  return results;
}
