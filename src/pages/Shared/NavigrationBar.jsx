// import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigrationBar = () => {
    return (
        
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className='text-success'>Bangli Foods</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Blogs</Nav.Link>
              
            </Nav>
            
              <Button variant="outline-success">Login</Button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    );
};

export default NavigrationBar;