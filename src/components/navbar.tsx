import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FC } from 'react';

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <>
      <Navbar expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Ekart store</Navbar.Brand>

          <Form className="d-flex" style={{ width: '40%' }}>
            <Form.Control
              type="search"
              placeholder="Search for products,brands and more"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success" >Search</Button> */}
          </Form>


          <NavDropdown
            title=" Account"
            id={`offcanvasNavbarDropdown-expand-${false}`}
          >
            <NavDropdown.Item href="#action1">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action2">
              Wishlist
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action5">
              Orders
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action6">
              Notifications
            </NavDropdown.Item>
            <NavDropdown.Divider />


            <NavDropdown.Item href="#action7">
              Ekart zone
            </NavDropdown.Item>
            <NavDropdown.Divider />


            <NavDropdown.Item href="#action8">
              Gift cards
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action9">
              Coupons
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action10">
              Logout
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1"></Nav.Link>
              <Nav.Link href="#action2"></Nav.Link>
              <Nav.Link href="#action2"></Nav.Link>

            </Nav>
          </NavDropdown>


          <Nav className="justify-content-end flex-grow-1" style={{ marginLeft: '50px' }}>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>

          <Nav className="justify-content-end flex-grow-1" style={{ marginLeft: '10px' }}>
            <Nav.Link href="#sell">Become a seller</Nav.Link>
          </Nav>


          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"  >


            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>

              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <NavDropdown
                title="My Account"
                id={`offcanvasNavbarDropdown-expand-${false}`}
              >
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action4">
                  Wishlist
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action5">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action6">
                  Notifications
                </NavDropdown.Item>
                <NavDropdown.Divider />


                <NavDropdown.Item href="#action7">
                  Ekart zone
                </NavDropdown.Item>
                <NavDropdown.Divider />


                <NavDropdown.Item href="#action8">
                  Gift cards
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action9">
                  Coupons
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action10">
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>

                </Nav>
              </NavDropdown>

              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  );
};

export default NavBar;