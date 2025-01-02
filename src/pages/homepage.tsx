
import { FC } from 'react';
import FooterC from '../components/footer';
import Cardeg from '../components/card';
import NavBar from '../components/navbar';

interface EkartPageProps {
  products: string[],
  setCartDetails: (value: any) => void
  cartDetails:any[]
  id:number[]
  setId:(value:any)=>void
}

const EkartPage: FC<EkartPageProps> = ({ products, setCartDetails,cartDetails,id,setId }) => {

  return (
    <>
      <NavBar />
      <div className='d-flex flex-wrap justify-content-around flex-row container'>
        {
          products.length > 0 ?
            products.map((item: string, index: number) => (
              <div className=" p-2" >
                <Cardeg key={index + "product"} product={item} setCartDetails={setCartDetails} cartDetails={cartDetails} id={id} setId={setId}/>
              </div>
            )) :
            (
              <div>
                <p>no products available</p>
              </div>
            )
        }
      </div>
      <footer> < FooterC /></footer>


    </>
  );
};

export default EkartPage;


