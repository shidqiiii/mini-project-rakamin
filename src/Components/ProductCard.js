import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`products/${props.product.id}`}>
                <div className="w-full h-64 bg-blue bg-cover" style={{ backgroundImage: `url('${props.product.images}')` }}>
                </div>
                <div className="p-3">
                    <div className="font-bold text-xl mb-3">
                        {props.product.name}
                    </div>
                    <div className="font-bold mb-3">
                        $ {props.product.price}
                    </div>
                    <div className="mb-3">
                        {props.product.description}
                    </div>
                    <div className="bg-blue-500 text-white p-2 flex justify-center w-full">
                        view
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard