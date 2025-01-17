
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EkartPage from './pages/homepage';
import CartPage from './pages/cartpage';
// import CartDetails from './pages/cartdet';
import SearchResults from './pages/search';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsMobile } from './redux/slice/slice';
import { RootState } from './redux/store/store';
function App() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  // const [isMobile, setIsMobile] = useState(false);


  const isMobile = useSelector((state: RootState) => state.counter.isMobile)


  const [cartDetails, setCartDetails] = useState<any[]>([]);
  const [id, setId] = useState<number[]>([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    console.log('Products:', products);
  }, [products]);

  useEffect(() => {
    console.log(cartDetails)
  }, [cartDetails])

  useEffect(() => {
    const handleResize = () => {
      if (document.documentElement.clientWidth <= 600) {
        dispatch(updateIsMobile(true))
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    console.log(' Is Mobile: ', isMobile);
  }, [isMobile]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<EkartPage products={products} setCartDetails={setCartDetails} cartDetails={cartDetails} id={id} setId={setId} />}
          />

          <Route
            path="/cart-details"
            element={<CartPage cartDetails={cartDetails} setCartDetails={function (cart: any[]): void {
              throw new Error('Function not implemented.');
            }} />}
          />
          {/* <Route path="/cart-details" element={<CartPage cartDetails={setCartDetails} cartDetails={cartDetails} />} /> */}
          <Route path="/search" element={<SearchResults />} />

        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;