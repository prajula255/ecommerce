

import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const CartDetails: FC = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product details available</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {/* <p>Price: ${product.price}</p> */}
    </div>
  );
};

export default CartDetails;
