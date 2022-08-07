import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

function Product() {
    const { id } = useParams()
    const url = `https://62eea41cc1ef25f3da8cbcd5.mockapi.io/products/${id}`

    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    });

    let content = null

    useEffect(() => {
        setProduct({
            ...product,
            loading: true
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    ...product,
                    data: response.data
                })
            })
            .catch(() => {
                setProduct({
                    ...product,
                    error: true
                })
            })
    }, [url]);

    if (product.error) {
        content = (<p>There was an error. Please refresh or try again later</p>)
    }

    if (product.loading) {
        content = (<Loader />)
    }

    if (product.data) {
        content = (
            <div>
                <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>

                <div>
                    <img src={product.data.images} alt={product.data.images} />
                </div>

                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>

                <div>{product.data.description}</div>
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product