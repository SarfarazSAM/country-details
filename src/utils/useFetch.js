import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: cancelTokenSource.token })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
        } else {
          setError(err.message);
        }
      })
      .finally(() => setIsPending(false));

    return () => {
      cancelTokenSource.cancel();
    };

    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Something went wrong!");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     // console.log(data);
    //     setData(data);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   })
    //   .finally(() => setIsPending(false));
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
