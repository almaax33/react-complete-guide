import { useState } from "react";

const useHttp = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const sendRequest = async (requestArgs, processDatas) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(requestArgs.url, {
        method: requestArgs.method ? requestArgs.method : "GET",
        headers: requestArgs.headers ? requestArgs.headers : {},
        body: requestArgs.body ? JSON.stringify(requestArgs.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      processDatas(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
    setLoading(false);
  };
  return { error, loading, sendRequest };
};
export default useHttp;
