import { useState, useEffect } from 'react';

function useHttpRequest(url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' }, body: null}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState({isError: false, message: ''});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const sendRequest = async () => {
            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`Something went wrong. Status code: ${response.status}`)
                }

                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            }
            catch (ex) {
                setError({isError: true, message: `Something went wrong. Response: ${ex.message}`});
                setIsLoading(false);
            }
        };

        sendRequest();
    },[url, options]);

    return {
        data,
        error,
        isLoading
    }
}

export default useHttpRequest