// import { FC } from "react";

// interface CartPageProps {
//   cartDetails: {
//     title: string,
//     image: string
//   }[];
// }

// const CartPage: FC<CartPageProps> = ({ cartDetails }) => {
//   return (
//     <>
//       <div>
//         <h1>Cart Details</h1>
//         {cartDetails.length === 0 ? (
//           <p>No items in the cart.</p>
//         ) : (
//           <div className="cart-items">
//             {cartDetails.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <h2>{item.title}</h2>
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{ width: '100px', height: 'auto' }}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//     </>
//   );
// };

// export default CartPage;



import { FC, useEffect, useState } from 'react';

interface CartPageProps { }

const CartPage: FC<CartPageProps> = () => {
  const [cartDetails, setCartDetails] = useState<
    { title: string; image: string; description: string }[]
  >([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartDetails(storedCartItems);
  }, []);

  const handleRemoveFromCart = (index: number) => {
    const updatedCart = [...cartDetails];
    updatedCart.splice(index, 1);
    setCartDetails(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Cart Details</h1>
      {cartDetails.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="cart-items">
          {cartDetails.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100px', height: 'auto' }}
              />
              <div>
                <h2>{item.title}</h2>
                <p>Description: ${item.description}</p>
                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
