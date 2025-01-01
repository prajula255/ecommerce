
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EkartPage from './pages/homepage';
import CartPage from './pages/cartpage';
import CartDetails from './pages/cartdet';
import SearchResults from './pages/search';
function App() {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [cartDetails, setCartDetails] = useState<any[]>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    console.log('Products:', products);
  }, [products]);

  useEffect(()=>{
    console.log(cartDetails)
  },[cartDetails])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleAddToCart(){

  }
  useEffect(() => {
    console.log('Is Mobile:', isMobile);
  }, [isMobile]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<EkartPage products={products} setCartDetails={setCartDetails} />}
          />


          <Route path="/cart-details" element={<CartPage setCartDetails={setCartDetails} cartDetails={cartDetails}/>} />
          {/* <Route path="/cart-details" element={<CartDetails cartDetails={cartDetails}  />} /> */}
          <Route path="/search" element={<SearchResults />} />
          {/* Cart page displaying all items added */}
          {/* <Route path="/cart" element={<CartPage cartDetails={cartDetails} />} /> */}

          {/* Product details page for a specific cart item */}
          {/* <Route path="/cart-details" element={<CartDetails />} /> */}
        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;