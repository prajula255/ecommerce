import { FC } from 'react';
import Cardeg from '../components/card';
interface CartPageProps {
  cartDetails: any[];
}

const CartPage: FC<CartPageProps> = ({ cartDetails }) => {

  const totalPrice = cartDetails.reduce((acc, item) => acc + item.price, 0)
  const deliveryCharge = totalPrice > 0 ? 10 : 0
  const total = totalPrice + deliveryCharge

  // order handling
  const handleOrder = () => {
    if (cartDetails.length > 0) {
      console.log('Order placed for:', cartDetails);
      alert('Order placed successfully!');

    } else {
      alert('No items in the cart to place an order.');
    }
  };


  return (
    <div>
      <h1>Cart Details</h1>
      {cartDetails.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (

        <div className="d-flex flex-wrap justify-content-around flex-column container">
          <div>
            <h4>Price Details</h4>
            <div><p>Price:({cartDetails.length}items):${totalPrice.toFixed(2)}</p>
              <p>Delivery charges:${deliveryCharge}</p>
              <p>Total Amount:${total.toFixed(2)}</p></div>
          </div>


          {cartDetails.map((item, index) => (
            <div className="p-2" key={index}>
              <Cardeg product={item} /> {/* Disable buttons */}
            </div>
          ))}
          <div><button className='btn btn-success mt-2' onClick={handleOrder}>Order</button></div>
        </div>
      )}
    </div>
  );
};

export default CartPage;





