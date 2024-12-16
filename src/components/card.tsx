import Card from 'react-bootstrap/Card';
import { FC } from 'react';
import { Button } from 'react-bootstrap';

interface CardegProps {
  product: {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string
  }
}

const Cardeg: FC<CardegProps> = (prpos) => {
  const { image, title } = prpos.product

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} style={{ height: '200px', width: '100%' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          {/* <Card.Text>
            trendy
          </Card.Text> */}
          {/* <Card.Link href="#">Add to Cart</Card.Link>
          <Card.Link href="#">Add to favourite</Card.Link> */}
          <Button variant="primary" style={{ marginRight: '10px' }}>Add to cart </Button>
          <Button variant="primary">Add to favourite </Button>

        </Card.Body>
      </Card>

    </>
  );
};

export default Cardeg;