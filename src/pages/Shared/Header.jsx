import React from 'react';
import NavigrationBar from "./NavigrationBar";
import { Container } from 'react-bootstrap';
import Chef from '../Chef';
import About from '../About';

const Header = () => {
    return (
        <Container>
            {/* <NavigrationBar></NavigrationBar> */}
            <header className="header">

            </header>
            <img className="w-100 " style={{height:"450px"}} src='https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=1060&t=st=1683040574~exp=1683041174~hmac=875d25179f5c7b2f22cf1f1c959e1643361735d7c9315b7aadabe4ae729ae993' alt="" />
            <div className='text-center' style={{position:"relative", top:"-250px"}}>
                <h3 className='text-success'>Bengali Foods</h3>
                <h5>No matter how you cook, <br />Bengali food has many <br /> the recipes</h5>
            </div>
            <Chef></Chef>
            <About></About>
        </Container>
    );
};

export default Header;