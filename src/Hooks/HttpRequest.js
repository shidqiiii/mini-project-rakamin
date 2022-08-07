import { useState, useEffect } from 'react'
import axios from 'axios'

// "use" in function name is standart react know a hook
export default function useAxiosGet(url) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        setRequest({
            ...request,
            loading: true
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    ...request,
                    data: response.data
                })
            })
            .catch(() => {
                setRequest({
                    ...request,
                    error: true
                })
            })
    }, [url]);

    return request
}