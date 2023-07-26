import { useEffect, useState } from "react";

const useFetch = (fetchUrl) => {
  const [fetchData, setFetchData] = useState(null);
  const [fetchError, setFetchError] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error deleting data");
        }
        return res.json();
      })
      .then((responseData) => {
        const temp = Object.entries(responseData);
        setFetchData(temp);
        setFetchLoading(false);
      })
      .catch((error) => {
        setFetchError(error.message);
        setFetchLoading(false);
      });
  }, [fetchUrl,fetchData]);

  return { fetchData, fetchLoading, fetchError };
};

export default useFetch;
