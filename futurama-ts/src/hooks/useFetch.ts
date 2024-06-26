import { useEffect, useState } from "react";
import { FetchResultNotOK } from "../@types/futurama";

type Return<T> = {
  data: T | null;
  loading: boolean;
  error: string;
};

function useFetch<T>(url: string): Return<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (!url) return setError("no url provided!");
      setData(null);
      setError("");
      try {
        const response = await fetch(url);
        if (response.ok) {
          const result = (await response.json()) as T;
          setData(result);
        } else {
          const result = (await response.json()) as FetchResultNotOK;
          setError(result.error);
        }
        setLoading(false);
      } catch (e) {
        const { message } = e as Error;
        setError(message);
        setLoading(false);
      }
    }
    fetchData().catch((e) => console.log(e));
  }, [url]);
  return { data, error, loading };
}
export default useFetch;
