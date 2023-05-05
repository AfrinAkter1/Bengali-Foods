import React from 'react';
import { Container } from 'react-bootstrap';
import {  FaFacebook , FaInstagram , FaTwitter, FaCopyright} from 'react-icons/fa';
const Footer = () => {
    return (
        <Container className='bg-dark pt-5'>
           <div className='text-danger text-center'>
           <FaFacebook />
           <FaInstagram className='mx-5'></FaInstagram>
           <FaTwitter></FaTwitter>
           </div>
           <div className=' text-center text-light'>
            <small className='mx-3'>Home</small>
            <small className='mx-3'>Menu</small>
            <small className='mx-3'>Story</small>
            <small className='mx-3'>Detox</small>
            <small className='mx-3'>Location</small>
           </div>
           <div className=' text-center text-light'>
            <small className='mx-3'>Contact</small>
            <small className='mx-3'>Blog</small>
            <small className='mx-3'>Catering</small>
            <small className='mx-3'>Delevery</small>
            
           </div>
           <div className='bg-danger text-center p-3 mt-4'>
            <p className='text-light'>HEALTHY FAST - Bengali FOOD, CRAFTED WITH IN MINNEAPOLIS</p>
           
            <p  className='text-white'><small><FaCopyright></FaCopyright> ALL Rights Reverved</small></p>
           </div>
        </Container>
    );
};

export default Footer;