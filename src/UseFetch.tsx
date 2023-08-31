import { useEffect, useState } from "react";

export const UseFetch = (url: RequestInfo | URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    async function fetchGetProducts() {
      try {
        const response = await fetch(url);
        const vendasData = await response.json();
        setData(vendasData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error);
        console.error("Ocorreu um erro:", error);
      }
    }

    fetchGetProducts();
    setLoading(false);
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
