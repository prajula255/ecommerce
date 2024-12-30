// import { useEffect, useState } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import EkartPage from './pages/ekartpage'
// import CartPage from './pages/cartpage'
// function App() {
//   const [product, setProduct] = useState([])
//   const [isMobile, setIsMobile] = useState(false)
//   const [cartDetails, setCartDetails] = useState<any>([])

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(json => setProduct(json))
//   }, [])

//   useEffect(() => {
//     console.log(product);

//   }, [product])


//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     console.log('Is Mobile:', isMobile);
//   }, [isMobile]);


//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<EkartPage products={product} setCartDetails={setCartDetails} />} />


//           <Route
//             path="/cart"
//             element={<CartPage cartDetails={cartDetails} />}
//           />
//         </Routes></BrowserRouter>
//     </>
//   )
// }

// export default App;












import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EkartPage from './pages/ekartpage';
import CartPage from './pages/cartpage';
import CartDetails from './pages/cartdet';
function App() {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [cartDetails, setCartDetails] = useState<any>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    console.log('Products:', products);
  }, [products]);

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

          {/* Cart page displaying all items added */}
          <Route path="/cart" element={<CartPage cartDetails={cartDetails} />} />

          {/* Product details page for a specific cart item */}
          <Route path="/cart-details" element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
