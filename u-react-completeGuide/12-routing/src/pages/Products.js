import { Link } from 'react-router-dom';

const PRODUCTS = [
    { id: 1, name: 'Product1' },
    { id: 2, name: 'Product2' },
    { id: 3, name: 'Product3' },
]

function Products() {
    return (
        <>
            <h1>Products</h1>
            <p>
                Go to <Link to="/">home</Link>
            </p>
            {PRODUCTS.map(item => (
                <Link to={`${item.id}`}><h3>{item.name}</h3></Link>
            ))}
        </>
    )
}

export default Products