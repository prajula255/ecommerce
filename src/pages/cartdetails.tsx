
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
interface CartDetailsProps{
cartDetails:any
}
const CartDetails: FC<CartDetailsProps> = ({cartDetails}) => {
  const location = useLocation();
  const navigate = useNavigate();
 

  if (!cartDetails) {
    return <div>No product details available</div>;
  }

  const handleAddToCart = () => {
    
    navigate('/cart', { state: { cartDetails } }); 
  };
console.log(cartDetails)
  return (
    <div>
      {/* {
        <div>
           <h1>Product Details</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '200px', height: '200px' }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      } */}
      
    </div>
  );
};

export default CartDetails;
