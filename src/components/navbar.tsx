// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { NavLink } from 'react-router-dom';
// import { FC } from 'react';

// interface NavBarProps {

// }

// const NavBar: FC<NavBarProps> = ({ }) => {
//   return (
//     <>
//       <Navbar expand={false} className="bg-body-tertiary mb-3">
//         <Container fluid>
//           <Navbar.Brand href="#">Ekart store</Navbar.Brand>

//           <Form className="d-flex" style={{ width: '40%' }}>
//             <Form.Control
//               type="search"
//               placeholder="Search for products,brands and more"
//               className="me-2"
//               aria-label="Search"
//             />
//             {/* <Button variant="outline-success" >Search</Button> */}
//           </Form>


//           <i className="fa-solid fa-user" ></i>
//           <NavDropdown
//             title=" Account"
//             id={`offcanvasNavbarDropdown-expand-${false}`} style={{ fontWeight: 'bolder' }}
//           >
//             <NavDropdown.Item as={NavLink}to="/profile">My Profile</NavDropdown.Item>
//             <NavDropdown.Divider />

//             <NavDropdown.Item as={NavLink}to="/wishlist">
//               Wishlist
//             </NavDropdown.Item>
//             <NavDropdown.Divider />

//             <NavDropdown.Item as={NavLink}to="/orders">
//               Orders
//             </NavDropdown.Item>
//             <NavDropdown.Divider />

//             <NavDropdown.Item as={NavLink}to="/notification">
//               Notifications
//             </NavDropdown.Item>
//             <NavDropdown.Divider />


//             <NavDropdown.Item as={NavLink}to="/ekartzone">
//               Ekart zone
//             </NavDropdown.Item>
//             <NavDropdown.Divider />


//             <NavDropdown.Item as={NavLink}to="/gcards">
//               Gift cards
//             </NavDropdown.Item>
//             <NavDropdown.Divider />

//             <NavDropdown.Item as={NavLink}to="/coupons">
//               Coupons
//             </NavDropdown.Item>
//             <NavDropdown.Divider />

//             <NavDropdown.Item as={NavLink}to="/logout">
//               Logout
//             </NavDropdown.Item>
//           </NavDropdown>


//           <Nav className="justify-content-end flex-grow-1" style={{ marginLeft: '50px', fontWeight: 'bolder' }}>
//             <Nav.Link as={NavLink} to="/cart"><i className="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
//           </Nav>

//           <Nav className="justify-content-end flex-grow-1" style={{ marginLeft: '10px', fontWeight: 'bolder' }}>
//             <Nav.Link as={NavLink} to="/sell"><i className="fa-solid fa-store"></i>Become a seller</Nav.Link>
//           </Nav>


//           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-${false}`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
//             placement="end"  >


//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>

//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>

//               <NavDropdown
//                 title="My Account"
//                 id={`offcanvasNavbarDropdown-expand-${false}`}
//               >
//                 <NavDropdown.Item as={NavLink}to="/profile">My Profile</NavDropdown.Item>
//                 <NavDropdown.Divider />

//                 <NavDropdown.Item as={NavLink}to="/wishlist">
//                   Wishlist
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />

//                 <NavDropdown.Item as={NavLink}to="/orders">
//                   Orders
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />

//                 <NavDropdown.Item as={NavLink}to="/notification">
//                   Notifications
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />


//                 <NavDropdown.Item as={NavLink}to="/ekartzone">
//                   Ekart zone
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />


//                 <NavDropdown.Item as={NavLink}to="/gcard">
//                   Gift cards
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />

//                 <NavDropdown.Item as={NavLink}to="/coupons">
//                   Coupons
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />

//                 <NavDropdown.Item as={NavLink}to="/logout">
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>

//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>

//     </>
//   );
// };

// export default NavBar;









import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, useNavigate } from 'react-router-dom';
import { FC, useState } from 'react';

const NavBar: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <>
      <Navbar expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Ekart Store</Navbar.Brand>

          {/* Search Form */}
          <Form className="d-flex" style={{ width: '40%' }} onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search for products, brands, and more"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>

          {/* Account Dropdown */}
          <NavDropdown
            title="Account"
            id={`offcanvasNavbarDropdown-expand-${false}`}
            style={{ fontWeight: 'bolder' }}
          >
            <NavDropdown.Item as={NavLink} to="/profile">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/wishlist">Wishlist</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/orders">Orders</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/notification">Notifications</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/ekartzone">Ekart Zone</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/gcards">Gift Cards</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/coupons">Coupons</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/logout">Logout</NavDropdown.Item>
          </NavDropdown>

          {/* Cart and Become a Seller Links */}
          <Nav className="justify-content-end flex-grow-1" style={{ marginLeft: '50px', fontWeight: 'bolder' }}>
            <Nav.Link as={NavLink} to="/cart">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1" style={{ marginLeft: '10px', fontWeight: 'bolder' }}>
            <Nav.Link as={NavLink} to="/sell">
              <i className="fa-solid fa-store"></i> Become a Seller
            </Nav.Link>
          </Nav>

          {/* Offcanvas for Small Screens */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* Duplicate of Account Dropdown for Offcanvas */}
              <NavDropdown title="My Account" id={`offcanvasNavbarDropdown-expand-${false}`}>
                <NavDropdown.Item as={NavLink} to="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/wishlist">Wishlist</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/orders">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/notification">Notifications</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ekartzone">Ekart Zone</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/gcards">Gift Cards</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/coupons">Coupons</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
