import { useEffect, useState } from "react";

const API_URL = "/api/v3/reviews";

export function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { reviews, loading, error };
}
