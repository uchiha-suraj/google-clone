import { useEffect, useState } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "302f31db5a9c61114";

// custom hook
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(responce => responce.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    }, [term])

    return { data };
};

export default useGoogleSearch
