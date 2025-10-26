const API_URL = "https://jsearch.p.rapidapi.com/search";
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export async function fetchAllJobs(
  query = "developer jobs in qatar",
  page = 1
) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  };

  const url = `${API_URL}?query=${encodeURIComponent(
    query
  )}&page=${page}&num_pages=1&country=qa&date_posted=all`;

  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  const data = await res.json();
  return data.data || [];
}
