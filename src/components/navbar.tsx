
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchText } from '../redux/slice/slice';

const NavBar: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(updateSearchText(searchTerm))
  },[searchTerm])

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?category=${searchTerm}`);
    }
  };

  return (
    <>
      <Navbar expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Ekart Store</Navbar.Brand>

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

          <Nav className="justify-content-end flex-grow-1" style={{ marginLeft: '50px', fontWeight: 'bolder' }}>
            <Nav.Link as={NavLink} to="/cart-Details">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1" style={{ marginLeft: '10px', fontWeight: 'bolder' }}>
            <Nav.Link as={NavLink} to="/sell">
              <i className="fa-solid fa-store"></i> Become a Seller
            </Nav.Link>
          </Nav>

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
