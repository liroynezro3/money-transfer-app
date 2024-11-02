import { useState } from "react";

const useApi = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = (func) => {
        setIsLoading(true);

        func().then((data, error) => {
            if (data) {
                setSuccess(true)
                setData(data)

                if (data?.status >= 400) {
                    setError(data?.statusText);
                    setSuccess(false)
                    setData(null)
                }
            }

            if (error) {
                setSuccess(false)
                setError(error);
            }


        }).catch((err) =>  {
            setError(err)
            setData(null)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return {
        dispatch,
        data,
        isLoading,
        success,
        error
    }
}

export default useApi;