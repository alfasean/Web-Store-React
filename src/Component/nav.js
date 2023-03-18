import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../CSS/style.css';
import  logo from './../Assets/logo.png'

function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor : '#FFF'}}>
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
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
            <Button className="button-search">Search</Button>
          </Form>

            
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Button className="mx-2 button-masuk">MASUK</Button>
          <Button className="mx-2 button-daftar">DAFTAR</Button>
        </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;