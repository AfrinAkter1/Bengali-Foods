// import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";

const NavigrationBar = () => {
  const {user} = useContext(AuthContext)
    return (
        
      <Container>
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className='text-success'>Bengali Foods</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink  className={`mx-5 text-decoration-none `} 
               to='/' style={({ isActive }) => ({ 
                color: isActive ? 'red' : 'black' })}>Home</NavLink>


              <NavLink className={`text-decoration-none `}
              to='/blogs' style={({ isActive }) => ({ 
                color: isActive ? 'red' : 'black' })}>Blogs</NavLink>
            </Nav>
            <Tooltip
  placement="bottom"
  overlay={user.displayName}
>
  <span><FaUserCircle className='mx-3' style={{fontSize:"32px"}}></FaUserCircle></span>
</Tooltip>  
            
              <Button variant="success">
         <Link className='text-decoration-none text-white' to='/login'>Login</Link></Button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    );
};

export default NavigrationBar;