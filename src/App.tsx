import { useEffect, useState } from 'react'
import './App.css'
import OffcanvasExample from './components/navbar'
import Cardeg from './components/card'
import FooterC from './components/footer'

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
      <OffcanvasExample />
      <div className='d-flex flex-wrap justify-content-around flex-row container'>
        {
          product.length > 0 ?
            product.map((item, index) => (
              <div className=" p-2" >
                <Cardeg key={index + "product"} product={item} setCartDetails={setCartDetails} />
              </div>
            )) :
            (
              <div>
                <p>no products available</p>
              </div>
            )
        }
      </div>
      <footer> <FooterC /></footer>

    </>
  )
}

export default App;    
