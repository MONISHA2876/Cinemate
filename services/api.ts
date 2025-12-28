const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3/account/22595130",
  Headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_READ_ACCESS_TOKEN}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const url = query
    ? `${TMDB_CONFIG.BASE_URL}${query}`
    : `${TMDB_CONFIG.BASE_URL}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`;

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
    console.error("fetchMovies error:", err);
    throw err; // Re-throw so caller can handle
  }
};
