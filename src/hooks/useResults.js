import {useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessgae, setErrorMessage] = useState('');

    const searchApi = async (searchTerm, signal) => {
        try {
            const response = await yelp.get('/search', {
                signal: signal,
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            });
            setResults(response.data.businesses);
        }catch (error) {
            setErrorMessage('something went wrong');
        }
        
    };

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        searchApi('italian', signal)

        return function cleanup() {
            abortController.abort()
        }
    }, []);

    return [searchApi, results, errorMessgae];
};