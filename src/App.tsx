import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import EkartPage from './pages/ekartpage'

function App() {
  const [product, setProduct] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [cartDetails, setCartDetails] = useState<string[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [])

  useEffect(() => {
    console.log(product);

  }, [product])


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
  <Route path="/" element={<EkartPage products={product} setCartDetails={setCartDetails} />}/>
  </Routes></BrowserRouter>    
     </>
  )
}

export default App;    
