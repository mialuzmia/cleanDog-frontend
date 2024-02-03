import axios from "axios";
import { useEffect, useState } from "react";


export const useGet = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios.get(url, options);

                setData(response.data);
                
                console.log(`GET request made successfully.\nStatus: ${response.status}`);

            }catch (error){
                setError(error);
                console.log('an error occured in the GET request: ' + error);
            }

            setLoading(false);
        };
    console.log(loading);
        fetchData();
    }, [url, options]);

    return { data, error, loading };
}