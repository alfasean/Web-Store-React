import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../CSS/style.css';
import  logo from './../Assets/app-store.png'

function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor : '#2C74B3'}}>
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <p className="text-white d-inline-block align-top mx-2 name">Axilo Store</p>
          </Navbar.Brand>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Kamu Lagi Cari Apa?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>

            
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Button variant='outline-light' className="mx-2">MASUK</Button>
          <Button>DAFTAR</Button>
        </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;