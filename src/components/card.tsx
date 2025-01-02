import Card from 'react-bootstrap/Card';
import { FC, useEffect } from 'react';
import { Button } from 'react-bootstrap';


interface CardegProps {
  product: any;
  setCartDetails?: (value: any) => void;
  setFavorites?: (product: any) => void;
  cartDetails?: any[]
  id: number[]
  setId: (value: number) => void
}

const truncateTitle = (title: string, maxLength: number): string => {
  return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
};

const Cardeg: FC<CardegProps> = ({ product, setCartDetails, setFavorites,cartDetails,id,setId}) => {
   

  useEffect(() => {

    // if (cartDetails?.length > 0) {
    //   if (product.id !== undefined && id?.includes(product.id)) {
    //     setShowButton(false)
    //   }
    // }
    console.log("qwe"+id)
  }, [id, cartDetails])

  const handleAddToCart = () => {
    if (id !== undefined && setCartDetails) {
      setCartDetails((prev: any) => [...prev, product]);
      setId(product.id)
    }
  };

  const handleAddToFavorites = () => {
    if (setFavorites) {
      setFavorites(product);
    }
    alert(`${product.title} added to favorites!`);
  };
  useEffect(() => {
    console.log("product::",product)
  }, [product])

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
        {
          setCartDetails && 
          <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
          <Button variant="primary" onClick={handleAddToFavorites}>
            Add to favorite
          </Button>
        </div>}
      </Card.Body>
    </Card>
  );
};

export default Cardeg;





