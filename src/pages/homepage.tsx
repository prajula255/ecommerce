
// import { FC, useEffect, useState } from 'react';
// import FooterC from '../components/footer';
// import Cardeg from '../components/card';
// import NavBar from '../components/navbar';
// import { useDispatch, UseSelector, useSelector } from 'react-redux';
// import { RootState } from '../redux/store/store';
// import { Button } from 'react-bootstrap';
// import { decrement, increment, updateIsMobile, updatePlace } from '../redux/slice/slice';


// interface EkartPageProps {
//   products: string[],
//   setCartDetails: (value: any) => void
//   cartDetails: any[]
//   id: number[]
//   setId: (value: any) => void
// }

// const EkartPage: FC<EkartPageProps> = ({ products, setCartDetails, cartDetails }) => {
//   const count = useSelector((state: RootState) => state.counter.value)
//   const dispatch = useDispatch()
//   const age = useSelector((state: RootState) => state.counter.age)
//   const place = useSelector((state: RootState) => state.counter.place)
//   const [places, setPlaces] = useState<string>("")



//   // const isMobile = useSelector((state: RootState) => state.counter.isMobile)
//   return (
//     <>
//       {/* <p onClick={() => dispatch(decrement())}>{age}</p>
//       <p >{place}</p>
//       <input type="text" onChange={(e) => setPlaces(e.target.value)} />
//       <button onClick={() => dispatch(updatePlace(places))}>change</button> */}
//       <NavBar />
//       {/* <Button onClick={() => dispatch(increment())}>{count}</Button> */}
//       <div className='d-flex flex-wrap justify-content-around flex-row container'>
//         {
//           products.length > 0 ?
//             products.map((item: string, index: number) => (
//               <div className=" p-2" >
//                 <Cardeg key={index + "product"} product={item} setCartDetails={setCartDetails} cartDetails={cartDetails} />
//               </div>
//             )) :
//             (
//               <div>
//                 <p>no products available</p>
//               </div>
//             )
//         }
//       </div>
//       <footer> < FooterC /></footer>


//     </>
//   );
// };

// export default EkartPage;




import { FC } from 'react';
import FooterC from '../components/footer';
import Cardeg from '../components/card';
import NavBar from '../components/navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
// import SearchResults from './search';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store/store';
// import { decrement, increment, updatePlace } from '../redux/slice/slice';

interface Product {
  id: number,
  name: string,
  price: number,
  description: string,
  title: string
}

interface EkartPageProps {
  products: Product[],
  setCartDetails: (value: any) => void,
  cartDetails: Product[],
  id: number[],
  setId: (value: any) => void,
}

const EkartPage: FC<EkartPageProps> = ({ products, setCartDetails, cartDetails }) => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  // const age = useSelector((state: RootState) => state.counter.age);
  // const place = useSelector((state: RootState) => state.counter.place);
  // const [places, setPlaces] = useState<string>("");

  // Sort products by price in ascending order
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  const { searchText, isSearch } = useSelector((state: RootState) => state.counter)


  const searchResults = (products: Product[], searchText: string) => {
    const matchingProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase()))
    return matchingProducts;
  }

  return (
    <>
      <NavBar />
      {
        !isSearch ?
          <div className="d-flex flex-wrap justify-content-around flex-row container">
            {
              sortedProducts.length > 0 ? (
                sortedProducts.map((item: Product, index: number) => (
                  <div className="p-2" key={item.id || index}>
                    <Cardeg
                      product={item}
                      setCartDetails={setCartDetails}
                      cartDetails={cartDetails}
                    />
                  </div>
                ))
              ) : (
                <div>
                  <p>No products available</p>
                </div>
              )
            }
          </div>
          :
          <div className="d-flex flex-wrap justify-content-around flex-row container">
            {
              searchResults(products, searchText).length > 0 ?
                searchResults(products, searchText).map((item: Product, index: number) => (
                  <div className="p-2" key={item.id || index}>
                    <Cardeg
                      product={item}
                      setCartDetails={setCartDetails}
                      cartDetails={cartDetails}
                    />
                  </div>))
                :
                <p>No Search Results Found.</p>
            }
          </div>
      }
      <footer>
        <FooterC />
      </footer>
    </>
  );
};

export default EkartPage;