import { useState } from 'react';

function useHttpRequest() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState({ ok: true, message: '' });
    const [isLoading, setIsLoading] = useState(true);

    const sendRequest = async (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' }, body: null }) => {
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
            setStatus({ ok: false, message: `Something went wrong. Response: ${ex.message}` });
            setIsLoading(false);
        }
    };

    return {
        sendRequest,
        data,
        status,
        isLoading
    }
}

export default useHttpRequest