import { useEffect, useState } from 'react';

interface Response {
    data?: any,
    isLoading: boolean,
    hasError?: any,
}

const initialValue: Response = {
    data: null,
    isLoading: true,
    hasError: null,
}

export const useFetch = (url: string) => {
    const [state, setState] = useState(initialValue);

    const getFetch = async () => {
        setState({
            ...state, 
            isLoading: true,
        });

        try {
            const resp = await fetch(url);
            const data = await resp.json();

            setState({
                data,
                isLoading: false,
                hasError: null,
            });

        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: error,
            });
        }
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
