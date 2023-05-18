import { Link } from 'react-router-dom';

function Products() {
    return (
        <>
            <h1>Products</h1>
            <p>
                Go to <Link to="/">home</Link>
            </p>
        </>
    )
}

export default Products