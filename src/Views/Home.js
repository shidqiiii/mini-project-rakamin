import React, { useState, useEffect } from 'react'
import HelloWorld from '../Components/HelloWorld'
import axios from 'axios'
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

function Home() {
    const url = 'https://62eea41cc1ef25f3da8cbcd5.mockapi.io/products/?page=1&limit=10'

    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    });

    let content = null

    useEffect(() => {
        setProducts({
            ...products,
            loading: true
        })
        axios.get(url)
            .then(response => {
                setProducts({
                    ...products,
                    data: response.data
                })
            })
            .catch(() => {
                setProducts({
                    ...products,
                    error: true
                })
            })
    }, [url]);

    if (products.error) {
        content = (<p>There was an error. Please refresh or try again later</p>)
    }

    if (products.loading) {
        content = (<Loader />)
    }

    if (products.data) {
        content = (
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard
                        product={product} />
                </div>
            )
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
            {content}

            {/* <HelloWorld name="Albert" /> */}
        </div>
    )
}

export default Home