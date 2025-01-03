// import { FC } from 'react';
// interface CartPageProps {
//   cartDetails: any[];
//   setCartDetails: (product:any ) => void
// }

// const CartPage: FC<CartPageProps> = ({ cartDetails }) => {

//   console.log(cartDetails)

//   return (
//     <div>
//       <h1>Cart Details</h1>
//       {cartDetails.length === 0 ? (
//         <p>No items in the cart.</p>
//       ) : (
//         <div className="cart-items">

//           { cartDetails.map((item, index) => (
//             <div>
//             <h1></h1>
//             <div key={index} className="cart-item">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: '90px', height: 'auto' }}
//               />
//               <div>
//                 <h2>{item.title}</h2>
//                 <p>Description: ${item.description}</p>
//                 {/* <button onClick={() => handleRemoveFromCart(index)}>Remove </button> */}
//               </div>
//             </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     // <>
//     //   <NavBar />
//     //   <div className='d-flex flex-wrap justify-content-around flex-row container'>
//     //     {
//     //       cartDetails.length > 0 ?
//     //         cartDetails.map((item: any, index: number) => (
//     //           <div className=" p-2" >
//     //             <Cardeg key={index + "car"} product={item} setCartDetails={setCartDetails} />
//     //           </div>
//     //         )) :
//     //         (
//     //           <div>
//     //             <p>no products available</p>
//     //           </div>
//     //         )
//     //     }
//     //   </div>
//     //   <footer> < FooterC /></footer>
//     // </>
//   );
// };

// export default CartPage;




import { FC } from 'react';
import Cardeg from '../components/card';
interface CartPageProps {
  cartDetails: any[];
}

const CartPage: FC<CartPageProps> = ({ cartDetails }) => {
  return (
    <div>
      <h1>Cart Details</h1>
      {cartDetails.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-around flex-row container">
          {cartDetails.map((item, index) => (
            <div className="p-2" key={index}>
              <Cardeg product={item}  /> {/* Disable buttons */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
