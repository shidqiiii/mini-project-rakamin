import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import useAxiosGet from '../Hooks/HttpRequest'

function Product() {
    const { id } = useParams()
    const url = `https://62eea41cc1ef25f3da8cbcd5.mockapi.io/products/${id}`

    let product = useAxiosGet(url)

    let content = null

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