const Private_Key = "8316cc01bc1559e7d37c4034ffac981b";

export const trending_url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${Private_Key}`;

export const playing_now_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Private_Key}&language=en-US&page=1`;

export const upcoming_url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Private_Key}&language=en-US&page=1`;

export const top_rated_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Private_Key}&language=en-US&page=1`;

export const genre_url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${Private_Key}&language=en-US`;

export const getDiscoverUrl = (page, genre) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${Private_Key}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`;
};

export const getSearchUrl = (page, query) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${Private_Key}&language=en-US&query=${query}&page=${page}&include_adult=false`;
};

export const getMovieDetails = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${Private_Key}&language=en-US`;
};

export const getMovieCrew = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Private_Key}&language=en-US`;
};

export const image_url = `https://image.tmdb.org/t/p/w500`;
