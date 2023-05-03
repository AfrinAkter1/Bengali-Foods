// import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavigrationBar = () => {
    return (
        
      <Container>
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
              <Link className='mx-5 text-decoration-none text-black' to='/'>Home</Link>
              <Link className='text-decoration-none text-black' to='/blogs'>Blogs</Link>
            </Nav>
            
              <Button variant="success"><Link className='text-decoration-none text-white' to='/login'>Login</Link></Button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    );
};

export default NavigrationBar;