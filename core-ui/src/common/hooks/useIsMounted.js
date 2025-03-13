import { useEffect, useRef } from "react";

const useIsMounted = () => {
  const compIsMounted = useRef(true);

  useEffect(
    () => () => {
      compIsMounted.current = false;
    },
    []
  );

  return () => compIsMounted.current;
};

export default useIsMounted;
