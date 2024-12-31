import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults: FC = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query'); // Get search query from URL
    const [products, setProducts] = useState<any[]>([]); // State for storing products
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]); // State for filtered products
    const [loading, setLoading] = useState<boolean>(false); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    useEffect(() => {
        if (query) {
            setLoading(true);
            setError(null); // Reset errors

            // Fetch products from the API
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setProducts(json); // Set all products
                    // Filter products based on the query
                    const filtered = json.filter((product: any) =>
                        product.title.toLowerCase().includes(query.toLowerCase())
                    );
                    setFilteredProducts(filtered); // Set filtered products
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch((err) => {
                    setError('Failed to fetch products. Please try again later.');
                    setLoading(false);
                });
        }
    }, [query]); // Dependency on query so it triggers when the query changes

    return (
        <div>
            <h1>Search Results for "{query}"</h1>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {filteredProducts.length > 0 ? (
                <ul>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100px', height: 'auto' }}
                            />
                            <p>{product.description}</p>
                            {/* Add other product details as needed */}
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p>No products found matching "{query}".</p>
            )}
        </div>
    );
};

export default SearchResults;
