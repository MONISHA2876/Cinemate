const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3", // Changed from account endpoint
  Headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_READ_ACCESS_TOKEN}`,
  },
};

// Fetch popular movies (for home screen)
export const fetchPopularMovies = async () => {
  const url = `${TMDB_CONFIG.BASE_URL}/movie/popular?language=en-US&page=1`;

  const options = {
    method: "GET",
    headers: TMDB_CONFIG.Headers,
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("fetchPopularMovies error:", err);
    throw err;
  }
};

// Search movies (for search functionality)
export const searchMovies = async ({ query }: { query: string }) => {
  const url = `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`;

  const options = {
    method: "GET",
    headers: TMDB_CONFIG.Headers,
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("searchMovies error:", err);
    throw err;
  }
};

// Fetch account rated movies (keep your original for user's rated movies)
export const fetchAccountRatedMovies = async () => {
  const url = `${TMDB_CONFIG.BASE_URL}/account/22595130/rated/movies?language=en-US&page=1&sort_by=created_at.asc`;

  const options = {
    method: "GET",
    headers: TMDB_CONFIG.Headers,
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("fetchAccountRatedMovies error:", err);
    throw err;
  }
};
