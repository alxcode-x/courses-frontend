import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>
                Go to <Link to="/products">the list of products</Link>
            </p>
        </>
    )
}

export default Home