import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (request, setData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(request.url, {
        method: request.method ? request.method : "GET",
        headers: request.headers ? request.headers : {},
        body: request.body ? JSON.stringify(request.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[]);
  return { isLoading: isLoading, error: error, sendRequest: sendRequest };
};

export default useHttp;
