
import Card from 'react-bootstrap/Card';
import { FC, useEffect } from 'react';
import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

interface CardegProps {
  product: any;
  setCartDetails?: (value: any) => void; // Callback to update cart
  setFavorites?: (product: any) => void; // Callback to update favorites
}

const truncateTitle = (title: string, maxLength: number): string => {
  return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
};

const Cardeg: FC<CardegProps> = ({ product, setCartDetails, setFavorites }) => {
  
  // const navigate = useNavigate();

  // Function to add product to cart
  const handleAddToCart = () => {
    if (setCartDetails) {
      setCartDetails((prev:any) => [...prev, product]); // Correctly spread the previous state
    }
    // navigate('/cart-details'); // Navigate to the cart details page
  };

  // Function to add product to favorites
  const handleAddToFavorites = () => {
    if (setFavorites) {
      setFavorites(product);
    }
    alert(`${product.title} added to favorites!`);
  };
  useEffect(()=>{
    console.log(product)
  },[product])

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: '200px', width: '100%', padding: '10px' }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '16px' }}>
          {truncateTitle(product.title, 20)}
        </Card.Title>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
          <Button variant="primary" onClick={handleAddToFavorites}>
            Add to favorite
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cardeg;
