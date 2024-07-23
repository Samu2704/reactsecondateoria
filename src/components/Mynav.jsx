import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Mynav.css"
import {InputGroup, Form} from'react-bootstrap';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';


function Mynav({handleSearch}) {
  const {theme, } = useContext(ThemeContext)
    return (
      <Navbar expand="lg" className={theme === "light" ? "mb-5" : "bg-dark mb-5 text-white"}>
        <Container>
          <Navbar.Brand href="#home">Scopri la nostra libreria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browser</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                />
              
            </InputGroup>
        </Container>
      </Navbar>
    );
  }
  
  export default Mynav;