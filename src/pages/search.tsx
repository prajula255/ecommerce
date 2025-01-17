// import { FC, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// const SearchResults: FC = () => {
//     const location = useLocation();
//     // category based searching 
//     const category = new URLSearchParams(location.search).get('category');
//     const [, setProducts] = useState<any[]>([]);
//     const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         if (category) {
//             setLoading(true);
//             setError(null);

//             fetch('https://fakestoreapi.com/products')
//                 .then((res) => res.json())
//                 .then((json) => {
//                     setProducts(json);
//                     const filtered = json.filter((product: any) =>
//                         product.category.toLowerCase() === category.toLowerCase()
//                     );
//                     setFilteredProducts(filtered);
//                     setLoading(false);
//                 })
//                 .catch(() => {
//                     setError('Failed to fetch products. Please try again later.');
//                     setLoading(false);
//                 });
//         }
//     }, [category]);

//     return (
//         <div>
//             <h1>Search Results for Category "{category}"</h1>

//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}

//             {filteredProducts.length > 0 ? (
//                 <ul>
//                     {filteredProducts.map((product) => (
//                         <li key={product.id}>
//                             <h2>{product.title}</h2>
//                             <img
//                                 src={product.image}
//                                 alt={product.title}
//                                 style={{ width: '100px', height: 'auto' }}
//                             />
//                             <p>{product.description}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 !loading && <p>No products found in category "{category}".</p>
//             )}
//         </div>
//     );
// };

// export default SearchResults;


import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cardeg from '../components/card';
const SearchResults: FC = () => {
    const location = useLocation();
    // category based searching
    const category = new URLSearchParams(location.search).get('category');
    const [, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [cartDetails, setCartDetails] = useState<any[]>([]);
    const [, setFavorites] = useState<any[]>([]);

    useEffect(() => {
        if (category) {
            setLoading(true);
            setError(null);

            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setProducts(json);
                    const filtered = json.filter((product: any) =>
                        product.category.toLowerCase() === category.toLowerCase()
                    );
                    setFilteredProducts(filtered);
                    setLoading(false);
                })
                .catch(() => {
                    setError('Failed to fetch products. Please try again later.');
                    setLoading(false);
                });
        }
    }, [category]);

    const handleAddToFavorites = (product: any) => {
        setFavorites((prevFavorites) => [...prevFavorites, product]);
        alert(`${product.title} added to favorites!`);
    };

    const handleAddToCart = (product: any) => {
        setCartDetails((prevCart) => [...prevCart, product]);
        alert(`${product.title} added to cart!`);
    };

    return (
        <div>
            <h4>Search Results for Category "{category}"</h4>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {filteredProducts.length > 0 ? (
                <div className="d-flex">
                    {filteredProducts.map((product) => (
                        <div className="p-2" key={product.id}>
                            <Cardeg
                                product={product}
                                setCartDetails={handleAddToCart}
                                setFavorites={handleAddToFavorites}
                                cartDetails={cartDetails}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p>No products found in category "{category}".</p>
            )}
        </div>
    );
};

export default SearchResults;