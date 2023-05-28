import React from 'react'
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
    const params = useParams();

    return (
        <div>
            <h1>Product Details</h1>
            <p>{params.id}</p>
            <Link to=".." relative="path">Back</Link>
        </div>
    )
}

export default ProductDetails