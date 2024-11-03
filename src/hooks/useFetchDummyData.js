import { useEffect, useState } from "react";

const useFetchDummyData = (dummyData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      setTimeout(() => {
        try {
          setData(dummyData);
        } catch (err) {
          setError("Failed to fetch data");
        } finally {
          setLoading(false);
        }
      }, 1000);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchDummyData;
