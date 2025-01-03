import Card from 'react-bootstrap/Card';
import { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


interface CardegProps {
  product: any;
  setCartDetails?: (value: any) => void;
  setFavorites?: (product: any) => void;
  cartDetails?: any[]

}
const truncateTitle = (title: string, maxLength: number): string => {
  return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
};

const Cardeg: FC<CardegProps> = ({ product, setCartDetails, setFavorites, cartDetails }) => {
  const [isAddedToCart, setIsAddedToCart] = useState<Boolean>(false)

  useEffect(() => {

    if (Array.isArray(cartDetails)) {
      // if (product.id !== undefined && id?.includes(product.id)) {
      //   setShowButton(false)
      // }
      cartDetails.map((item) => {
        if (item.id === product.id) {
          // alert(product.title)
        }
      })
    }
    console.log("qwe")
  }, [cartDetails])

  const handleAddToCart = () => {
    if (setCartDetails) {
      setCartDetails((prev: any) => [...prev, product]);

    }
  };

  useEffect(() => {
    if (cartDetails?.includes(product)) {
      setIsAddedToCart(true)
    }
  }, [cartDetails])

  const handleAddToFavorites = () => {
    if (setFavorites) {
      setFavorites(product);
    }
    alert(`${product.title} added to favorites!`);
  };
  useEffect(() => {
    console.log("product::", product)
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
        <div className='d-flex justify-content-center gap-2'>
          {
            setCartDetails && isAddedToCart ?
              <Button className='btn-warning'>Added to cart</Button>



              :
              setCartDetails &&
              <Button variant="primary" onClick={handleAddToCart}>
                Add to cart
              </Button>

          }

          <Button variant="primary" onClick={handleAddToFavorites}>
            Add to favorite
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}></div>
      </Card.Body>
    </Card>
  );
};

export default Cardeg;


