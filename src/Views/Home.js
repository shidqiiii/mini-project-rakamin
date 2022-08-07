import React from 'react'
// import HelloWorld from '../Components/HelloWorld'
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequest';

function Home() {
    const url = 'https://62eea41cc1ef25f3da8cbcd5.mockapi.io/products/?page=1&limit=10'

    let products = useAxiosGet(url)

    let content = null

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