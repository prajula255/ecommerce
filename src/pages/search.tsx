import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults: FC = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query) {
            setLoading(true);
            setError(null);

            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setProducts(json);
                    const filtered = json.filter((product: any) =>
                        product.title.toLowerCase().includes(query.toLowerCase())
                    );
                    setFilteredProducts(filtered);
                    setLoading(false);
                })
                .catch(() => {
                    setError('Failed to fetch products. Please try again later.');
                    setLoading(false);
                });
        }
    }, [query]);

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





