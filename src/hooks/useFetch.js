import { useEffect, useState } from "react";

export default function useFetch(fetcher) {
  const [state, setState] = useState({ data: null, loading: true, error: "" });

  useEffect(() => {
    let active = true;

    fetcher()
      .then((data) => active && setState({ data, loading: false, error: "" }))
      .catch(
        (err) =>
          active && setState({ data: null, loading: false, error: err.message })
      );

    return () => {
      active = false;
    };
  }, [fetcher]);

  return state;
}