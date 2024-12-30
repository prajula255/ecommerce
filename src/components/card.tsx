// import Card from 'react-bootstrap/Card';
// import { FC } from 'react';
// import { Button } from 'react-bootstrap';

// interface CardegProps {
//   product: any,
//   setCartDetails: (value: any) => void;
// }

// // function to truncate or limit title length

// const truncateTitle = (title: string, maxLength: number): string => {
//   return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
// };


// const Cardeg: FC<CardegProps> = (props) => {
//   const { image, title } = props.product

//   // const add = () => {
//   //   props.setCartDetails(props.product)
//   // }

//   return (
//     <>
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={image} style={{ height: '200px', width: '100%', padding: '10px' }} />
//         <Card.Body>
//           {/* <Card.Title>{title}</Card.Title> */}

//           <Card.Title style={{ fontSize: '16px' }}>
//             {truncateTitle(title, 20)}
//           </Card.Title>
//           <Card.Text>
//           </Card.Text>
//           <div style={{ display: 'flex', gap: '10px' }}>
//             <Button variant="primary" >Add to cart </Button>
//             <Button variant="primary">Add to favourite </Button>
//           </div>
//         </Card.Body>
//       </Card>

//     </>
//   );
// };

// export default Cardeg;











import Card from 'react-bootstrap/Card';
import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface CardegProps {
  product: any;
  setCartDetails?: (value: any) => void; // Made it optional
}

const truncateTitle = (title: string, maxLength: number): string => {
  return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
};

const Cardeg: FC<CardegProps> = ({ product, setCartDetails }) => {
  const { image, title } = product;
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (setCartDetails) {
      setCartDetails(product);
    }
    navigate('/cart-details', { state: { product } });
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ height: '200px', width: '100%', padding: '10px' }} />
      <Card.Body>
        <Card.Title style={{ fontSize: '16px' }}>
          {truncateTitle(title, 20)}
        </Card.Title>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
          <Button variant="primary">Add to favourite</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cardeg;