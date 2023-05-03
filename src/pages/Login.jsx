import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className=' my-5'>
            <h3 className='text-success text-center'>Please Login !!!</h3>
            <div className='text-center'>
            <form className='my-4'>
                <h6 className='mb-2 ' style={{marginRight:"100px"}}> Your Email : </h6>
                <input type="email" className='p-2' placeholder='Enter your email' name='email' />
                <h6 className='my-2' style={{marginRight:"100px"}}>Your Password: </h6>
                <input type="password" className='p-2'  placeholder='Enter your password' name='password' />
                
            </form>
            <p>You have no account? <Link to='/resister'>Register</Link></p>
            </div>
        </Container>
    );
};

export default Login;