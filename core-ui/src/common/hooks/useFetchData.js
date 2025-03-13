import { useCallback, useEffect, useRef, useState } from "react";
import useIsMounted from "./useIsMounted";

const useFetchData = (
    fetchDataFn = () => { },
    args = [],
    initialValue = [],
    setInitialValueOnLoad = () => { },
    setNullOnError = true,
    setInitialValueOnNull = false,
    skipApiCall = false
) => {
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useIsMounted();

    const counter = useRef(0);
    const setCorrectedData = useCallback((d) => {
        setInitialValueOnNull ? setData(d || initialValue) : setData(d);
        setInitialValueOnNull ? setInitialValueOnLoad(d || initialValue) : setInitialValueOnLoad(d);
    }, []);
    const setLoading = useCallback((d) => isMounted() && setIsLoading(d), []);

    useEffect(() => {
        if (skipApiCall) {
            setIsLoading(false);
        }

        if (args instanceof Array && !skipApiCall) {
            (async () => fetchDataFn(...args))()
                .then((result) => result?.data && setCorrectedData(result.data))
                .catch((err) => {
                    setNullOnError && setCorrectedData(null);
                    setError(err || true);
                })
                .then(() => setIsLoading(false));
        } else {
            if (!skipApiCall)
                throw new TypeError("useFetchData: Param args must be of type Array");
        }
    }, [...args]);

    return { data, setData, isLoading, error, setLoading };
};

export default useFetchData;
